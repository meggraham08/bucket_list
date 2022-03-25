class User < ApplicationRecord
  has_many :adventures 

  validates :first_name, :last_name, presence: true
end