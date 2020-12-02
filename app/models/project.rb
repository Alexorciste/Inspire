class Project < ApplicationRecord
  belongs_to :user
  has_many :texts, dependent: :destroy
  has_many :bands, dependent: :destroy
end
