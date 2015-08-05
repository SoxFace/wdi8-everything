# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  puts line if line =~ /Fred|Wilma/
  # puts line if line =~ /Wilma/ && line =~ /Fred/
end