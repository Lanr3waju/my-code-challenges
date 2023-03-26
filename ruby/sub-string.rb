def substrings(word, dictionary)
  new_arr =  []
  dictionary.each { |item| new_arr.push(word.downcase.scan(/#{item}/)).flatten!}
  new_arr.reduce(Hash.new(0)) do |frequency, word|
    frequency[word] += 1
    frequency
  end
end

dictionary = %w[below down go going horn how howdy it i low own part partner sit]

puts substrings("Howdy partner, sit down! How's it going?", dictionary)
