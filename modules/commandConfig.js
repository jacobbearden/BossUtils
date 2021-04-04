import Config from '../config';

class CommandConfig {
  constructor() {
    this.name = 'Command Config';
    this.triggers = {
      'command': [{
        'run': this.run,
        'name': 'bossutils'
      }]
    };
  }

  run() {
    Config.openGUI();
  }
}

module.exports = CommandConfig;
