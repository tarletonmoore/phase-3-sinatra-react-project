class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/series" do
    series = Series.all
    series.to_json
  end

end
