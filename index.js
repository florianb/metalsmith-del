'use strict'

const multimatch = require('multimatch')

module.exports = globs => {
	return function (files, metalsmith, done) {
		const filenames = multimatch(Object.keys(files), globs, {dot: true})
		filenames.forEach(i => delete files[i])

		done(null, files)
	}
}

