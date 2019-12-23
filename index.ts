/*!
 * namegen
 * https://github.com/modern-dev/namegen
 *
 * Copyright (c) 2019 Bohdan Shtepan
 * Licensed under the MIT license.
 */

const adjectives: Array<string> = [
  'admiring',
  'adoring',
  'affectionate',
  'agitated',
  'amazing',
  'angry',
  'awesome',
  'beautiful',
  'blissful',
  'bold',
  'boring',
  'brave',
  'busy',
  'charming',
  'clever',
  'cool',
  'compassionate',
  'competent',
  'condescending',
  'confident',
  'cranky',
  'crazy',
  'dazzling',
  'determined',
  'distracted',
  'dreamy',
  'eager',
  'ecstatic',
  'elastic',
  'elated',
  'elegant',
  'eloquent',
  'epic',
  'exciting',
  'fervent',
  'festive',
  'flamboyant',
  'focused',
  'friendly',
  'frosty',
  'funny',
  'gallant',
  'gifted',
  'goofy',
  'gracious',
  'great',
  'happy',
  'hardcore',
  'heuristic',
  'hopeful',
  'hungry',
  'infallible',
  'inspiring',
  'interesting',
  'intelligent',
  'jolly',
  'jovial',
  'keen',
  'kind',
  'laughing',
  'loving',
  'lucid',
  'magical',
  'mystifying',
  'modest',
  'musing',
  'naughty',
  'nervous',
  'nice',
  'nifty',
  'nostalgic',
  'objective',
  'optimistic',
  'peaceful',
  'pedantic',
  'pensive',
  'practical',
  'priceless',
  'quirky',
  'quizzical',
  'recursing',
  'relaxed',
  'reverent',
  'romantic',
  'sad',
  'serene',
  'sharp',
  'silly',
  'sleepy',
  'stoic',
  'strange',
  'stupefied',
  'suspicious',
  'sweet',
  'tender',
  'thirsty',
  'trusting',
  'unruffled',
  'upbeat',
  'vibrant',
  'vigilant',
  'vigorous',
  'wizardly',
  'wonderful',
  'xenodochial',
  'youthful',
  'zealous',
  'zen',
];

