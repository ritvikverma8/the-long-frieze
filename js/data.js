// Era and artifact data for The Long Frieze.
// Each artifact's `image` points to a locally hosted file under /images.
// `imageFallback` is the original Wikimedia Commons URL, used automatically
// if the local file hasn't been downloaded yet (see scripts/download-images.js).

const eras = [
  {
    id: "indus",
    date: "c. 2600–1900 BCE",
    name: "Indus Valley Civilization",
    icon: "icon-indus",
    blurb: "The earliest phase of art on the subcontinent comes from the cities of Harappa and Mohenjo-daro, where craftsmen worked in fired clay, steatite, and cast bronze centuries before any surviving Indian text was written. At its height the Indus Valley Civilization covered a larger area than Egypt or Mesopotamia, and its cities shared standardized weights, brick sizes, and a common script — evidence of a level of coordination that shows up in the consistency of its small-scale art as much as in its city planning.",
    highlights: [
      { label: "Timespan", value: "roughly 700 years" },
      { label: "Key sites", value: "Mohenjo-daro, Harappa, Dholavira" },
      { label: "Materials", value: "Bronze, steatite, terracotta" },
      { label: "Script status", value: "Undeciphered to this day" }
    ],
    legacy: "The Indus script remains undeciphered, so everything known about Harappan art is read from the objects themselves — making the Dancing Girl and the Pashupati Seal two of the most closely studied artifacts in South Asian archaeology.",
    artifacts: [
      {
        name: "Bronze \u2018Dancing Girl\u2019",
        medium: "Cast bronze, lost-wax technique",
        region: "Mohenjo-daro",
        context: "A small standing figure barely 11 centimetres tall, cast solid in bronze using the lost-wax method. Her relaxed, weight-shifted pose and the row of bangles on her arm are often cited as the earliest known example of naturalistic figure modelling from the subcontinent, suggesting an already mature bronze-casting tradition by the mid-third millennium BCE. Excavated by archaeologist Ernest Mackay in 1926 from a house in Mohenjo-daro's HR area, the figure survived nearly intact despite being cast solid rather than hollow, an unusually resource-intensive choice for an object of its size. Sir John Marshall, then director-general of the Archaeological Survey of India, described her as unlike anything expected of so ancient a civilization, and her confident stance still shapes how the Indus Valley's artistic sophistication is judged today.",
        image: "images/dancing-girl.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Dancing_girl_of_Mohenjo-daro.jpg",
        credit: "National Museum, New Delhi \u2014 Wikimedia Commons",
        dateMade: "c. 2500 BCE",
        dimensions: "10.8 cm high",
        housedAt: "National Museum, New Delhi"
      },
      {
        name: "Pashupati Seal",
        medium: "Carved steatite",
        region: "Mohenjo-daro",
        context: "One of thousands of small steatite seals used for trade and administration, this one shows a horned, seated figure surrounded by animals, alongside undeciphered Indus script. Because the script remains unread, the seal is interpreted mainly through its imagery, and scholars still debate whether the figure anticipates later Indian deities. The seal was carved so that, when pressed into wet clay, it left a raised mirror image used to mark ownership of goods or seal storage jars — a purely administrative object that happens to carry one of the most reproduced images from Harappan civilization. Similar seals turn up as far away as sites in Mesopotamia, pointing to long-distance trade contacts across the ancient Near East.",
        image: "images/pashupati-seal.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Pashupati_Seal_from_the_Harappan_Civilization.jpg",
        credit: "National Museum, New Delhi \u2014 Wikimedia Commons",
        dateMade: "c. 2350\u20132000 BCE",
        dimensions: "approx. 3.6 \u00d7 3.5 cm",
        housedAt: "National Museum, New Delhi"
      }
    ]
  },
  {
    id: "mauryan",
    date: "c. 322–185 BCE",
    name: "Mauryan Period",
    icon: "icon-mauryan",
    blurb: "Under the Mauryan empire, and especially Emperor Ashoka, stone replaced wood and brick as the material of royal and religious monuments, producing India's first large-scale stone sculpture and the polished 'Mauryan' finish. After his conversion to Buddhism following the bloody conquest of Kalinga, Ashoka used stone monuments as instruments of policy as much as devotion, raising pillars and cutting inscriptions into rock faces across an empire that stretched from Afghanistan to the Bay of Bengal.",
    highlights: [
      { label: "Timespan", value: "roughly 137 years" },
      { label: "Key sites", value: "Sarnath, Sanchi, Pataliputra" },
      { label: "Materials", value: "Polished sandstone" },
      { label: "Patron", value: "Emperor Ashoka (r. c. 268\u2013232 BCE)" }
    ],
    legacy: "Ashoka raised pillars across the empire to publish edicts on governance and ethics; the four-lion capital that crowned the Sarnath pillar was adopted in 1950 as the State Emblem of India.",
    artifacts: [
      {
        name: "Lion Capital of Sarnath",
        medium: "Polished sandstone",
        region: "Sarnath",
        context: "Commissioned by Ashoka to crown a freestanding pillar marking the site of the Buddha's first sermon, this capital shows four addorsed lions on an abacus carved with a wheel and animals. Its high, mirror-like polish is a hallmark of Mauryan court sculpture, and the capital was later adopted as independent India's national emblem. The polish itself is technically remarkable: achieved without glazing, purely through abrasive burnishing of the sandstone, it has survived over two thousand years largely intact. Below the lions, the abacus carries reliefs of a bull, a horse, an elephant, and a lion, separated by wheels, imagery generally read as representing the cardinal directions and the Buddha's teaching. The capital was excavated in 1904–05 by archaeologist Friedrich Oscar Oertel, broken into pieces but recoverable, and is now displayed at the Sarnath Archaeological Museum built specifically to house it.",
        image: "images/sarnath-lion-capital.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarnath_capital.jpg",
        credit: "Sarnath Museum \u2014 Wikimedia Commons",
        dateMade: "c. 250 BCE",
        dimensions: "2.15 m high",
        housedAt: "Sarnath Museum, Uttar Pradesh"
      },
      {
        name: "Lomas Rishi Cave",
        medium: "Rock-cut architecture",
        region: "Barabar Hills, Bihar",
        context: "Cut into a single granite outcrop, the Lomas Rishi Cave is generally considered the oldest surviving rock-cut sanctuary in India, made for ascetics of the Ajivika sect during or shortly after Ashoka's reign. Its arched facade imitates the curved bamboo-and-thatch huts that timber architecture of the period would have used, translating a wooden building tradition into stone even though the cave itself has no structural need to. The interior is left almost entirely bare and highly polished in the Mauryan manner, prioritizing acoustic and contemplative space over decoration — a striking contrast to the densely carved temple interiors that would follow centuries later.",
        image: "images/lomas-rishi-cave.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Lomas_Rishi_Cave,_Barabar_Hills.jpg",
        credit: "Barabar Hills, Bihar \u2014 Wikimedia Commons",
        dateMade: "c. 3rd century BCE",
        dimensions: "Chamber approx. 4.4 \u00d7 2.7 m",
        housedAt: "Barabar Hills, Bihar (in situ)"
      }
    ]
  },
  {
    id: "gupta",
    date: "c. 320–550 CE",
    name: "Gupta Period",
    icon: "icon-gupta",
    blurb: "Often called a classical age of Indian art, the Gupta period produced sculpture and painting whose calm, balanced figures and refined technique set standards later artists across South and Southeast Asia continued to reference. The Gupta court also patronized literature, astronomy, and mathematics — the era of Kalidasa and Aryabhata — and the same appetite for polish and proportion that shaped Sanskrit poetry shows up equally in stone and pigment.",
    highlights: [
      { label: "Timespan", value: "roughly 230 years" },
      { label: "Key sites", value: "Ajanta, Sarnath, Nalanda" },
      { label: "Materials", value: "Sandstone, fresco pigment" },
      { label: "Often called", value: "The Golden Age of India" }
    ],
    legacy: "The calm, symmetrical Sarnath Buddha type travelled along trade and pilgrimage routes and shaped Buddhist sculpture from Sri Lanka to China and Southeast Asia for centuries afterward.",
    artifacts: [
      {
        name: "Ajanta Cave Murals",
        medium: "Fresco-secco wall painting",
        region: "Ajanta, Maharashtra",
        context: "Painted on the walls of rock-cut Buddhist monasteries, these murals depict Jataka tales of the Buddha's previous lives through fluid line, naturalistic gesture, and a limited earth-pigment palette. Rediscovered in 1819 after centuries of abandonment, they remain the most complete surviving record of ancient Indian painting. The technique is more precisely fresco-secco than true fresco: painters applied pigment to a dry lime-plaster ground rather than wet plaster, building up layers of ochre, terre verte, lapis-derived blue, and lamp black. The complex comprises thirty caves cut into a horseshoe-shaped cliff above the Waghora river, excavated in two main phases roughly seven centuries apart, and was designated a UNESCO World Heritage Site in 1983.",
        image: "images/ajanta-murals.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Mural_paintings_at_Ajanta_caves.jpg",
        credit: "Ajanta Caves \u2014 Wikimedia Commons",
        dateMade: "c. 2nd century BCE \u2013 6th century CE",
        dimensions: "30 rock-cut caves",
        housedAt: "Ajanta Caves, Maharashtra (in situ)"
      },
      {
        name: "Sarnath Standing Buddha",
        medium: "Carved sandstone",
        region: "Sarnath",
        context: "Sculpted in the smooth, translucent-robed style associated with Sarnath workshops, this figure shows the serene, symmetrical face and simplified drapery that became the template for Buddha images across much of Asia in the centuries that followed. Unlike the earlier Mathura school, which rendered drapery as a network of ridged folds, Sarnath sculptors carved the robe almost invisibly, letting the body's form read through a single continuous surface — a deliberate refinement rather than an omission. This particular figure is shown performing dharmachakra pravartana mudra, the hand gesture symbolizing the Buddha's first turning of the wheel of law, tying the sculpture directly to the site's significance as the location of his first sermon.",
        image: "images/sarnath-buddha.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarnath_Museum_standing_Buddha.jpg",
        credit: "Sarnath Museum \u2014 Wikimedia Commons",
        dateMade: "c. 475 CE",
        dimensions: "approx. 1.6 m high",
        housedAt: "Sarnath Museum, Uttar Pradesh"
      }
    ]
  },
  {
    id: "medieval",
    date: "c. 9th–13th century CE",
    name: "Medieval Temple Art",
    icon: "icon-medieval",
    blurb: "Regional dynasties across the subcontinent built increasingly elaborate stone temples, turning their towers and walls into surfaces for dense figural carving, and casting bronze images for temple ritual and processions. Patronage was regional and competitive: Chola kings in the south, Chandela rulers in central India, and the Eastern Ganga dynasty in Odisha each used monumental temple building to project political power as much as religious devotion, which is part of why the surviving architecture varies so sharply from region to region.",
    highlights: [
      { label: "Timespan", value: "roughly 400 years" },
      { label: "Key sites", value: "Thanjavur, Khajuraho, Konark" },
      { label: "Materials", value: "Bronze, sandstone" },
      { label: "Patrons", value: "Chola, Chandela, and Eastern Ganga dynasties" }
    ],
    legacy: "The Chola bronze-casting tradition never fully died out — temple workshops in Tamil Nadu still cast Nataraja images using the same lost-wax method for ritual use today.",
    artifacts: [
      {
        name: "Chola Nataraja Bronze",
        medium: "Cast bronze (lost-wax)",
        region: "Tamil Nadu",
        context: "Cast under Chola patronage for temple processions, this image of Shiva as the cosmic dancer, encircled by a ring of fire, is engineered so its weight balances on a single point. Its combination of dynamic pose and controlled geometry is regarded as a high point of South Indian bronze casting. Unlike stone temple sculpture, these bronzes were made to move: fitted with lugs at the base, they were carried on poles through the streets during temple festivals, so sculptors had to balance ritual iconography with the practical demands of a portable, load-bearing object. The circle of flame surrounding Shiva represents the cosmic cycle of creation and destruction, while the figure he tramples, the dwarf Apasmara, represents ignorance.",
        image: "images/chola-nataraja.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiva_Nataraja_in_BM.jpg",
        credit: "British Museum \u2014 Wikimedia Commons",
        dateMade: "c. 10th\u201312th century CE",
        dimensions: "typically 60\u2013100 cm high",
        housedAt: "Museum and temple collections worldwide"
      },
      {
        name: "Khajuraho Temple Sculpture",
        medium: "Carved sandstone relief",
        region: "Khajuraho, Madhya Pradesh",
        context: "The temple walls at Khajuraho are covered with tightly composed relief carvings of deities, celestial figures, and courtly scenes, cut so deeply that the figures seem to step away from the stone. The complex illustrates how medieval temple architecture and sculpture were designed as a single, unified programme. Built by the Chandela dynasty over roughly a century, the site originally held around 85 temples, of which 25 survive; the Kandariya Mahadeva Temple, the largest, rises through a sequence of ascending towers meant to represent the mountain home of the gods. Khajuraho was largely abandoned after the 13th century and left overgrown until a British surveyor, T. S. Burt, brought it to wider attention in 1838.",
        image: "images/khajuraho-temple.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Architecture_of_the_Khajuraho_temples.jpg",
        credit: "Khajuraho Group of Monuments \u2014 Wikimedia Commons",
        dateMade: "c. 950\u20131050 CE",
        dimensions: "25 surviving temples",
        housedAt: "Khajuraho, Madhya Pradesh (in situ)"
      }
    ]
  },
  {
    id: "mughal",
    date: "c. 1526–1857 CE",
    name: "Mughal Period",
    icon: "icon-mughal",
    blurb: "The Mughal court brought Persian, Central Asian, and Indian artistic traditions together in imperial workshops, producing detailed manuscript painting alongside an architecture of red sandstone, white marble, and inlaid stone. Successive emperors shaped this synthesis differently — Akbar built a diverse workshop of Hindu and Muslim painters recording a multi-faith empire, while his grandson Shah Jahan pushed architecture toward the restrained white-marble classicism seen at the Taj Mahal — so Mughal art shifted noticeably in character across the dynasty's three centuries.",
    highlights: [
      { label: "Timespan", value: "roughly 330 years" },
      { label: "Key sites", value: "Agra, Fatehpur Sikri, Delhi" },
      { label: "Materials", value: "Paper and pigment, marble" },
      { label: "Notable patrons", value: "Akbar, Jahangir, Shah Jahan" }
    ],
    legacy: "Mughal workshop practice — teams of specialists dividing drawing, painting, and portraiture on a single folio — shaped miniature painting traditions in Rajasthan and the Deccan long after Mughal power declined.",
    artifacts: [
      {
        name: "Mughal Miniature Painting",
        medium: "Opaque watercolour and gold on paper",
        region: "Imperial ateliers, North India",
        context: "Produced by teams of specialist painters working under royal patronage, these small, densely detailed paintings recorded court life, hunts, and historical events with fine brushwork and jewel-toned pigment. Manuscripts such as the Akbarnama show how text and image were planned together as a single project. Production was genuinely collaborative: a senior master typically laid out the composition, a colourist filled in pigment, and a specialist portraitist handled faces, with the imperial workshop under Akbar employing more than a hundred painters at its peak. Pigments were mixed from mineral and organic sources — lapis lazuli for blue, gold leaf for royal regalia — and burnished to a glossy finish using an agate stone.",
        image: "images/akbarnama-folio.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/AbulFazlPresentingAkbarnama.jpg",
        credit: "Folio from the Akbarnama \u2014 Wikimedia Commons",
        dateMade: "c. 1590\u20131595 CE",
        dimensions: "approx. 33 \u00d7 22 cm (folio)",
        housedAt: "Victoria and Albert Museum, London"
      },
      {
        name: "Taj Mahal",
        medium: "White marble with pietra dura inlay",
        region: "Agra",
        context: "Built by Shah Jahan as a mausoleum for his wife Mumtaz Mahal, the Taj Mahal combines Persian garden design with Indian craftsmanship, its marble surfaces inlaid with semi-precious stone in floral patterns. Its symmetrical planning and use of light on white marble made it a defining monument of Mughal architecture. Construction took roughly two decades and drew craftsmen from across the empire and beyond, including calligraphers, masons, and pietra dura specialists working in a technique — inlaying cut, polished stone into marble to form images — imported via Persian and Central Asian workshops. The complex is laid out on a strict grid following the Persian charbagh, or four-part garden, with the mausoleum itself deliberately off-centre within the wider riverfront property, a detail still debated by architectural historians.",
        image: "images/taj-mahal.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal,_Agra,_India.jpg",
        credit: "Agra, Uttar Pradesh \u2014 Wikimedia Commons",
        dateMade: "1632\u20131653 CE",
        dimensions: "73 m high (main dome)",
        housedAt: "Agra, Uttar Pradesh (in situ)"
      }
    ]
  },
  {
    id: "bengal",
    date: "c. 1900s–1930s",
    name: "Bengal Renaissance",
    icon: "icon-bengal",
    blurb: "Responding to colonial-era art education modelled on European academies, a group of artists in Calcutta developed a deliberately Indian visual language drawing on Mughal miniatures, Ajanta murals, and Japanese wash technique. The movement grew alongside the Swadeshi movement's boycott of British goods, and its rejection of European oil-painting conventions carried an explicitly political charge: painting in an Indian idiom was itself a form of cultural self-assertion under colonial rule.",
    highlights: [
      { label: "Timespan", value: "roughly 1900s–1930s" },
      { label: "Key sites", value: "Calcutta School of Art" },
      { label: "Materials", value: "Watercolour wash on paper" },
      { label: "Key figure", value: "Abanindranath Tagore (1871\u20131951)" }
    ],
    legacy: "The Bengal School's break from colonial academic training is generally treated as the founding moment of Indian modern art, opening the way for the more radical experiments of the Progressive Artists' Group two generations later.",
    artifacts: [
      {
        name: "Bharat Mata, by Abanindranath Tagore",
        medium: "Watercolour wash on paper",
        region: "Calcutta",
        context: "Painted in 1905 amid the Swadeshi movement, this small watercolour by Abanindranath Tagore shows a four-armed woman in saffron robes offering grain, cloth, a manuscript, and prayer beads. Its soft, layered wash technique, developed in place of the oil-based realism taught in colonial art schools, became the signature style of the Bengal School and marked the movement widely seen as the starting point of Indian modern art. The four objects she holds were chosen deliberately: food, clothing, learning, and spiritual devotion, framing the nation as a nurturing mother figure rather than a political abstraction. Tagore's teacher, the British art administrator E. B. Havell, actively encouraged this turn away from Western academic painting, an unusual position for a colonial official to take at the time.",
        image: "images/bharat-mata.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Bharat_Mata_by_Abanindranath_Tagore.jpg",
        credit: "Victoria Memorial Hall, Kolkata \u2014 Wikimedia Commons",
        dateMade: "1905 CE",
        dimensions: "approx. 26 \u00d7 15 cm",
        housedAt: "Victoria Memorial Hall, Kolkata"
      },
      {
        name: "The Passing of Shah Jahan, by Abanindranath Tagore",
        medium: "Oil on board",
        region: "Calcutta",
        context: "Painted in 1902, three years before Bharat Mata, this earlier work shows the aged Mughal emperor Shah Jahan on his deathbed, gazing at the distant Taj Mahal while his daughter Jahanara sits at his feet. It depicts the historical episode in which Shah Jahan spent his final years under house arrest, imprisoned by his own son Aurangzeb after a war of succession. The painting won a silver medal at the 1902–03 Delhi Durbar exhibition, an early public sign of recognition for Tagore's move away from strict European naturalism, and its muted, atmospheric colour handling shows him still transitioning toward the flatter wash technique he would fully develop a few years later.",
        image: "images/passing-of-shah-jahan.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Abanindranath_Tagore_-_The_Passing_of_Shah_Jahan,_1902.jpg",
        credit: "Victoria Memorial Hall, Kolkata \u2014 Wikimedia Commons",
        dateMade: "1902 CE",
        dimensions: "35.5 \u00d7 25.4 cm",
        housedAt: "Victoria Memorial Hall, Kolkata"
      }
    ]
  },
  {
    id: "modern",
    date: "1947 – present",
    name: "Modern & Contemporary",
    icon: "icon-modern",
    blurb: "After independence, Indian artists engaged directly with international modernism while drawing on local subject matter and materials, establishing an art scene that has continued to diversify through the following decades. Later generations expanded well beyond the Progressive Artists' Group's oil-on-canvas modernism into photography, installation, and digital media, with contemporary Indian artists now exhibiting regularly at international biennials and auction houses alongside a growing gallery and museum infrastructure at home.",
    highlights: [
      { label: "Timespan", value: "1947 to today" },
      { label: "Key sites", value: "Bombay, Delhi, and a global diaspora" },
      { label: "Materials", value: "Oil, mixed media, installation" },
      { label: "Founding group", value: "Progressive Artists' Group, 1947" }
    ],
    legacy: "Members of the Progressive Artists' Group went on to individually shape Indian art markets and museums for decades; their work now regularly sets records at Indian and international auctions.",
    artifacts: [
      {
        name: "The Progressive Artists' Group",
        medium: "Founders of a movement, photographed together",
        region: "Bombay",
        context: "Formed in Bombay in 1947, the Progressive Artists' Group — including M. F. Husain, S. H. Raza, F. N. Souza, K. H. Ara, S. K. Bakre, and H. A. Gade — broke from both academic realism and the Bengal School, working in bold, modernist idioms while drawing on Indian folk and classical imagery. Individual paintings by the group's members remain under copyright, so this entry is illustrated with a photograph of the founders rather than a reproduction of any single work; their paintings are viewable at institutions such as the National Gallery of Modern Art, New Delhi. The group disbanded within a few years of forming, but its members went on to independently defining careers — Husain became one of India's most recognized painters, Raza built a career largely in Paris before returning his focus to India, and Souza was among the first Indian artists to gain sustained recognition in the London art world.",
        image: "images/progressive-artists-group.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Bombay_Progressive_Artists_Group.jpg",
        credit: "Bombay, 1940s \u2014 Wikimedia Commons",
        dateMade: "Founded 1947",
        dimensions: "Six founding members",
        housedAt: "Works held at National Gallery of Modern Art, New Delhi, and international collections"
      },
      {
        name: "National Gallery of Modern Art",
        medium: "Museum institution, housed in Jaipur House",
        region: "New Delhi",
        context: "Established in 1954 and inaugurated by Vice-President Sarvepalli Radhakrishnan in the presence of Prime Minister Jawaharlal Nehru, the National Gallery of Modern Art was independent India's first state institution dedicated to modern Indian art. It is housed in Jaipur House, a former princely residence completed in 1938 for the Maharaja of Jaipur, designed by the British architect Arthur Blomfield in a butterfly-shaped plan with a central dome. The museum's collection now holds more than 17,000 works by over 2,000 artists, including pieces by Raja Ravi Varma, Amrita Sher-Gil, and the Progressive Artists' Group, and a 2009 expansion made it one of the largest museums of modern art in South Asia.",
        image: "images/jaipur-house-ngma.jpg",
        imageFallback: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur_House_Delhi.jpg",
        credit: "Jaipur House, New Delhi \u2014 Wikimedia Commons",
        dateMade: "Building 1938; institution founded 1954",
        dimensions: "Butterfly-plan building with central dome",
        housedAt: "Jaipur House, Rajpath, New Delhi"
      }
    ]
  }
];

// Allow this file to be `require()`-d from Node (e.g. by scripts/download-images.js)
// without affecting the browser, where `module` is undefined.
if(typeof module !== 'undefined' && module.exports){
  module.exports = eras;
}
