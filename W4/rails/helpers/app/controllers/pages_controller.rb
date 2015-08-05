class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 123456543
    @phone = 2125551212 # US style phone number
    @phone_aus = 93510000 # AUS style phone number
  end

  def text
    @numbers = (1..20).to_a
    @person_count_a = 1
    @person_count_b = 2
    @story = "A very long long long long long long long long long long long long long long long time ago"
  end

  def assests
  end

  def url
  end

end
