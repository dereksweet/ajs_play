.PHONY: install
install: node_modules $(bower)

node_modules: package.json
	@npm install
	@touch $@

.PHONY: test
test: install
	@mocha --require test/test_helper --recursive
