module V1
    class GameSerializer < ActiveModel::Serializer
      attributes :id,
                 :team_visitor_score, 
                 :team_home_score,
                 :team_visitor,
                 :created_at,
                 :updated_at

    belongs_to :team
    end

end