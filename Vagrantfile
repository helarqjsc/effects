# Vagrant version 2
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box       = 'precise32'
  config.vm.box_url   = 'http://files.vagrantup.com/precise32.box'
  config.vm.hostname = 'rails-dev-box'
  config.vm.synced_folder  "c:/xampp/htdocs/Effects/", "/home/vagrant/effects"
  
  #config.vm.network :private_network, ip: "192.168.33.10"
  config.vm.network :forwarded_port, guest: 3000, host: 3000, auto_correct: true

  config.vm.provision :puppet,
    :manifests_path => 'puppet/manifests',
    :module_path    => 'puppet/modules'
end
