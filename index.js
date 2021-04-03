import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";

register('chat', (event, target) => {
  Client.showTitle('', '&cFrenzy Over', 0, 15, 10);
}).setCriteria('&r&4[BOSS] Necron&r&c: &r&cARGH!&r').setParameter('contains')