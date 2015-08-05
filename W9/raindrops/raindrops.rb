class Raindrops

  # def initialize
  #   @primes = [3, 5, 7]
  #   @words = %w(Pling Plang Plong)
  # end

  # def convert(x)
  #   string = @primes.each_with_index.with_object("") do |(p, i), string| 
  #     string << @words[i] if x.modulo(p).zero?
  #   end
  #   string = x.to_s if string.empty?
  #   string
  # end

  # JACK'S SOLUTION
  def convert(value)
    unless value % 3 == 0 || value % 5 == 0 || value % 7 == 0
      return value.to_s
    end
    string = ""
    string << "Pling" if value % 3 == 0
    string << "Plang" if value % 5 == 0
    string << "Plong" if value % 7 == 0
    string
  end

end