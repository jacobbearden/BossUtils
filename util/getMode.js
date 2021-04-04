export function getMode() {
  let value = null;

  Scoreboard.getLines().forEach((line, i) => {
    let sanitized = ChatLib.removeFormatting(line.getName());
    let match = sanitized.match(/(?!⏣ The Catacombs \()[EFM](?=\d\))/g);

    if (match) {
      if (match[0] === 'M') {
        value = 'master';
      } else {
        value = 'normal';
      }
    }
  });

  return value;
}
