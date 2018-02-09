class CreateClassifications < ActiveRecord::Migration[5.0]
  def change
    create_table :classifications do |t|
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
