module V1
    class TeamSerializer < ActiveModel::Serializer
      attributes :id,
                 :name, 
                 :points,
                 :victories,
                 :goals,
                 :created_at,
                 :updated_at
    end
end