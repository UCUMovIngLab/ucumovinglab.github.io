source "https://rubygems.org"

# jekyll
gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.7"

# plugins
group :jekyll_plugins do
  gem "jekyll-spaceship"
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
  gem "jekyll-feed"
  gem "jekyll-last-modified-at"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
