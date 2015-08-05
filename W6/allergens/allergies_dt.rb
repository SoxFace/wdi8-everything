class Allergies

  ALLERGIES = { 
    'eggs' => 1, 
    'peanuts' => 2, 
    'shellfish' => 4, 
    'strawberries' => 8, 
    'tomatoes' => 16, 
    'chocolate' => 32, 
    'pollen' => 64, 
    'cats' => 128 
  }

  def initialze(score)
    @score = score
  end

  def list
    ALLERGIES.keys.select do |item|
      allergic_to(item)
  end

  def allergic_to?(item)
    # if item is not on the list, fetch will give an error
    (@score & ALLERGIES.fetch(item)) > 0
  end

end