require "cable_ready"

CableReady.configure do |config|
  config.add_operation_name :confetti
end

class SiteBuilder < Bridgetown::Builder
  # write builders which subclass SiteBuilder in plugins/builders
end

module CRHelper
  def cable_car
    CableReady::CableCar.instance
  end
end

Bridgetown::RubyTemplateView::Helpers.include CRHelper

