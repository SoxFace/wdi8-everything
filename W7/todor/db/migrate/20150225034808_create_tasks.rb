class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :task
      t.string :text
      t.string :description
      t.string :text
      t.string :completed, :default => false
      t.string :boolean
      t.timestamps
    end
  end
end
