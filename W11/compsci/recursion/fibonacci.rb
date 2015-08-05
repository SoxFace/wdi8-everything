# Fobonacci - next number is the sum of the previous two
# 1, 1, 2, 3, 5, 8, 13, 21...
# fib(3) => 3
# fib(7) => 13

def fibonacci_iterative(num)
  a = 1
  b = 1

  while num > 1
    a, b = b, a + b # parallel assignment (x, y = x, y)
    num -= 1
  end
    a
end

puts fibonacci_iterative(7) # => 13

def fibonacci_recursive(num)
  num if num == 0 || num == 1
  fibonacci_iterative(num - 2) + fibonacci_iterative(num - 1)
end

puts fibonacci_recursive(7) # => 13