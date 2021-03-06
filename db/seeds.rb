# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'open-uri'

# User.destroy_all
# Video.destroy_all

### Movies ###

# watchmen = Video.create(title: "Watchmen", description: "Watchmen", maturity_rating: "R", year: 2009)
# watchmen.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/watchmen.mp4'), filename: 'watchmen.mp4')
# watchmen.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/watchmen_poster.jpg'), filename: 'watchmen_poster.jpg')

# avengers = Video.create(title: "Avengers: Endgame", description: "Avengers: Endgame", maturity_rating: "PG-13", year: 2019)
# avengers.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Avengers_Endgame.mp4'), filename: 'Avengers_Endgame.mp4')
# avengers.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/Avengers_Endgame_Poster.jpg'), filename: 'Avengers_Endgame_Poster.jpg')

# crazyRichAsians = Video.create(title: "Crazy Rich Asians", description: "Crazy Rich Asians", maturity_rating: "PG-13", year: 2018)
# crazyRichAsians.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Crazy_Rich_Asians.mp4'), filename: 'Crazy_Rich_Asians.mp4')
# crazyRichAsians.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/Crazy_Rich_Asians_Poster.jpg'), filename: 'Crazy_Rich_Asians_Poster.jpg')

# getOut = Video.create(title: "Get Out", description: "Get Out", maturity_rating: "R", year: 2017)
# getOut.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Get_Out.mp4'), filename: 'Get_Out.mp4')
# getOut.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/Get_Out_Poster.jpg'), filename: 'Get_Out_Poster.jpg')

# lalaland = Video.create(title: "La La Land", description: "La La Land", maturity_rating: "PG-13", year: 2016)
# lalaland.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/La_La_Land.mp4'), filename: 'La_La_Land.mp4')
# lalaland.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/La_La_Land_Poster.jpg'), filename: 'La_La_Land_Poster.jpg')

# lesMiserables = Video.create(title: "Les Miserables", description: "Les Miserables", maturity_rating: "PG-13", year: 2012)
# lesMiserables.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Les_Miserables.mp4'), filename: 'Les_Miserables.mp4')
# lesMiserables.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/Les_miserables_poster.jpg'), filename: 'Les_miserables_poster.jpg')

# spiderman = Video.create(title: "Spider-Man: Into the Spider-Verse", description: "Spider-Man: Into the Spider-Verse", maturity_rating: "PG", year: 2018)
# spiderman.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/Spiderman_into_the_spiderverse.mp4'), filename: 'Spiderman_into_the_spiderverse.mp4')
# spiderman.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/Spiderman_into_the_spiderverse_poster.jpg'), filename: 'Spiderman_into_the_spiderverse_poster.jpg')

# theLionKing = Video.create(title: "The Lion King", description: "The Lion King", maturity_rating: "PG", year: 2019)
# theLionKing.video.attach(io: open('https://netflicks-dev.s3.amazonaws.com/Videos/The_Lion_King.mp4'), filename: 'The_Lion_King.mp4')
# theLionKing.photo.attach(io: open('https://netflicks-dev.s3.amazonaws.com/movie_posters/The_Lion_King_Poster.jpg'), filename: 'The_Lion_King_Poster.jpg')

#Genres

action = Genre.create(genre: "Action")
drama = Genre.create(genre: "Drama")
musicals = Genre.create(genre: "Musicals")
thriller = Genre.create(genre: "Thriller")
adventure = Genre.create(genre: "Adventure")

### videoGenres ## DEVELOPMENT
# # watchmen
# VideoGenre.create([
#   {video_id: watchmen.id, genre_id: action.id},
#   {video_id: watchmen.id, genre_id: adventure.id},
# ])
# VideoGenre.create(video_id: watchmen.id, genre_id: )

# # avengers
# VideoGenre.create(video_id: 13, genre_id: 1)

# # crazyRichAsians
# VideoGenre.create(video_id: 14, genre_id: 2)

# # getOut
# VideoGenre.create(video_id: 15, genre_id: 4)

# # La la land
# VideoGenre.create(video_id: 16, genre_id: 3)

# # Les miserables
# VideoGenre.create(video_id: 17, genre_id: 2)
# VideoGenre.create(video_id: 17, genre_id: 3)

# # Spiderman
# VideoGenre.create(video_id: 18, genre_id: 1)

# # The lion king
# VideoGenre.create(video_id: 19, genre_id: 5)



## videoGenres ## PRODUCTION
# watchmen
VideoGenre.create(video_id: 14, genre_id: 1)
VideoGenre.create(video_id: 14, genre_id: 2)

# avengers
VideoGenre.create(video_id: 15, genre_id: 1)

# crazyRichAsians
VideoGenre.create(video_id: 16, genre_id: 2)

# getOut
VideoGenre.create(video_id: 17, genre_id: 4)

# La la land
VideoGenre.create(video_id: 18, genre_id: 3)

# Les miserables
VideoGenre.create(video_id: 19, genre_id: 2)
VideoGenre.create(video_id: 19, genre_id: 3)

# Spiderman
VideoGenre.create(video_id: 20, genre_id: 1)

# The lion king
VideoGenre.create(video_id: 21, genre_id: 5)
