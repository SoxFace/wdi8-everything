class TemperaturesController < ApplicationController

  def index
    # respond_to if you need HTML and JSON
    @temperatures = Temperature.all
    render :json => @temperatures
  end

  def max
    @maximums = Temperature.pluck :maximum
    render :json => @maximums
  end

  def min
    @minimums = Temperature.pluck :minimum
    render :json => @minimums
  end

end
