class WordProblem

  attr_reader :question

  def initialize(question)
    @question = question
  end

  def answer
    if too_complicated?
      raise ArgumentError.new("I don't understand the question")
    end
    unless @answer
      @answer = n1.send(operation, n2)
      if more_math?
        @answer = @answer.send(operation2, n3)
      end
    end
    @answer
  end

  private

  # Raise ArgError if we can't find a match
  def too_complicated?
    matches.nil?
  end

  # RegEx on question with additional numbers
  def matches
    @matches ||= question.match(/What is (-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?\?/)
  end

 #  "What is 20 minus 4 minus 13?"
 # 1:"20"
 # 2:"minus"
 # 3:"4"
 # 4:"minus 13"
 # 5:"minus"
 # 6:"13"

  # First operation in sentence
  def operation
    matches[2] == 'plus' ? :+ : :-
  end

  # Second operation in sentence
  def operation2
    matches[5] == 'plus' ? :+ : :-
  end

  # First number in sentence
  def n1
    matches[1].to_i
  end

  # Second number in sentence
  def n2
    matches[3].to_i
  end

  # Third number in sentence
  def n3
    matches[6].to_i
  end

  # Identify if there are addition operands and numbers
  def more_math?
    # !! boolean negation operator
    !!matches[4]
  end

end

