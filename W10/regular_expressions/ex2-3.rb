# Modify the program from the previous exercise so that the word ending with the letter a is captured into $1. 
# Update the code to display that variable’s contents in single quotes, something like $1 contains 'Wilma'.
# ANSWER: put it in paraenthese

ARGF.each do |line|
  if (match = line =~ /(\w+a)\b/)
    puts "Before the match: #{ $` }"
    puts "Match: #{ $& }"
    puts "After the match: #{ $'}"
    puts "$1 contains: '#{ $1 }'"
    puts "****************************"
  end
end