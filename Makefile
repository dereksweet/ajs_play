.PHONY: install
install: Gemfile.lock node_modules $(bower)

node_modules: package.json
	@npm install
	@touch $@

Gemfile.lock: Gemfile
	@bundle install

.PHONY: test
test:
	@node_modules/mocha/bin/mocha --require test/modify_path --require test/mock_asset_paths --recursive
