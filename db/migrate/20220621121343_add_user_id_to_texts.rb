class AddUserIdToTexts < ActiveRecord::Migration[6.0]
  def change
    add_reference :texts, :user, foreign_key: true
  end
end
