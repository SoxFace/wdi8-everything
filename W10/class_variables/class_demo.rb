class Doohickey
  # Class variable, does not need to go into a method
  # Class is always available
  # If you need to keep track of something that is global
  @@count = 0

  attr_reader :color

  def self.count # Class meth, not an instance method
    @@count # Like an attr_reader but you have to write it yourself
  end

  def initialize(color)
    # only one class vaiable called count that instance variables are using
    @@count =+ 1
    @color = color
  end
end

d1 = Doohickey.new ('purple')
d2 = Doohickey.new ('green')

require 'pry'
binding.pry