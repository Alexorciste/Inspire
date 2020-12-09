class Band < ApplicationRecord
  belongs_to :user
  belongs_to :project
  validates :name, presence: true

  validates :write_acces, inclusion: { in: [ true, false ] }



end
