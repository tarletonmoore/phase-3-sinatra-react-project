class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/series" do
    series = Series.all
    series.to_json(include: :games)
  end

get "/games" do
  games = Game.all
  games.to_json(include: :series)
end

post "/series" do
series = Series.create(title: params[:series_title])
series.to_json(include: :games)
end

post "/games" do
# find series by name
  series = Series.find_by(title: params[:series_title])

  # add new game to series
  game = series.games.create(title: params[:game_title])

  # return new game and series
  # game = Game.create(
  #   title: params[:title],
  #   main_character: params[:main_character],
  #   year_released: params[:year_released],
  #   console: params[:console],
  #   series_id: params[:series_id]
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
