import * as util from '../util';

class NecronFrenzyNotifier {
  constructor() {
    this.name = 'Necron Frenzy Notifier';
    this.triggers = {
      'chat': [{
        'run': this.run,
        'criteria': '&r&4[BOSS] Necron&r&c: &r&cARGH!&r'
      }]
    };
  }

  run() {
    if (!util.getSkyblock() || util.getFloor() !== 7) {
      return;
    }

    Client.showTitle('', '&cFrenzy Over', 0, 20, 10);
  }
}

module.exports = NecronFrenzyNotifier;
