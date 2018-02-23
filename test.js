import test from 'ava'
import m from '.'

test('Files should be cleaned by globs', t => {
	const source = {
		'unicorns/kittens/.git': 0,
		'unicorns/kittens/seahorses/test.txt': 0,
		'unicorns/.hidden': 0,
		'unicorns/index.txt': 0
	}
	const destination = {
		'unicorns/index.txt': 0
	}
	const done = function (something, files) {
		t.deepEqual(files, destination)
	}

	m([
		'unicorns/kittens/**',
		'unicorns/**/.*'
	])(source, {}, done)
})
