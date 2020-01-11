/*!
 * namegen - Docker's like random name generator
 * https://github.com/modern-dev/namegen
 *
 * Copyright (c) 2020 Bohdan Shtepan
 * Licensed under the MIT license.
 */

import { getRandomName } from './index';
import { expect } from 'chai';
import 'mocha';

describe('namegen', () => {
  it('should generate random name successfully', () => {
    const randomName = getRandomName();

    expect(randomName).not.to.be.null;
  });
})