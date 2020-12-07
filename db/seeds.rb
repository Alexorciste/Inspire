# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Project.destroy_all
# User.destroy_all
#user = User.new(email: "pierre@free.fr", password: "azerty", first_name: "Pierre", last_name: "Guy", nickname: "piero")
#user.save! if user.valid?
user = User.new(email: "marie.lure@davduf.net", password: "azerty", first_name: "Marie", last_name: "Simone", nickname: "Miette")
p user.email
user.valid?
user.save!
user = User.new(email: "claude@gmail.fr", password: "azerty", first_name: "Claudine", last_name: "Frot", nickname: "Claudou")
p user.email
user.valid?
user.save!
user = User.new(email: "ficelle@yahoo.fr", password: "azerty", first_name: "Antoine", last_name: "Petrucci", nickname: "Ficelle")
p user.email
user.valid?
user.save!
user = User.new(email: "clarence.Dup@dupres.org", password: "azerty", first_name: "Clarence", last_name: "Duprès", nickname: "Clint")
p user.email
user.valid?
user.save!
user = User.new(email: "patou.pilou@hotmail.com", password: "azerty", first_name: "Patricia", last_name: "Ridine", nickname: "patoupilou")
p user.email
user.valid?
user.save!
user = User.new(email: "vero.dum@libera.fr", password: "azerty", first_name: "Véronique", last_name: "Dumontier", nickname: "vero")
p user.email
user.valid?
user.save!
user = User.new(email: "rob@gmail.fr", password: "azerty", first_name: "Robert", last_name: "Kramer", nickname: "rob")
p user.email
user.valid?
user.save!


#user = User.new(email: "polo@free.fr", password: "azerty",  )
# user.save!
# user = User.new(email: "polo2@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo3@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo4@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo5@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo6@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo7@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo8@polo.fr", password: "azerty" )
# user.save!
# user = User.new(email: "polo9@polo.fr", password: "azerty" )
# user.save!
