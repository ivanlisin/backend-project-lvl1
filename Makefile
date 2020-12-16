install-deps:
	npm ci

install: install-deps

lint:
	npx eslint .

test:
	npm test

test-watch:
	npm test -- --watch

test-coverage:
	npm test -- --coverage

publish:
	npm publish

.PHONY: test
