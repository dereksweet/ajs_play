require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AjsPlay
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # For Foundation 5
    config.assets.precompile += %w( vendor/modernizr )

    # Angular Controllers
    config.assets.precompile += %w( angular/controllers/directives.js
                                    angular/controllers/filters.js
                                    angular/controllers/forms.js
                                    angular/controllers/routes.js
                                    angular/controllers/animate.js
                                    angular/controllers/pagination.js )

    # Angular Directives
    config.assets.precompile += %w( angular/directives/ng-current-time.js
                                    angular/directives/ng-show-hide.js )

    # Angular Filters
    config.assets.precompile += %w( angular/filters/strip-dashes.js
                                    angular/filters/title-case.js )

    # Angular Services
    config.assets.precompile += %w( angular/services/data-share.js
                                    angular/services/data-store.js )

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true
  end
end
