class PagesController < ApplicationController

  def home
    @user = User.find session[:user_id] if session[:user_id].present?
  end

  def about
  end

end

