export function getSkyblock() {
  return ChatLib.removeFormatting(Scoreboard.getTitle().includes('SKYBLOCK'));
}
