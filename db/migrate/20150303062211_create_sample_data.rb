class CreateSampleData < ActiveRecord::Migration
  def change
    create_table :sample_data do |t|
      t.string :first_name
      t.string :email
      t.string :color
      t.boolean :is_cool

      t.timestamps null: false
    end
  end
end
