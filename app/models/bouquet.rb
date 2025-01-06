class Bouquet < ApplicationRecord
  has_many_attached :photos

  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :photos, attached: true,
            content_type: ["image/png", "image/jpg", "image/jpeg"],
            size: { less_than: 5.megabytes, message: "should be less than 5MB" }
end
