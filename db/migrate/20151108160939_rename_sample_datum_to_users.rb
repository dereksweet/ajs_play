class RenameSampleDatumToUsers < ActiveRecord::Migration
  def change
    rename_table :sample_data, :users
  end
end
