install-deps:
	npm ci

install: install-deps

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

publish:
	npm publish
