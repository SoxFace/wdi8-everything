Task.destroy_all

t1 = Task.create :title => 'Task the first', :description => 'Number one task'
t2 = Task.create :title => 'Task the second', :description => 'Number two task'
t3 = Task.create :title => 'Task the third', :description => 'Number three task'
t4 = Task.create :title => 'Task the fourth', :description => 'Number four task', :completed => true