# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Video.destroy_all

### Movies ###

watchmen = Video.create(title: "Watchmen", description: "Watchmen", maturity_rating: "R", year: 2009)
watchmen.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/watchmen.mp4'), filename: 'watchmen.mp4')

avengers = Video.create(title: "Avengers: Endgame", description: "Avengers: Endgame", maturity_rating: "PG-13", year: 2019)
avengers.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Avengers_Endgame.mp4'), filename: 'Avengers_Endgame.mp4')

crazyRichAsians = Video.create(title: "Crazy Rich Asians", description: "Crazy Rich Asians", maturity_rating: "PG-13", year: 2018)
crazyRichAsians.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Crazy_Rich_Asians.mp4'), filename: 'Crazy_Rich_Asians.mp4')

getOut = Video.create(title: "Get Out", description: "Get Out", maturity_rating: "R", year: 2017)
getOut.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Get_Out.mp4'), filename: 'Get_Out.mp4')

lalaland = Video.create(title: "La La Land", description: "La La Land", maturity_rating: "PG-13", year: 2016)
lalaland.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/La_La_Land.mp4'), filename: 'La_La_Land.mp4')

lesMiserables = Video.create(title: "Les Miserables", description: "Les Miserables", maturity_rating: "PG-13", year: 2012)
lesMiserables.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Les_Miserables.mp4'), filename: 'Les_Miserables.mp4')

spiderman = Video.create(title: "Spider-Man: Into the Spider-Verse", description: "Spider-Man: Into the Spider-Verse", maturity_rating: "PG", year: 2018)
spiderman.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Spiderman_into_the_spiderverse.mp4'), filename: 'Spiderman_into_the_spiderverse.mp4')

theLionKing = Video.create(title: "The Lion King", description: "The Lion King", maturity_rating: "PG", year: 2019)
theLionKing.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/The_Lion_King.mp4'), filename: 'The_Lion_King.mp4')
