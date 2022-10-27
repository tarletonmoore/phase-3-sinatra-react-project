class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/series" do
    series = Series.all
    series.to_json(include: :games)
  end

#   get "/series/:id" do
# series = Series.find(params[:id])
# series.to_json(include: :games)

#   end

# get "/games/:id" do
#   game = Game.find(params[:id])
#   game.to_json
# end
  
  # get "/series/games" do
  #   series = Series.all
  #   series.to_json(include: :games)
  # end

get "/games" do
  games = Game.all
  games.to_json(include: :series)
end

post "/games" do
game = Game.create(
  title: params[:title],
  main_character: params[:main_character],
  year_released: params[:year_released],
  console: params[:console],
  series_id: params[:series_id]
)
# game.series.create(
#   title: params[:series]
# )
game.to_json(include: :series)
end

patch "/games/:id" do
  game = Game.find(params[:id])
  game.update(
    title: params[:title]
  )
  game.to_json(include: :series)
end

delete "/games/:id" do
game = Game.find(params[:id])
game.destroy
game.to_json
end

end
