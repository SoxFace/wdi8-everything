# Capture word and upto 5 characters before it.

ARGF.each do |line|
  if (match = line.match /(?<word>\w+a)\b(?<after>.{0,5})/) # Greediness
    puts "after contains '#{ match['after'] }'"
    puts "word contains: '#{ match['word'] }'"
    puts "Before the match: #{ $` }"
    puts "Match: #{ $& }"
    puts "After the match: #{ $'}"
    puts "****************************"
  end
end