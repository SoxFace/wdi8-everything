class SinglyLinkedList
  attr_accessor :head

  def initialize(first_element=nil) # =nil means takes one argument optionally
    @head = Node.new(first_element) if first_element
  end

  def prepend
    node = Node.new(value)
    node.next = @head
    @head = node
    self
  end

  def last
    node = @head
    while node.next
      node = node.next
    end
    node
  end

  def insertAfter(node, new_node)
  end

  def append(value)
    # use last method
    new_node = Node.new(value)

    last_node = last
    if last_node
      last_node.next = new_node
    else
      @head = new_node
    end
  end

  def remove # pop(): remove from the end and return the value
    prev = nil
    current = @head

    while current && current.next
      prev = current
      current = current.next
    end

    if prev
      prev.next = nil
    else
      @head = nil
    end

    current
  end

  # def length
  #   tallly = 0
  #   node = @head
  #   while node.respond_to? :next
      
  # end

  def find(needle) # returns the node with value=value or nil if not found
    next_node = @head
    while next_node && next_node.needle != needle
      next_node = next_node.next
    end
    next_node
  end

  def reverse # returns a new SLL with nodes in the reverse order
    reversed = SinglyLinkedList.new
    current_node = @head
    while current_node
      reversed.prepend current_node.value
      current_node = current_node.next
    end
    reversed
  end

  def reverse!
    @head = reverse.head
    self
  end

  def to_s
  end

  class Node
    attr_accessor :value, :next
  end

    def initialize(value=nil)
      @value = value
      @next = nil
    end
  end

end

require 'pry'

bros = SinglyLinkedList.new('groucho')

binding.pry

# in pry bros.head.next.next.value
# in pry bros.last
# use RSPEC to test it