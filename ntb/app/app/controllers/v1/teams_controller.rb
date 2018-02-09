module V1

    class TeamsController < ApplicationController
        skip_before_action :verify_authenticity_token, only: [:create]
        
        def index
            @teams = Team.all
            render json: @teams
        end

        def create
            @teams = Team.create teams_params
            if @teams.save
                render json: @teams
            else
                render json: {message: "Error on save"}
            end
        end

        def update
            @team = Team.find(params[:id])
            @team.update_attributes(teams_params)
            render json: @team
        end

        def destroy
            @team = Team.find(params[:id])
            @team.destroy
        end


        private

        def teams_params
            params.permit(:name, :points, :victories, :goals)
        end

    end

end