const names: Array<string> = [
  // The first scientist to realize that elements could exist in the form of molecules rather than as individual atoms; originator of Avogadro’s law. https://en.wikipedia.org/wiki/Amedeo_Avogadro
  'avogadro',
  // A founder of modern chemistry: the first person to measure accurate atomic weights for the chemical elements; discovered three elements: cerium, thorium, and selenium; devised the modern symbols for elements; described how chemical bonds form by electrostatic attraction. https://en.wikipedia.org/wiki/J%C3%B6ns_Jacob_Berzelius
  'berzelius',
  // Founded quantum mechanics when he remodeled the atom so electrons occupied ‘allowed’ orbits around the nucleus while all other orbits were forbidden; architect of the Copenhagen interpretation of quantum mechanics. https://en.wikipedia.org/wiki/Niels_Bohr
  'bohr',
  //Transformed chemistry from a field bogged down in alchemy and mysticism into one based on measurement. He defined elements, compounds, and mixtures; and he discovered the first gas law – Boyle’s Law. https://en.wikipedia.org/wiki/Robert_Boyle
  'boyle',
  // Discovered how to locate the positions of atoms in solids using X-ray diffraction, enabling scientists to build 3D models of the atomic arrangements in solids. The discovery was arguably the most significant experimental breakthrough of twentieth century science. https://en.wikipedia.org/wiki/Lawrence_Bragg
  'bragg',
  // Discovered phosphorus, becoming the first named person in history to discover a chemical element. https://en.wikipedia.org/wiki/Hennig_Brand
  'brand',
  // The first named person in history to discover a new metal – cobalt; was one of the first scientists to condemn alchemy, publicly demonstrating tricks used by alchemists to make people think they could make gold. https://en.wikipedia.org/wiki/Georg_Brandt
  'brandt',
  // Discovered cesium and rubidium; discovered the antidote to arsenic poisoning; invented the zinc-carbon battery and flash photography; discovered how geysers operate. https://en.wikipedia.org/wiki/Robert_Bunsen
  'bunsen',
  // Chargaff’s rules paved the way to the discovery of DNA’s structure. https://en.wikipedia.org/wiki/Erwin_Chargaff
  'chargaff',
  // Codiscovered the chemical elements radium and polonium; made numerous pioneering contributions to the study of radioactive elements; carried out the first research into the treatment of tumors with radiation. https://en.wikipedia.org/wiki/Marie_Curie
  'curie',
  // Dalton’s Atomic Theory is the basis of chemistry; discovered Gay-Lussac’s Law relating gases’ temperature, volume, and pressure; discovered the law of partial gas pressures. https://en.wikipedia.org/wiki/John_Dalton
  'dalton',
  // Devised an atomic theory featuring tiny particles always in motion interacting through collisions; advocated a universe containing an infinity of diverse inhabited worlds governed by natural, mechanistic laws rather than gods; deduced that the light of stars explains the Milky Way’s appearance; discovered that a cone’s volume is one-third that of the cylinder with the same base and height. https://en.wikipedia.org/wiki/Democritus
  'democritus',
  // An ancient theory of natural selection; mass conservation; and the four elements which are now often misattributed to Aristotle. https://en.wikipedia.org/wiki/Empedocles
  'empedocles',
  // Discovered electromagnetic induction; devised Faraday’s laws of electrolysis; discovered the first experimental link between light and magnetism; carried out the first room-temperature liquefaction of a gas; discovered benzene. https://en.wikipedia.org/wiki/Michael_Faraday
  'faraday',
  // Provided much of the experimental data used to establish the structure of DNA; discovered that DNA can exist in two forms; established that coal acts as a molecular sieve. https://en.wikipedia.org/wiki/Rosalind_Franklin
  'franklin',
  // Gibbs invented vector analysis and founded the sciences of modern statistical mechanics and chemical thermodynamics. https://en.wikipedia.org/wiki/Josiah_Willard_Gibbs
  'gibbs',
  // Discovered element 72, hafnium. Pioneered isotopes as tracers to study chemical and biological processes; discovered how plants and animals utilize particular chemical elements after they are taken in as nutrients. https://en.wikipedia.org/wiki/George_de_Hevesy
  'hevesy',
  // Established that most of the naturally occurring elements in the periodic table were made inside stars and distributed through space by supernova explosions. https://en.wikipedia.org/wiki/Fred_Hoyle
  'hoyle',
  // Discovered the chemical elements uranium, zirconium, and cerium – naming the first two of these elements; verified the discoveries of titanium, tellurium, and strontium, again naming the first two. https://en.wikipedia.org/wiki/Martin_Heinrich_Klaproth
  'klaproth',
  // Invented kevlar, the incredibly strong plastic used in applications ranging from body armor to tennis racquet strings. https://en.wikipedia.org/wiki/Stephanie_Kwolek
  'kwolek',
  // A founder of modern chemistry; discovered oxygen’s role in combustion and respiration; discovered that water is a compound of hydrogen and oxygen; proved that diamond and charcoal are different forms of the same element, which he named carbon. https://en.wikipedia.org/wiki/Antoine_Lavoisier
  'lavoisier',
  // Invented the cyclotron, used by scientific teams in his laboratories to discover large numbers of new chemical elements and isotopes. Founded big science. https://en.wikipedia.org/wiki/Ernest_Lawrence
  'lawrence',
  // Author of Conversations on Chemistry, a unique textbook for its time written for people with little formal education, such as girls and the poor. The book inspired Michael Faraday to overcome his poor origins to become a great scientist. https://en.wikipedia.org/wiki/Jane_Marcet
  'marcet',
  // Discovered the periodic table in a dream. Utilized the organizing principles of the periodic table to correctly predict the existence and properties of six new chemical elements. https://en.wikipedia.org/wiki/Dmitri_Mendeleev
  'mendeleev',
  // Proved that every element’s identity is uniquely determined by its number of protons, establishing this is the true organizing principle of the periodic table; correctly predicted the existence of four new chemical elements; invented the atomic battery. https://en.wikipedia.org/wiki/Henry_Moseley
  'moseley',
  // Discovered how to produce polymer chains with orderly spatial arrangements – i.e. stereoregular polymers. https://en.wikipedia.org/wiki/Giulio_Natta
  'natta',
  // Invented dynamite, the blasting cap, gelignite, and ballistite; grew enormously wealthy manufacturing explosives; used his wealth to bequeath annual prizes in science, literature, and peace. https://en.wikipedia.org/wiki/Alfred_Nobel
  'nobel',
  // Discovered electromagnetism when he found that electric current caused a nearby magnetic needle to move; discovered piperine and achieved the first isolation of the element aluminum. https://en.wikipedia.org/wiki/Hans_Christian_%C3%98rsted
  'orsted',
  // The father of modern microbiology; transformed chemistry and biology with his discovery of mirror-image molecules; discovered anaerobic bacteria; established the germ theory of disease; invented food preservation by pasteurization. https://en.wikipedia.org/wiki/Louis_Pasteur
  'pasteur',
  // Maverick giant of chemistry; formulated valence bond theory and electronegativity; founded the fields of quantum chemistry, molecular biology, and molecular genetics. Discovered the alpha-helix structure of proteins; proved that sickle-cell anemia is a molecular disease. https://en.wikipedia.org/wiki/Linus_Pauling
  'pauling',
  // Discovered francium, the last of the naturally occurring chemical elements to be discovered – all elements since have been produced artificially. https://en.wikipedia.org/wiki/Marguerite_Perey
  'perey',
  // At age 18 started the synthetic dye revolution when his discovery of mauveine brought the once formidably expensive color purple to everyone. Perkins’ revolution took the world by storm, transforming textiles, foods, and medicine. https://en.wikipedia.org/wiki/William_Henry_Perkin
  'perkin',
  // Discovered that light can donate a small amount of energy to a molecule, changing the light’s color and causing the molecule to vibrate. The color change acts as a ‘fingerprint’ for the molecule that can be used to identify molecules and detect diseases such as cancer. https://en.wikipedia.org/wiki/C._V._Raman
  'raman',
  // Predicted the existence of the noble gases and discovered or was first to isolate every member of the group; created the world’s first neon light. https://en.wikipedia.org/wiki/William_Ramsay
  'ramsay',
  // The father of nuclear chemistry and nuclear physics; discovered and named the atomic nucleus, the proton, the alpha particle, and the beta particle; discovered the concept of nuclear half-lives; achieved the first laboratory transformation of one element into another. https://en.wikipedia.org/wiki/Ernest_Rutherford
  'rutherford',
  // Took part in the discovery of ten of the periodic table’s chemical elements. His work on the electronic structure of elements led to the periodic table being rewritten. https://en.wikipedia.org/wiki/Glenn_T._Seaborg
  'seaborg',
  // Founded macromolecular chemistry when he established that molecules made of hundreds of thousands of atoms exist; demonstrated that synthetic polymers can make fibers similar to natural fibers; discovered polyoxymethylene; discovered pyrethroid natural insecticides. https://en.wikipedia.org/wiki/Hermann_Staudinger
  'staudinger',
  // Discovered the electron; invented one of the most powerful tools in analytical chemistry – the mass spectrometer; obtained the first evidence for isotopes of stable elements. https://en.wikipedia.org/wiki/J._J._Thomson
  'thomson',
  // Discovered deuterium; showed how isotope ratios in rocks reveal past Earth climates; founded modern planetary science; the Miller-Urey experiment demonstrated that electrically sparking simple gases produces amino acids – the building blocks of life. https://en.wikipedia.org/wiki/Harold_Urey
  'urey',
  // Pioneer of electrical science; invented the electric battery; wrote the first electromotive series; isolated methane for the first time; discovered a methane-air mixture could be exploded using an electric spark – the basis of the internal combustion engine. https://en.wikipedia.org/wiki/Alessandro_Volta
  'volta',
  // Founded microbial ecology; discovered chemosynthetic life forms which obtain energy from chemical reactions rather than from sunlight; discovered nitrogen-fixing bacteria in soil that make nitrates available to green plants. https://en.wikipedia.org/wiki/Sergei_Winogradsky
  'winogradsky',
];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min: number, max: number): number => Math.random() * (max - min) + min;

/**
 *
 */
export const getRandomName = (): string  => {
  const left = adjectives[getRandomArbitrary(0, adjectives.length)];
  const right = names[getRandomArbitrary(0, names.length)];

  return `${left}_${right}`;
};
