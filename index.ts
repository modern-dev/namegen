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
  // Lorenzo Romano Amedeo Carlo Avogadro was an Italian scientist, most noted for his contribution to molecular theory now known as Avogadro's law. https://en.wikipedia.org/wiki/Amedeo_Avogadro
  'avogadro',
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
