.PHONY: install
install: Gemfile.lock node_modules $(bower)

node_modules: package.json
	@npm install
	@touch $@

Gemfile.lock: Gemfile
	@bundle install

.PHONY: test.unit
test.unit:
	@node_modules/mocha/bin/mocha --require test/modify_path --require test/mock_asset_paths --recursive

.PHONY: selenium
selenium: node_modules
	@webdriver-manager update
	@webdriver-manager start >selenium_webdriver.log 2>&1

.PHONT: test.integration
test.integration:
	@$(MAKE) -j2 selenium integration

.PHONY: integration
integration:
	@protractor integration/conf.js

.PHONY: test
test: test.unit test.integration
