# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# User.destroy_all
# Video.destroy_all

# matrix = Video.new(title: "", description: "", maturity_rating: "", year: 1999)
# captain_marvel.movie.attach(io: open('https://s3.amazonaws.com/nextup-seed/Marvel+Studios+Captain+Marvel+-+Official+Trailer.mp4'), filename: 'Captain Marveltrailer.mp4')
# watchmen2 = Video.create(title: "watchmen_sample", description: "sample", maturity_rating: "R", year: 2009)
watchmen = Video.find(3)
watchmen.video.attach(io: open('s3://netflicks-seed/watchmen_trailer.mp4'), filename: 'watchmen_trailer.mp4')

# bunnyMovie = Video.create!(title: "Bunny Movie", description: "Bunny Movie", maturity_rating: "G", year: 2222)
# bunnyMovie.video.attach(io: open('http://media.w3.org/2010/05/bunny/movie.mp4'), filename: 'movie.mp4')