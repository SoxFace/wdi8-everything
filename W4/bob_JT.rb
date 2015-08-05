class Bob

  # caps? and question? are methods of Bob, not String.

  # You have to pass the string to them:
  # question?(input)
  # rather than:
  # input.question?

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

  # This IS a method of String so you don't need to recreate it.
  #def empty?(input)
  #  input.nil
  #end

end  

bob = Bob.new

puts bob.chat('How are you buddy')

#loop do
#  print "Say something to Bob: "
#  input = gets.chomp
#  puts bob.chat(input)
#end