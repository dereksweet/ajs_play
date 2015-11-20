.PHONY: install
install: bundle_install node_modules $(bower)

node_modules: package.json
	@npm install
	@touch $@

bundle_install: Gemfile
	@bundle install

.PHONY: test
test:
	@node_modules/mocha/bin/mocha --recursive
