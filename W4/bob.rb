# He answers 'Sure.' if you ask him a question. 
# He answers 'Whatever.' if you tell him something. 
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS). 
# He says 'Fine. Be that way!' if you address him without actually saying anything.

class Bob

  def chat(input)
    case
      when question?(input)
        "Sure."
      when caps?(input)
        "Whoa, chill out!"
      when input.empty?
        "Fine. Be that way!"
      else
        "Whatever"
    end
  end

  def caps?(input)
    input.eql?(input.upcase)
  end

  def question?(input)
    input.include?("?")
  end

end  

bob = Bob.new

puts bob.chat('Whats up')

loop do
 print "Say something to Bob: "
 input = gets.chomp
 puts bob.chat(input)
end