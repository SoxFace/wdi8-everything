class DNA

  attr_reader :strand

  def initialize(strand)
    @strand = strand
  end

  # def count(letter)
  #   if letter == "A" || letter == "C" || letter == "T" || letter == "U"
  #   @strand.scan(letter).count
  #   else
  #     raise ArgumentError
  #   end
  # end

  # def nucleotide_counts
  #   counts = { 'A' => 0, 'T' => 0, 'C' => 0, 'G' => 0, 'U' => 0 }
  #   counts['G'] = 8
  #   counts
  # end

  def count(nucleotide)
    if valid_nucleotide?(nucleotide)
      @strand.count(nucleotide)
    else
      raise ArgumentError.new("Error")
    end
  end

  def nucleotide_counts
    counts = {}
    %W(A T C G U).each do |letter|
    # DECLARE VALUES OF ARRAY
      counts[letter] = count(letter)
    end
    counts
  end

  def valid_nucleotide?(nucleotide)
    "ATCGU".chars.include?(nucleotide)
  end

end