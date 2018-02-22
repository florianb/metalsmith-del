'use strict'

const del = require('del')
const multimatch = require('multimatch')

const globOptions = {
	dot: true
}

module.exports = globs => {
	return function (files, metalsmith, done) {
		del.sync(globs, globOptions)
		done(null, multimatch(files, globs, globOptions))
	}
}

