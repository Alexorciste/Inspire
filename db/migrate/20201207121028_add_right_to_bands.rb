class AddRightToBands < ActiveRecord::Migration[6.0]
  def change
    add_column :bands, :write_acces, :boolean, null: false
  end
end
