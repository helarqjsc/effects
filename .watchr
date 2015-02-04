puts 'wat'
def run_spec(file)
  unless File.exist?(file)
    puts "#{file} does not exist"
    return
  end

  puts "Running #{file}"
  system "bundle exec rspec #{file}"
  puts
end

watch("spec/controllers/api/video_controller_spec.rb") do |match|
  run_spec match[0]
end
