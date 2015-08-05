def countdown_iterative(num)
  while num > 0 # final condition
    p num
    num -= 1 # A step closer to the final condition
    sleep 1
  end

puts "Blastoff!!!"
end

# countdown_iterative(10)

def countdown_recursive(num)
  if (num <= 0)
    puts "Blastoff!!!" # Base case
  else
    puts num
    sleep 1
    countdown_recursive(num - 1) # A step closer to the base case
  end
end

countdown_recursive(10)