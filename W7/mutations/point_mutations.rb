class DNA

  attr_reader :strand

  def initialize(strand)
    @strand = strand
  end

  # def hamming_distance(other_strand)
  #   other_strand = %W""
  #   strand = %W""
  #   other_strand.count - strand.count
  #   # strand.zip(other_strand).map { |x, y| x == y }
  # end

=begin
  def hamming_distance(other_strand)
    diff = 0
    # (diff += 1) if @strand !=
    # other_strand
    # diff
  
    strand_chars = @strand.split('')
    other_strand_chars = other_strand.split('')

    strand_chars.each_with_index do |current_el, i|
      (diff += 1) if strand_chars[i] !=
      other_strand_chars[i] && other_strand_chars[i] != nil
    end
    diff
  end
=end

  def hamming_distance(other_strand)
    @strand.chars.zip(other_strand.chars).reject do |a, b|
      a == b || b.nil?
    end.size
  end

end