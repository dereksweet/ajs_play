require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AjsPlay
  class Application < Rails::Application
    config.assets.paths << "#{Rails.root}/app/assets/fonts"

    # For Foundation 5
    config.assets.precompile += %w( vendor/modernizr )

    # Angular Decorators
    config.assets.precompile += %w( angular/decorators/exception-handler.decorator.js )

    # Angular Controllers
    config.assets.precompile += %w( angular/controllers/pages/directives.controller.js
                                    angular/controllers/pages/filters.controller.js
                                    angular/controllers/pages/forms.controller.js
                                    angular/controllers/pages/routes.controller.js
                                    angular/controllers/pages/uirouter.controller.js
                                    angular/controllers/pages/animate.controller.js
                                    angular/controllers/pages/pagination.controller.js )

    # Angular Directives
    config.assets.precompile += %w( angular/directives/sweet-current-time.directive.js
                                    angular/directives/sweet-show-hide.directive.js
                                    angular/directives/sweet-make-blue.directive.js
                                    angular/directives/sweet-list.directive.js )

    # Angular Filters
    config.assets.precompile += %w( angular/filters/strip-dashes.filter.js
                                    angular/filters/title-case.filter.js )

    # Angular Services
    config.assets.precompile += %w( angular/services/data-share.service.js
                                    angular/services/data-store.service.js )

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true

    config.action_controller.perform_caching = false
  end
end
