module V1
    class ClassificationsController < ApplicationController
        
        def index
            @games = Team.order(created_at: :desc)
            render json: @games
        end
    end
end