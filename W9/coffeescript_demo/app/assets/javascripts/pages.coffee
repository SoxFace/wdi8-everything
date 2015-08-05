console.log 'Hello World'

# no semicolons
items = ['beer1', 'beer2', 'beer3', 'beer4']

# Backwards conditionals
beerLover = true if items.length > 0

# Loops

for item in items
  console.log item
  # indentation matters
  console.log 'hippies on every line'

console.log 'hippies only once'

for i in [5..0]
  console.log i
console.log('Blast off')

# Ranges are back AND it converts to a loop if > 20
nums = [0..21]
console.log(nums)

# literate type of programming: see CoffeeScript Docs by using .litcoffee

# Emnumerator and conditional on the same line
for beer in items
  console.log beer if beer != 'beer3'

for beer in items when beer isnt 'beer3'
  console.log beer

# Function with a ->
drinkBeer = ->
  console.log('Glug glug')
  items.pop()

while items.length > 0 then drinkBeer()

# Parameters in a function
hello = (target)->
  console.log('Hello ' + target)

hello 'World'

# Objects
fridge =
  beer: ['vb', 'tooheys new', 'guinness']
  chips: ['potato', 'corn']
  consume: ->
    console.log('nom nom nom')
    @beer.pop() # '@' replaces 'this'

fridge.consume()
fridge.consume()
console.log fridge

# jQuery
# $ -> # this is document ready too
$(document).ready ->
  $('#wonderland').on 'click', ->
    console.log 'there was a click'

# interpolation is back

author = "Wittgenstein"
quote  = "A picture is a fact. -- #{ author }"

# Arrays



