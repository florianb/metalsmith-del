'use strict'

const del = require('del')
const multimatch = require('multimatch')

const globOptions = {
	dot: true
}

module.exports = globs => {
	return function (files, metalsmith, done) {
		const filenames = multimatch(Object.keys(files), globs, globOptions)
		filenames.forEach(i => delete files[i])
		del.sync(globs, globOptions)

		done(null, files)
	}
}
