export function getFloor() {
  let value = null;

  Scoreboard.getLines().forEach((line, i) => {
    let sanitized = ChatLib.removeFormatting(line.getName());
    let match = sanitized.match(/(?!⏣ The Catacombs \([EFM])\d(?=\))/g);

    if (match) {
      value = match[0];
    }
  });

  return value;
}
