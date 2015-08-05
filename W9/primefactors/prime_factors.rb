# class PrimeFactors

#   def self.for(number) # find prime factors that make up a number
#     possible_primes = self.for(number)
#     prime_factors = []
#     i = 0
#     until number < 2 do
#       divisor = possible_primes[i]
#       until number % divisor != 0 do
#         prime_factors << divisor
#         number /= divisor
#       end
#       i += 1
#     end
#     prime_factors
#   end
# end

# JACK'S SOLUTION
class PrimeFactors
  
  def self.for(number)
    return [] if number == 1
    factors = []
    divisor = 2 # lowest prime factor

    while number > 1
      while number % divisor == 0
      number /= divisor
      factors << divisor
    end
      divisor += 1
    end
    factors
  end

end