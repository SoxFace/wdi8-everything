# REGEX NOTES
# /1 \+ 2 = 3\?/.match('Does 1 + 2 = 3?')
# match the character ?: /\?/ 
# match any digit: /[0-9]/
# match any digit: /\d/
# match all digit: /\d+/
# match operation: .match
# if digit is a negative number: -?

class Calculator

  def ask(question)
    question.match(/What is (-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/) do |digit|
      if digit[2] == 'plus'
        digit[1].to_i + digit[3].to_i
      elsif digit[2] == 'minus'
        digit[1].to_i - digit[3].to_i
      elsif digit[2] == 'multiplied by'
        digit[1].to_i * digit[3].to_i
      elsif digit[2] == 'divided by'
        digit[1].to_i / digit[3].to_i
      else false
      end
    end
  end

end