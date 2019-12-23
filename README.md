![npm](https://img.shields.io/npm/v/@modern-dev/namegen)
![NPM](https://img.shields.io/npm/l/@modern-dev/namegen)

Docker's like random name generator
===================================

[Docker's like](https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go) random name generator.

```shell script
$ npm install --save @modern-dev/namegen
```

## :clipboard: Usage

```js
import { getRandomName } from '@modern-dev/namegen';

const name = getRandomName()
console.log(name); // optimistic_hoyle
```

## :green_book: License

[Licensed under the MIT license.](https://github.com/modern-dev/namegen/blob/master/LICENSE)

Copyright (c) 2019 Bohdan Shtepan

---

> [modern-dev.com](http://modern-dev.com) &nbsp;&middot;&nbsp;
> GitHub [@virtyaluk](https://github.com/virtyaluk) &nbsp;&middot;&nbsp;
> Twitter [@virtyaluk](https://twitter.com/virtyaluk)