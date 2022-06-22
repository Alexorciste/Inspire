class RemoveProjectIdFromTexts < ActiveRecord::Migration[6.0]
  def change
    remove_column :texts, :project_id, foreign_key: true
  end
end
