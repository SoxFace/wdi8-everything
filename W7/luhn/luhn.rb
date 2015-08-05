# Write a program that can take a number and determine whether or not it is valid per the Luhn formula.

# The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

# The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit.

# For any digits that thus become 10 or more, subtract 9 from the result.

# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).

# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.

# If the total ends in 0 (put another way, if the total modulus 10 is congruent to 0), then the number is valid according to the Luhn formula; else it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

# Write a program that, given a number
# a) can check if it is valid per the Luhn formula. 
# b) can add a check digit to make the number valid per the Luhn formula.

class Luhn

  attr_accessor :number
  
  def initialize(number)
    @number = number
  end

  # def self.create(number)
  # x = Luhn.new(number * 10)
  # if x.checksum % 10 == 0
  #   return x.number
  # else 
  #   return x.number - (x.checksum) % 10
  # end
  # end

  def self.create(number)
    test_number = number * 10
    luhn = Luhn.new test_number
    return test_number if luhn.valid?
    test_number + 10 - (luhn.checksum % 10)
  end


  def check_digit
    number % 10
  end

  def checksum
    addends.inject(:+)
  end

  def valid?
    checksum % 10 == 0
  end

  private
  def addends
    number.to_s.reverse.chars.map.each_with_index do |digit, i|
      digit = digit.to_i
      digit = digit * 2 unless (i % 2 == 0)
      digit = digit -9 if digit >= 10
      digit
    end.reverse
  end

end








