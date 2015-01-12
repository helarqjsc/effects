# Vagrant version 2
VAGRANTFILE_API_VERSION = "2"

system('cd /home/vagrant/effects')

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box       = 'precise32'
  config.vm.box_url   = 'http://files.vagrantup.com/precise32.box'
  config.vm.hostname = 'rails-dev-box'
  config.vm.synced_folder  "c:/xampp/htdocs/Effects/", "/home/vagrant/effects"
  
  #config.vm.network :private_network, ip: "192.168.33.10"
  config.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true

  $script = <<-SCRIPT
    apt-get update

		apt-get install -y git
    apt-get install -y curl

    apt-get --purge remove ruby-rvm
    rm -rf /usr/share/ruby-rvm /etc/rvmrc /etc/profile.d/rvm.sh

    command curl -sSL https://rvm.io/mpapis.asc | gpg --import -
    curl -L https://get.rvm.io | bash -s stable --ruby --autolibs=enable --auto-dotfiles
    source /home/vagrant/.rvm/scripts/rvm
    chown -R vagrant /usr/local/rvm

		curl -sL https://deb.nodesource.com/setup | sudo bash -
		apt-get install -y nodejs
		npm install -g gulp --no-bin-links
		npm install -g bower --no-bin-links

    cd /home/vagrant/effects
    bundle install    
    npm install --no-bin-links
    npm update --no-bin-links
    bower --config.interactive=false install
  SCRIPT

  config.vm.provision "shell", inline: $script
end

