class Adventure < ApplicationRecord
  validates :title, :desc, presence: true
end
