# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_19_221016) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "donation_requests", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.decimal "target_amount"
    t.decimal "amount_raised"
    t.string "status"
    t.boolean "open"
    t.bigint "category_id", null: false
    t.bigint "ngo_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_donation_requests_on_category_id"
    t.index ["ngo_id"], name: "index_donation_requests_on_ngo_id"
  end

  create_table "donations", force: :cascade do |t|
    t.decimal "amount"
    t.bigint "donation_request_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["donation_request_id"], name: "index_donations_on_donation_request_id"
    t.index ["user_id"], name: "index_donations_on_user_id"
  end

  create_table "ngos", force: :cascade do |t|
    t.string "organization_name"
    t.string "address"
    t.string "organization_phone_number"
    t.string "organization_email"
    t.string "registration_number"
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_ngos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.integer "phone_number"
    t.string "role"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "donation_requests", "categories"
  add_foreign_key "donation_requests", "ngos"
  add_foreign_key "donations", "donation_requests"
  add_foreign_key "donations", "users"
  add_foreign_key "ngos", "users"
end
