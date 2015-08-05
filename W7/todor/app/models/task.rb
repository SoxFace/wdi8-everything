# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string
#  text        :string
#  description :string
#  completed   :string           default("f")
#  boolean     :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Task < ActiveRecord::Base
end
