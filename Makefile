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

test:
	npm test

test-coverage:
	npm test -- --coverage

.PHONY: test
