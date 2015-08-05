# a = [1, 2, 7, 27, 69, 15, 777, 55].sort

# 100 entries of numbers between 1 and 1000
a = (1..100).map { Random.rand(1000)}.sort

def binary_search(elements, needle)
  # returns the index of the needle in elements or Nil
  min = 0
  max = elements.length - 1
  candidate = nil

  # Run until all possabilities are exhausted
  until min > max do
    mid = (min + max) / 2

    puts "min: #{min}, max: #{max}, mid: #{mid}, candidate: #{candidate}"

    candidate = elements[mid]
    # return(mid) if candidate == needle # Found it! Index is in mid

    if candidate < needle # Too low, focus on the right half
      min = mid + 1
    elsif candidate > needle # Too high, focus on the left half
      max = mid - 1
    else
      return mid # Magic
    end
  end
  return nil
end

puts "Passed" if a.none? { |i| binary_search(a, i).nil? }

p binary_search(a, 15)
# p binary_search(a, a.sample)
