import * as util from '../util';

class CommandDebug {
  constructor() {
    this.name = 'Command Debug';
    this.triggers = {
      'command': [{
        'run': this.run,
        'name': 'bossutils:debug'
      }]
    };
  }

  run() {
    ChatLib.chat(`
      &b&l- BossUtils -&r
      &eSkyblock: &7${util.getSkyblock()}&r
      &eMode: &7${util.getMode()}&r
      &eFloor: &7${util.getFloor()}&r
    `);
  }
}

module.exports = CommandDebug;
