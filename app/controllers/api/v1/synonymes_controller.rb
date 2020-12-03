require "open-uri"
require 'nokogiri'

class Api::V1::SynonymesController < Api::V1::BaseController
  
  def find_synonyme


        url = "http://1001synonymes.fr/synonyme-#{params[:keyword]}"
        url = URI.parse(URI.escape(url))
        response = open(url).read
        html_doc = Nokogiri::HTML(response)
        synonymes = []
        html_doc.search(".field-item").first(10).each do |element|
          synonyme = element.text
        # puts synonyme
        synonymes << synonyme
        end
        render json: synonymes.to_json
  end
end