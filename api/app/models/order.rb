class Order < ApplicationRecord
  belongs_to :payment
  belongs_to :shop
end
