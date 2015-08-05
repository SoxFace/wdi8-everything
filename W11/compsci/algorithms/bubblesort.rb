def bubble_sort(array)
  n = array.length
  swapped = true
  until !swapped do
    swapped = false
    # put 1 into i
    for i in 1...n do
      # if this pair is out of order
      if array[i-1] > array[i]
        # swap them and remember something changed
        array[i-1], array[i] = array[i], array[i-1]
        swapped = true
      end
    end
  end
  array
end

# Generate a randomly shuffled array
a = (1..100).to_a.shuffle

p a
p "THIS IS BUBBLE SORTED ARRAY"
p bubble_sort(a) # show sorted array



