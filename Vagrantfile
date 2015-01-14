# Vagrant version 2
VAGRANTFILE_API_VERSION = "2"


Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box       = 'precise32'
  config.vm.box_url   = 'http://files.vagrantup.com/precise32.box'
  config.vm.hostname = 'rails-dev-box'
  config.vm.synced_folder  "c:/xamppN/htdocs/effectsN/", "/home/vagrant/effects"
  
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
  		sudo npm install -g gulp
  		sudo npm install -g bower 

  		cd /home/vagrant/effects
  		sudo npm install --no-bin-links
  		sudo npm update --no-bin-links

      echo "cd /home/vagrant/effects" >>  /home/vagrant/.bashrc
    SCRIPT

    $script_no_root = <<-SCRIPT
   		cd /home/vagrant/effects
      bower --config.interactive=false install
      /usr/local/rvm/gems/ruby-2.2.0@global/bin/bundle install  
      gulp build  
    SCRIPT

  config.vm.provision "shell", inline: $script
  config.vm.provision "shell", inline: $script_no_root, privileged: false
end

