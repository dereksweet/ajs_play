namespace :tests do
  desc "Clean up after tests that were interupted"
  task :clean => :environment do
    puts "Remove users with the first name 'Test'"
    User.where(first_name: 'Test').each &:destroy
  end
end