install:
	npm install

start:
	npx babel-node src/bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
