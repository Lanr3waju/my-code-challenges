def is_string?(string)
  string == string.to_s && !string.strip.empty? && string.to_i == 0
end

def is_integer?(int)
  int == int.to_i
end

def caeser_cipher(string, int)
  return false unless is_string?(string) && is_integer?(int)
  alphabets = %w[a b c d e f g h i j k l m n o p q r s t u v w x y z]
  ciphered_text = []
  string.each_char.with_index do |let, id|
    alphabets.each_with_index do |letter, index|
      if let.downcase == letter
        index + int <= 25 ? ciphered_text.push(alphabets[index + int]) : ciphered_text.push(alphabets[index + int - 26])
      end
    end
    ciphered_text[id].upcase! if let == let.upcase && let != ' ' && let.match(/[a-zA-Z]+/)
    ciphered_text.insert(id, let) unless let.match(/[a-zA-Z]+/)
  end
  ciphered_text.join
end

puts caeser_cipher('What a string! ??????? ???', 5)
