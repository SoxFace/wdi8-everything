# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Write a program that, given a number, can find the sum of all the multiples of 3 or 5 up to and including that number. Allow the program to be configured to find the sum of multiples of numbers other than 3 and 5.

class SumOfMultiples

  def initialize(*multiples)
    @multiples = multiples
  end

  def self.to(number)
    new(3, 5).to(number)
  end

  def to(number)
    (1...number)
      .select { |n| multiple?(n) }
      .reduce(0, :+)
  end

  private def multiple?(number)
    # find all the multiples of 3 and 5 from 1...1000
    @multiples.any? { |multiple| number % multiple == 0 }
  end
end

# find all the multiples of 3 and 5 from 1...1000
# range = (1...1000).to_a
# multiples = []
# range.each do |i|
    # i % 3 == 0 || i % 5 == 0
    # i << multiples

