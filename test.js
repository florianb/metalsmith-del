import test from 'ava'
import m from '.'

test('Files should be cleaned by globs', t => {
	const done = function (something, files) {
		t.deepEqual(files, [
			'unicorns/kittens/and.others'
		])
	}
	m([
		'unicorns/**/and.*'
	])([
		'unicorns/kittens/and.others',
		'unicorns/kittens/.others',
		'unicorns/kittens/without.others'
	], {}, done)
})
