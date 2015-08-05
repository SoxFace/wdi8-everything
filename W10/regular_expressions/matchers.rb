# ruby match.rb simpsons.txt

# ARGF = Filename arguments
ARGF.each do |line|
  if (match = line =~ /a/)
    puts "Before the match: #{ $` }"
    puts "Match: #{ $& }"
    puts "After the match: #{ $'}"
  end
end