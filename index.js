import { Setting, SettingsObject } from '../SettingsManager/SettingsManager';

const EntityPlayer = Java.type('net.minecraft.entity.boss.EntityPlayer');
const EntityWither = Java.type('net.minecraft.entity.boss.EntityWither');

function inSkyblock() {
  return ChatLib.removeFormatting(Scoreboard.getTitle().includes('SKYBLOCK'));
}

function getFloor() {
  Scoreboard.getLines().forEach((line, i) => {
    let sanitized = ChatLib.removeFormatting(line.getName());
    let match = sanitized.match(/((?!⏣ The Catacombs \()([EFM])(\d)(?=\)))/g);

    if (match) {
      return match[2];
    }
  });

  return -1;
}

register('chat', (event, target) => {
  if (!inSkyblock() && getFloor() !== 7) {
    return;
  }

  Client.showTitle('', '&cFrenzy Over', 0, 15, 10);
}).setCriteria('&r&4[BOSS] Necron&r&c: &r&cARGH!&r').setParameter('contains')

register('renderOverlay', () => {
  if (!inSkyblock() && getFloor() !== 7) {
    return;
  }

  let withers = World.getAllEntitiesOfType(EntityWither.class);
  withers.forEach((wither, i) => {
    var witherEntity = wither.getEntity();

    if (ChatLib.removeFormatting(wither.getName()) === 'Necron') {
      new Text(`&c(${((witherEntity.func_110143_aJ() / witherEntity.func_110138_aP()) * 100).toFixed(2)}%)`, Renderer.screen.getWidth() / 2 + 100, 10 + i * 10).draw()
    };
  });
});
