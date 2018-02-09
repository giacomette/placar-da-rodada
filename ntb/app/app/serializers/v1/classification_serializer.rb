module V1
    class ClassificationSerializer < ActiveModel::Serializer
      attributes :id
      belongs_to :team
    end
  end