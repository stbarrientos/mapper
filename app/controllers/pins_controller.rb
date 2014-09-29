class PinsController < ApplicationController

	def index
		@pins = Pin.all
		@pin = Pin.new
		respond_to do |format|
			format.html
			format.json {render json: @pins}
		end
	end

	def create
		@pin = Pin.new(pin_params)
		if @pin.save
			respond_to do |format|
				format.html {redirect_to '/', notice: 'Pin succesfully created'}
				format.json {render json: @pin}
			end
		else
			respond_to do |format|
				format.html {redirect_to '/', notice: 'An error occured'}
				format.json {render json: @pin}
			end
		end
	end

	private

	def pin_params
		params.require(:pin).permit(:lat, :long)
	end

end