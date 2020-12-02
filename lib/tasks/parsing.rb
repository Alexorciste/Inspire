
require "open-uri"
require 'nokogiri'


keyword = "jolie"

url = "http://1001synonymes.fr/synonyme-#{keyword}"
url = URI.parse(URI.escape(url))
response = open(url).read
html_doc = Nokogiri::HTML(response)
synonymes = []
html_doc.search(".field-item").first(10).each do |element|
  synonyme = element.text
# puts synonyme
 synonymes << synonyme
end
p synonymes
