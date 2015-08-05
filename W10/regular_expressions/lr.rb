# ruby lr.rb simpsons.txt

# ARGF = Filename arguments
ARGF.each do |line|
  puts line if line =~ /a/
end