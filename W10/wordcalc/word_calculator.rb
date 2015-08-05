class WordProblem

  def initialize(question)
    @question = question
  end

  def answer
    @question.match(/What is (?<num1>-?\d+) (?<operator>plus|minus|multiplied by|divided by) (?<num2>-?\d+)/) do |digit|
      if digit['operator'] == 'plus'
        #  ADD
        digit['num1'].to_i + digit['num2'].to_i
      elsif digit['operator'] == 'minus'
        #  SUBTRACT
        digit['num1'].to_i - digit['num2'].to_i
      elsif digit['operator'] == 'multiplied by'
        #  MULTIPLY
        digit['num1'].to_i * digit['num2'].to_i
      elsif digit['operator'] == 'divided by'
        #  DIVIDE
        digit['num1'].to_i / digit['num2'].to_i
      else raise ArgumentError.new "Too advanced for wordycalc"
      end
    end
  end

  # private
  # def too_advanced
  #   if @answer.nil?
  #     raise ArgumentError.new "Too advanced for wordycalc"
  #   end
  # end

end