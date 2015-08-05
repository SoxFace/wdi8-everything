Given(/^I have a calculator$/) do
  @calculator = Calculator.new
end

Given(/^I have the number (\d+)$/) do |number|
  @calculator << number
end

When(/^I add them together$/) do
  @result = @calculator.add
end

When(/^I subtract them$/) do
  @result = @calculator.subtract
end

When(/^I multiply them$/) do
  @result = @calculator.multiply
end

Then(/^I should see (-?\d+) on the terminal$/) do |result|
  assert_equal result.to_i, @result
end
