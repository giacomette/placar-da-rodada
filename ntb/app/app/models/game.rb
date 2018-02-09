class Game < ApplicationRecord
    belongs_to :team
    #has_one :team_visitor, foreign_key => "index_games_on_team_id2", class_name => "Team"
end
