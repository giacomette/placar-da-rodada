class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :team_visitor_score
      t.string :team_home_score
      t.references :team
      t.integer :team_visitor

      t.timestamps
    end
  end
end
