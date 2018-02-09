module V1
    class GamesController < ApplicationController
        skip_before_action :verify_authenticity_token, only: [:create]
        
        def index
            @games = Game.all
            render json: @games
        end

        def create
            @games = Game.create game_params
            if @games.save
                render json: @games
            else
                render json: {message: "Error on save"}
            end
        end

        def update
            @game = Game.find(params[:id])
            @game.update_attributes(game_params)
            render json: @game
        end

        def destroy
            @game = Game.find(params[:id])
            @game.destroy
        end


        private

        def game_params
            params.permit(:team_visitor_score, :team_home_score, :team_id, :team_visitor)
        end

    end
end