// The Long Frieze — app logic
// Handles rendering, hash-based deep linking, and the two-tier image fallback
// (local self-hosted file -> original Wikimedia URL -> icon).

const track = document.getElementById('track');
const detailRoot = document.getElementById('detailRoot');
const promptState = document.getElementById('promptState');

let activeEraId = null;
let activeArtifactIdx = 0;

function findEra(id){
  return eras.find(e => e.id === id);
}

/**
 * Called from an <img onerror="..."> in the artifact card.
 * First failure: try the Wikimedia fallback URL.
 * Second failure: give up on the photo and reveal the icon placeholder.
 */
function handleImageError(imgEl, fallbackUrl){
  if(!imgEl.dataset.triedFallback && fallbackUrl){
    imgEl.dataset.triedFallback = '1';
    imgEl.src = fallbackUrl;
  } else {
    imgEl.closest('.visual').classList.add('img-failed');
  }
}

function renderTrack(){
  track.innerHTML = '';
  eras.forEach(era => {
    const btn = document.createElement('button');
    btn.className = 'node' + (era.id === activeEraId ? ' active' : '');
    btn.setAttribute('aria-pressed', era.id === activeEraId ? 'true' : 'false');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', era.id === activeEraId ? 'true' : 'false');
    btn.id = 'tab-' + era.id;
    btn.innerHTML = `
      <span class="date">${era.date}</span>
      <span class="medallion"><svg><use href="#${era.icon}"/></svg></span>
      <span class="period-name">${era.name}</span>
    `;
    btn.addEventListener('click', () => selectEra(era.id, { pushHistory: true }));
    track.appendChild(btn);
  });
}

/**
 * Select an era. pushHistory controls whether we add a new browser history
 * entry (true for user clicks, false when we're just reacting to
 * popstate/hashchange/initial load so we don't create loops or duplicate entries).
 */
function selectEra(id, opts){
  opts = opts || {};
  activeEraId = id;
  activeArtifactIdx = 0;
  renderTrack();
  renderDetail();

  if(opts.pushHistory && location.hash.slice(1) !== id){
    history.pushState({ eraId: id }, '', '#' + id);
  }

  // Keep the selected node in view when the timeline scrolls horizontally.
  const activeNode = document.getElementById('tab-' + id);
  if(activeNode && activeNode.scrollIntoView){
    activeNode.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function clearEra(){
  activeEraId = null;
  renderTrack();
  renderDetail();
}

function renderDetail(){
  const era = findEra(activeEraId);
  if(!era){
    promptState.style.display = 'block';
    detailRoot.innerHTML = '';
    return;
  }
  promptState.style.display = 'none';

  const artifact = era.artifacts[activeArtifactIdx];

  const tabsHtml = era.artifacts.length > 1
    ? `<div class="artifact-tabs" role="tablist" aria-label="Artifacts in ${era.name}">${era.artifacts.map((a,i) => `
        <button data-idx="${i}" role="tab" aria-selected="${i===activeArtifactIdx}" class="${i===activeArtifactIdx ? 'active' : ''}">${a.name}</button>
      `).join('')}</div>`
    : '';

  const highlightsHtml = era.highlights
    ? `<div class="facts-strip">${era.highlights.map(h => `
        <div><p class="fact-label">${h.label}</p><p class="fact-value">${h.value}</p></div>
      `).join('')}</div>`
    : '';

  const legacyHtml = era.legacy
    ? `<div class="legacy-note"><span class="legacy-label">Lasting influence</span><p>${era.legacy}</p></div>`
    : '';

  const detailsListHtml = (artifact.dateMade || artifact.dimensions || artifact.housedAt)
    ? `<ul class="details-list">
        ${artifact.dateMade ? `<li><span class="dt">Made</span><span class="dd">${artifact.dateMade}</span></li>` : ''}
        ${artifact.dimensions ? `<li><span class="dt">Dimensions</span><span class="dd">${artifact.dimensions}</span></li>` : ''}
        ${artifact.housedAt ? `<li><span class="dt">Now housed at</span><span class="dd">${artifact.housedAt}</span></li>` : ''}
      </ul>`
    : '';

  detailRoot.innerHTML = `
    <div class="detail visible" role="tabpanel" aria-labelledby="tab-${era.id}">
      <div class="era-head">
        <h3>${era.name}</h3>
        <span class="era-date">${era.date}</span>
      </div>
      <p class="era-blurb">${era.blurb}</p>
      ${tabsHtml}
      <div class="artifact-card">
        <div>
          <div class="visual">
            <div class="frame">
              <img src="${artifact.image}" alt="${artifact.name}" loading="lazy"
                   onerror="handleImageError(this, '${artifact.imageFallback || ''}')">
              <div class="icon-fallback"><svg><use href="#${era.icon}"/></svg></div>
            </div>
            <div class="icon-badge"><svg><use href="#${era.icon}"/></svg></div>
          </div>
          <span class="credit">${artifact.credit}</span>
        </div>
        <div>
          <p class="name">${artifact.name}</p>
          <p class="meta"><span>${artifact.medium}</span><span>${artifact.region}</span></p>
          <p class="context">${artifact.context}</p>
          ${detailsListHtml}
        </div>
      </div>
      ${highlightsHtml}
      ${legacyHtml}
    </div>
  `;

  if(era.artifacts.length > 1){
    detailRoot.querySelectorAll('.artifact-tabs button').forEach(b => {
      b.addEventListener('click', () => {
        activeArtifactIdx = parseInt(b.dataset.idx, 10);
        renderDetail();
      });
    });
  }
}

// ---------- hash-based deep linking ----------

function eraIdFromHash(){
  const id = decodeURIComponent(location.hash.replace(/^#/, ''));
  return (id && findEra(id)) ? id : null;
}

// Browser back/forward (works because we use history.pushState with state objects)
window.addEventListener('popstate', (e) => {
  const stateId = e.state && e.state.eraId;
  const id = stateId && findEra(stateId) ? stateId : eraIdFromHash();
  if(id){
    selectEra(id, { pushHistory: false });
  } else {
    clearEra();
  }
});

// Manual hash edits or hash-based links clicked while the page is already open
window.addEventListener('hashchange', () => {
  const id = eraIdFromHash();
  if(id && id !== activeEraId){
    selectEra(id, { pushHistory: false });
  } else if(!id && activeEraId){
    clearEra();
  }
});

// ---------- initial load ----------

const initialId = eraIdFromHash();
if(initialId){
  activeEraId = initialId;
}
renderTrack();
renderDetail();
