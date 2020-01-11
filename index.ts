/*!
 * namegen - Docker's like random name generator
 * https://github.com/modern-dev/namegen
 *
 * Copyright (c) 2020 Bohdan Shtepan
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
  // The iridium layer, dinosaur death by meteorite impact, and subatomic particle discoveries. https://en.wikipedia.org/wiki/Luis_Walter_Alvarez
  'alvarez',
  // An ancient scientific revolution: the first person in history to recognize that our planet is free in space and does not need to sit on something. https://en.wikipedia.org/wiki/Anaximander
  'anaximander',
  // Promoted the idea that the earth follows a circular orbit around the sun eighteen centuries before Nicolaus Copernicus resurrected the idea. https://en.wikipedia.org/wiki/Aristarchus_of_Samos
  'aristarchus',
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
  // Produced the best star catalog that had ever been compiled and measured the orbit of Mars with unprecedented accuracy, paving the way for Kepler’s laws of planetary motion and Newton’s law of gravity. https://en.wikipedia.org/wiki/Tycho_Brahe
  'brahe',
  // Discovered cesium and rubidium; discovered the antidote to arsenic poisoning; invented the zinc-carbon battery and flash photography; discovered how geysers operate. https://en.wikipedia.org/wiki/Robert_Bunsen
  'bunsen',
  // Discovered that massive stars can collapse under their own gravity to reach infinite densities. Today we call these collapsed stars black holes. https://en.wikipedia.org/wiki/Subrahmanyan_Chandrasekhar
  'chandrasekhar',
  // Chargaff’s rules paved the way to the discovery of DNA’s structure. https://en.wikipedia.org/wiki/Erwin_Chargaff
  'chargaff',
  // Started the scientific revolution with his book The Revolutions of the Celestial Spheres, explaining his belief that the solar system is centered on the sun, not the earth. https://en.wikipedia.org/wiki/Nicolaus_Copernicus
  'copernicus',
  // Codiscovered the chemical elements radium and polonium; made numerous pioneering contributions to the study of radioactive elements; carried out the first research into the treatment of tumors with radiation. https://en.wikipedia.org/wiki/Marie_Curie
  'curie',
  // Dalton’s Atomic Theory is the basis of chemistry; discovered Gay-Lussac’s Law relating gases’ temperature, volume, and pressure; discovered the law of partial gas pressures. https://en.wikipedia.org/wiki/John_Dalton
  'dalton',
  // Devised an atomic theory featuring tiny particles always in motion interacting through collisions; advocated a universe containing an infinity of diverse inhabited worlds governed by natural, mechanistic laws rather than gods; deduced that the light of stars explains the Milky Way’s appearance; discovered that a cone’s volume is one-third that of the cylinder with the same base and height. https://en.wikipedia.org/wiki/Democritus
  'democritus',
  // A founder of the search for extraterrestrial intelligence; devised the Drake equation to estimate the number of intelligent civilizations in our galaxy; first person to map the center of the Milky Way galaxy. https://en.wikipedia.org/wiki/Frank_Drake
  'drake',
  // An ancient theory of natural selection; mass conservation; and the four elements which are now often misattributed to Aristotle. https://en.wikipedia.org/wiki/Empedocles
  'empedocles',
  // Founded mathematical astronomy by creating the first mathematical model of the universe, turning physical reality into something more abstract offering a new vantage point from which we could study the universe. https://en.wikipedia.org/wiki/Eudoxus_of_Cnidus
  'eudoxus',
  // Discovered electromagnetic induction; devised Faraday’s laws of electrolysis; discovered the first experimental link between light and magnetism; carried out the first room-temperature liquefaction of a gas; discovered benzene. https://en.wikipedia.org/wiki/Michael_Faraday
  'faraday',
  // Provided much of the experimental data used to establish the structure of DNA; discovered that DNA can exist in two forms; established that coal acts as a molecular sieve. https://en.wikipedia.org/wiki/Rosalind_Franklin
  'franklin',
  // The father of modern science, Galileo discovered the first moons ever known to orbit another planet and that the Milky Way is made of stars. He rationalized how objects are affected by gravity, stated the principle of inertia, and proposed the first theory of relativity. https://en.wikipedia.org/wiki/Galileo_Galilei
  'galilei',
  // The last master of all mathematics, Gauss revolutionized number theory; he invented the method of least squares and the fast Fourier transform to recover the position of the lost dwarf planet Ceres. https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss
  'gauss',
  // Gibbs invented vector analysis and founded the sciences of modern statistical mechanics and chemical thermodynamics. https://en.wikipedia.org/wiki/Josiah_Willard_Gibbs
  'gibbs',
  // The first person in history to map a heavenly body after observing it with a telescope – the moon. Probably first to observe sunspots with a telescope, allowing him to determine the sun’s rotation rate. https://en.wikipedia.org/wiki/Thomas_Harriot
  'harriot',
  // Discovered five comets; produced an award-winning catalogue of nebulae; the brother-sister team of William & Caroline Herschel increased the number of known nebulae from about 100 to 2,500. https://en.wikipedia.org/wiki/Caroline_Herschel
  'herschel',
  // Discovered element 72, hafnium. Pioneered isotopes as tracers to study chemical and biological processes; discovered how plants and animals utilize particular chemical elements after they are taken in as nutrients. https://en.wikipedia.org/wiki/George_de_Hevesy
  'hevesy',
  // One of antiquity’s greatest scientists: founded the mathematical discipline of trigonometry; measured the earth-moon distance accurately; discovered the precession of the equinoxes; and documented the positions and magnitudes of over 850 stars. His combinatorics work was unequalled until 1870. https://en.wikipedia.org/wiki/Hipparchus
  'hipparchus',
  // Established that most of the naturally occurring elements in the periodic table were made inside stars and distributed through space by supernova explosions. https://en.wikipedia.org/wiki/Fred_Hoyle
  'hoyle',
  // Discovered there are galaxies beyond our own. Showed we live in a universe of many galaxies, each an isolated ‘island universe,’ separated by immense distances. Independently discovered and popularized Hubble’s law, believed by most cosmologists to indicate we live in an expanding universe. https://en.wikipedia.org/wiki/Edwin_Hubble
  'hubble',
  // Discovered the solar system’s planets follow elliptical paths; identified that the tides are caused mainly by the moon; proved how logarithms work; discovered the inverse square law of light intensity; his laws of planetary motion led Newton to his law of gravitation. https://en.wikipedia.org/wiki/Johannes_Kepler
  'kepler',
  // A poet, philosopher and scientist, Khayyam calculated the length of a year to the most accurate value ever, and showed how the intersections of conic sections can be utilized to yield geometric solutions of cubic equations. https://en.wikipedia.org/wiki/Omar_Khayyam
  'khayyam',
  // Discovered the chemical elements uranium, zirconium, and cerium – naming the first two of these elements; verified the discoveries of titanium, tellurium, and strontium, again naming the first two. https://en.wikipedia.org/wiki/Martin_Heinrich_Klaproth
  'klaproth',
  // Invented kevlar, the incredibly strong plastic used in applications ranging from body armor to tennis racquet strings. https://en.wikipedia.org/wiki/Stephanie_Kwolek
  'kwolek',
  // A founder of modern chemistry; discovered oxygen’s role in combustion and respiration; discovered that water is a compound of hydrogen and oxygen; proved that diamond and charcoal are different forms of the same element, which he named carbon. https://en.wikipedia.org/wiki/Antoine_Lavoisier
  'lavoisier',
  // Invented the cyclotron, used by scientific teams in his laboratories to discover large numbers of new chemical elements and isotopes. Founded big science. https://en.wikipedia.org/wiki/Ernest_Lawrence
  'lawrence',
  // Discovered that Cepheid variable stars act as a ‘standard candle,’ opening the door to measuring the distances to far-distant stars and the discovery of galaxies beyond the Milky Way. https://en.wikipedia.org/wiki/Henrietta_Swan_Leavitt
  'leavitt',
  // Discovered that space and the universe are expanding; discovered Hubble’s law; proposed the universe began with the explosion of a ‘primeval atom’ whose matter spread and evolved to form the galaxies and stars we observe today. https://en.wikipedia.org/wiki/Georges_Lema%C3%AEtre
  'lemaitre',
  // ‘Discovered’ an enormous network of canals and oases on Mars, from which he deduced the existence of an advanced Martian civilization; his search for Planet X led to the discovery of Pluto. https://en.wikipedia.org/wiki/Percival_Lowell
  'lowell',
  // Author of Conversations on Chemistry, a unique textbook for its time written for people with little formal education, such as girls and the poor. The book inspired Michael Faraday to overcome his poor origins to become a great scientist. https://en.wikipedia.org/wiki/Jane_Marcet
  'marcet',
  // Discovered the periodic table in a dream. Utilized the organizing principles of the periodic table to correctly predict the existence and properties of six new chemical elements. https://en.wikipedia.org/wiki/Dmitri_Mendeleev
  'mendeleev',
  // The first person in history to suggest black holes could exist; invented the torsion balance to weigh our planet; used probability theory to establish that some star groupings are non-random and therefore perhaps held together by gravity. https://en.wikipedia.org/wiki/John_Michell
  'michell',
  // Proved that every element’s identity is uniquely determined by its number of protons, establishing this is the true organizing principle of the periodic table; correctly predicted the existence of four new chemical elements; invented the atomic battery. https://en.wikipedia.org/wiki/Henry_Moseley
  'moseley',
  // Discovered how to produce polymer chains with orderly spatial arrangements – i.e. stereoregular polymers. https://en.wikipedia.org/wiki/Giulio_Natta
  'natta',
  // Profoundly changed our understanding of nature with his law of universal gravitation and his laws of motion; invented calculus, the field of mathematics that dominates the physical sciences; generalized the binomial theorem; built the first ever reflecting telescope; showed sunlight is made of all the colors of the rainbow. https://en.wikipedia.org/wiki/Isaac_Newton
  'newton',
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
  // Author of the Almagest, which contained a catalogue of over a thousand stars with positions, relative brightnesses, and constellations; and a mathematical model predicting the movements of the planets that was unsurpassed for almost 1,500 years. https://en.wikipedia.org/wiki/Ptolemy
  'ptolemy',
  // Discovered that light can donate a small amount of energy to a molecule, changing the light’s color and causing the molecule to vibrate. The color change acts as a ‘fingerprint’ for the molecule that can be used to identify molecules and detect diseases such as cancer. https://en.wikipedia.org/wiki/C._V._Raman
  'raman',
  // Predicted the existence of the noble gases and discovered or was first to isolate every member of the group; created the world’s first neon light. https://en.wikipedia.org/wiki/William_Ramsay
  'ramsay',
  // The father of nuclear chemistry and nuclear physics; discovered and named the atomic nucleus, the proton, the alpha particle, and the beta particle; discovered the concept of nuclear half-lives; achieved the first laboratory transformation of one element into another. https://en.wikipedia.org/wiki/Ernest_Rutherford
  'rutherford',
  // Took part in the discovery of ten of the periodic table’s chemical elements. His work on the electronic structure of elements led to the periodic table being rewritten. https://en.wikipedia.org/wiki/Glenn_T._Seaborg
  'seaborg',
  // The first astrogeologist and a founder of planetary impact science; proved large craters on Earth were caused by collisions with asteroids and comets rather than volcanic activity; proposed microscopic life could travel between planets on rocks blasted into space by asteroid impacts. https://en.wikipedia.org/wiki/Eugene_Merle_Shoemaker
  'shoemaker',
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
 * Returns a random Docker's like name.
 */
export const getRandomName = (): string  => {
  const left = adjectives[getRandomArbitrary(0, adjectives.length)];
  const right = names[getRandomArbitrary(0, names.length)];

  return `${left}_${right}`;
};
