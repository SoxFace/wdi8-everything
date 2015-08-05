# ANSWER: give $1 the name of word

ARGF.each do |line|
  if (match = line.match /(?<word>\w+a)\b/)
    puts "Before the match: #{ $` }"
    puts "Match: #{ $& }"
    puts "After the match: #{ $'}"
    puts "word contains: '#{ match['word'] }'"
    puts "****************************"
  end
end