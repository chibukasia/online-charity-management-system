# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Creating Users"
10.times do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password, phone_number: Faker::PhoneNumber.phone_number, role: rand(0..1).to_s)
end
puts "Done creating users..."

puts "Creating NGOs.."

Ngo.create(organization_name: "Waridi Organization" ,address: Faker::Address.city, organization_phone_number: Faker::PhoneNumber.cell_phone, organization_email: Faker::Internet.email, description: Faker::Lorem.paragraph, user_id: 10)
Ngo.create(organization_name: "Anchor Organization" ,address: Faker::Address.city, organization_phone_number: Faker::PhoneNumber.cell_phone, organization_email: Faker::Internet.email, description: Faker::Lorem.paragraph, user_id: 8)
Ngo.create(organization_name: "TendaWema Organization" ,address: Faker::Address.city, organization_phone_number: Faker::PhoneNumber.cell_phone, organization_email: Faker::Internet.email, description: Faker::Lorem.paragraph, user_id: 3)
Ngo.create(organization_name: "Blossom Organization" ,address: Faker::Address.city, organization_phone_number: Faker::PhoneNumber.cell_phone, organization_email: Faker::Internet.email, description: Faker::Lorem.paragraph, user_id: 2)
Ngo.create(organization_name: "HappyHeart Organization" ,address: Faker::Address.city, organization_phone_number: Faker::PhoneNumber.cell_phone, organization_email: Faker::Internet.email, description: Faker::Lorem.paragraph, user_id: 1)

puts "Done creating NGOs"

puts "Creating Categories"

5.times do
Category.create(category_name: Faker::Types.rb_string)
end

puts "Done creating categories"

puts "Requests"
10.times do
  DonationRequest.create(title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph, target_amount: Faker::Number.number(digits: 5), amount_raised: Faker::Number.number(digits: 4), status: "approved", open: true, category_id: rand(1..5), ngo_id: rand(1..5))
end
puts "Done creating requests"

puts "Creating Donations"
10.times do
  Donation.create(amount: Faker::Number.number(digits: 3), donation_request_id: rand(1..10), user_id: rand(1..10))
end
puts "Done creating donations"

