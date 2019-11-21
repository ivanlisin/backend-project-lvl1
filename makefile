install:
	npm install

start:
	npx babel-node src/bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
