require "open-uri"
require 'nokogiri'
require 'uri'
require 'json'


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
    @rime = rime(params[:keyword])
      
    render json: @rime.to_json
  end

private

  def rime(arg)
        
    unless arg.nil?
    expr = arg.encode('ISO-8859-1')

    # ---> #throw new Exception('<b>'.__FUNCTION__.'() : argument "expr" attendu</b>');
    end
    len = expr.length     # longueur de cette derniere
    first=nil
    last=nil
    # base de connaissances
    # rulesfile = './docs/rules.xml'
    # dictionnaire, reparti sur 4 fichiers (diviser pour regner!)
    @path = Rails.root.join('app', 'assets', 'docs').to_s
    datafile = [@path + '/2-a.txt', @path + '/b-m.txt', @path + '/n-z.txt', @path + '/tilde.txt']
    data = []            # tableau de stockage du dictionnaire
    def phonetize
        # Lecture du fichier XML encodé en ISO-8859-1
        xml_path = @path + '/rules.xml'
        xml = Nokogiri::XML(File.open(xml_path))
        left = ""
        rslt = ""
        right = expr
        while right != ""
          hl = right[0].encode('UTF-8')
          rules = xml.xpath("//rule[hl=\"#{hl}\"]")
          rules.each do |rule|
            # lecture des noeuds. Il est necessaire de specifier l'encodage pour les accents
            targ = rule.xpath("targ").text
            targ = targ.encode('ISO-8859-1') if targ != ""
            lc = rule.xpath("lc").text
            lc = lc.encode('ISO-8859-1') if lc != ""
            rc = rule.xpath("rc").text
            rc = rc.encode('ISO-8859-1') if rc != ""
    
            # Creation et convertions des regles String en Regex
            rc = Regexp.new rc
            rc = "^#{targ}(#{rc}.*)"
            matches = right.match(rc) if right.match?(rc)
            lc = Regexp.new "#{lc}$"
            if left.match?(lc) && !matches.nil?
              left += targ
              right = matches[1]
              rslt += rule.xpath("out").text.encode!(Encoding::ISO_8859_1)
            end
          end
        end
        expr = rslt.gsub(/\s/, '').reverse
        len = expr.length
      
    end
    
      def loaddatafile()
      
    
        c = expr[0]
    
        if c >= '2' && c <= 'a'
          file = datafile[0]
        elsif c >= 'b' && c <= 'm'
          file = datafile[1]
        elsif c >= 'n' && c <= 'z'
          file = datafile[2]
        else
          file = datafile[3]
        end
    
        count = 0
        File.open(file, 'r') do |f|
          f.each do |line|
            count += 1
            data << line.force_encoding("iso-8859-1").split("\r\n")#.join(' ')
          end
        end
      end
    
      def search
        puts "ca search"
        count = 0
        n = data.length
        bottom = 0
        top = n - 1
        while bottom <= top
          half = ((bottom + top) / 2).floor
          s = data[half][0][0, len]
          if s < expr
            bottom = half + 1
          elsif s > expr
            top = half - 1
          else
            break
          end
        end
        if bottom > top
          puts "pas de résultats"
          return false
        end
        # un 1er résultat ayant été localisé,
        # il reste à déterminer les bornes
        # print "inférieures et supérieures"
        # puts " de la zone du tableau à récupérer"
    
        first = getborder(bottom, half, 1)
        last = getborder(top, half, 2)
        return true
      end
    
      def getborder(cetx, cety, nb)
        half = 0
        loop do
          case nb
          when 1
            half = ((cetx.to_f + cety) / 2).floor
          when 2
            half = ((cetx.to_f + cety) / 2).ceil
          end
    
          if data[half][0][0, len] == @expr
            return cety if cetx == cety
            cety = half
          elsif cetx == half
            return cety
          else
            cetx = half
          end
        end
      end
    
      def send
        results = []
        for i in first..last
           results << data[i][0].split("\t")[1].encode("utf-8")
        end
        #return "hello"
        results = results.sort_by(&:length).take(11)
        return results
      end


    
    phonetize
    

    loaddatafile
    final_results = search ? send : []
    return final_results

  end



end






