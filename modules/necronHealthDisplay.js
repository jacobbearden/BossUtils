import * as util from '../util';

const EntityWither = Java.type('net.minecraft.entity.boss.EntityWither');

class NecronHealthDisplay {
  constructor() {
    this.name = 'Necron Health Display';
    this.triggers = {
      'renderOverlay': [{
        'run': this.run
      }]
    };
  }

  run() {
    if (!util.getSkyblock() || util.getFloor() !== 7) {
      return;
    }

    let withers = World.getAllEntitiesOfType(EntityWither.class);
    withers.forEach((wither, i) => {
      var witherEntity = wither.getEntity();

      if (ChatLib.removeFormatting(wither.getName()) === 'Necron') {
        new Text(`&c(${((witherEntity.func_110143_aJ() / witherEntity.func_110138_aP()) * 100).toFixed(2)}%)`, Renderer.screen.getWidth() / 2 + 100, 15 + i * 10).setShadow(true).draw()
      };
    });
  }
}

module.exports = NecronHealthDisplay;
