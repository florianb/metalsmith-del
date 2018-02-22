# metalsmith-del [![Build Status](https://travis-ci.org/florianb/metalsmith-del.svg?branch=master)](https://travis-ci.org/florianb/metalsmith-del)

> Delete files and folders using globs.

Removes files matching the passed globs, using Sindre Sorhus' [del](https://github.com/sindresorhus/del), which protects you from deleting things outside the current working directory.

## Install

```
$ npm install metalsmith-del
```


## Usage

```js
const metalsmith = require('metalsmith')
const del = require('metalsmith-del')

metalsmith(__dirname)
	.source('src/')
	.destination('build/')
	.del([ // Remove hidden folders and files
		'build/**/.*'
	])
	.build()
```

## API

### del(globs)

#### globs

Type: `Array` of `string`

Array of glob to match files and directories against. Matching files and directories are being removed from the files-list as well as from disk.

## License

MIT © [Florian Breisch](https://mindkeeper.solutions)
