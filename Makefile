.PHONY: install
install:
	@npm install
	@gem install bundle
	@bundle install

.PHONY: test.unit
test.unit:
	@node_modules/mocha/bin/mocha --require test/modify_path --require test/mock_asset_paths --require test/config --recursive

.PHONY: selenium
selenium: node_modules
	@webdriver-manager update
	@webdriver-manager start >log/selenium_webdriver.log 2>&1

.PHONY: test.integration
test.integration:
	@rails server -p 8100 -d
	@protractor integration/conf.js
	@kill -9 `cat ./tmp/pids/server.pid`

.PHONY: test.clean
test.clean:
	@kill -9 `cat ./tmp/pids/server.pid`

.PHONY: test.spec
test.spec:
	@bundle exec rspec spec

.PHONY: test
test: test.unit test.integration test.spec
