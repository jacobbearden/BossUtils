import { @Vigilant, @CheckboxProperty } from 'Vigilance';

@Vigilant('BossUtils')
class Config {
  constructor() {
    this.initialize(this);
  }

  commandDebug = true;
  commandConfig = true;

  @CheckboxProperty({
    name: 'Necron Health Display',
    description: 'Display Necron\'s health as a percentage (next to boss bar).',
    category: 'Floor 7'
  })
  necronHealthDisplay = true;

  @CheckboxProperty({
    name: 'Necron Frenzy Notifier',
    description: 'Display a notification when Necron\'s Frenzy ends.',
    category: 'Floor 7'
  })
  necronFrenzyNotifier = true;
}

export default new Config;
