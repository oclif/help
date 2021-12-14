// `getHelpClass` tests require an oclif project for testing so
// it is re-using the setup here to be able to do a lookup for
// this sample help class file in tests, although it is not needed
// for @oclif/help itself.

import {HelpBase} from '.'

export default class extends HelpBase {
  showHelp() {
    console.log('help')
  }

  showCommandHelp() {
    console.log('command help')
  }

  getCommandHelpForReadme() {
    return 'help for readme'
  }
}
