ActiveRecord::Schema.define(version: 20150204041213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string   "name"
    t.string   "nationality"
    t.date     "dob"
    t.string   "period"
    t.text     "image"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "works", force: :cascade do |t|
    t.string   "title"
    t.string   "year"
    t.string   "medium"
    t.string   "style"
    t.text     "image"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "artist_id"
  end

end
