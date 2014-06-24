# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "base"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  
  #config.vm.customize ["modifyvm", :id, "--memory", 1024]
  config.vm.provider :virtualbox do |vb|
     vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  config.vm.define "db" do |db|
    db.vm.network "private_network", ip: "192.168.15.2"
    db.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
    end
  end

  config.vm.define "backend" do |backend|
    backend.vm.network "private_network", ip: "192.168.15.3"
    backend.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
    end
  end
end
