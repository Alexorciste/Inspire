require "open-uri"
require 'nokogiri'
require_relative '../phon/rime'
require 'pry-byebug'

class Api::V1::SynonymesController < Api::V1::BaseController

  def find_synonyme
    url = "http://1001synonymes.fr/synonyme-#{params[:keyword]}"
    url = URI.parse(URI.escape(url))
    response = open(url).read
    html_doc = Nokogiri::HTML(response)
    synonymes = []
    html_doc.search(".field-item").first(10).each do |element|
      synonyme = element.text
      synonymes << synonyme
    end
    render json: synonymes.to_json
  end

  def find_rime
    rime = Rime.new(params[:keyword])
    results = []
    results = rime.send if rime.search
    render json: results.to_json
  end
end
