class Announcement < ApplicationRecord
  belongs_to :announcement_type
  belongs_to :user
end
