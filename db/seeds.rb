# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Pin.delete_all

Pin.create([
 {lat: 38.0081, long: 77.0997},
 {lat: 40.7127, long: 74.0059},
 {lat: 37.7833, long: 122.4167}
])