module Api
  module V1
    class AisController < ApplicationController
      before_action :set_ai, except:[:index, :create]

      def index
        ais = Ai.all
        render status: 200, json: { ais: ais }
      end

      def create
        ai = Ai.new(ai_params)
        ai.initELO
        if ai.save
          render status: 200, json: { ai: ai }
        else
          render status: 400, json: { errors: ai.errors }
        end
      end

      def show
        render status: 200, json: { ai: @ai }
      end

      def update
        if @ai.update(ai_params.slice(:elo))
          render status: 200, json: { ai: @ai }
        else
          render status: 400, json: { errors: @ai.errors }
        end
      end

      private

      def set_ai
        @ai = Ai.find_by(name: params[:id])
      end

      def ai_params
        params.require(:ai).permit(:name, :elo)
      end
    end
  end
end
