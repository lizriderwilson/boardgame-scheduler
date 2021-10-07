# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{username: 'liz', password: 'liz'}, {username: 'aidan', password: 'aidan'}, {username: 'ringo', password: 'ringo'}, {username: 'haru', password: 'haru'}])

Game.create(name: 'Innovation', number_of_players: '2-4', time: '30-45 minutes', user_id: 1)
Game.create(name: 'Bargain Quest', number_of_players: '2-6', time: '30-30 minutes', user_id: 2)
Game.create(name: 'Mouse Trap', number_of_players: '2-4', time: '30 minutes', user_id: 3)
Game.create(name: 'Codenames', number_of_players: '2-8', time: '15 minutes', user_id: 4)

Table.create(location: "A")
Table.create(location: "B")
Table.create(location: "C")
Table.create(location: "D")