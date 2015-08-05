class Number
  def self.bin2dec(bin)
    return 0 unless bin =~ /^[01]+$/ # Reject strings with anything other than 1s and 0s.

    result = 0
    bin.chars.reverse.each_with_index do |bit, column|
      result += bit.to_i * (2 ** column)
    end

    result
  end

    def self.dec2bin(dec)
      bin = []
      until dec == 0 do
        bin << (dec % 2).to_s
        dec = (dec / 2)
      end
      bin.reverse.join("")
    end

end