import * as util from '../util';

class Debug {
  constructor() {
    this.name = 'Debug';
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

module.exports = Debug;
