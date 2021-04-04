const modules = [
  'debug',
  'necronHealthDisplay',
  'necronFrenzyNotifier'
];

modules.forEach((moduleName, i) => {
  let module = require(`./modules/${moduleName}`);
  module = new module();

  Object.entries(module.triggers).forEach(([trigger, functions]) => {
    functions.forEach(func => {
      let run = func.run;

      if (trigger === 'chat') {
        if (func.criteria === null) {
          return;
        }

        register(trigger, (...args) => {
          run(...args);
        }).setCriteria(func.criteria).setParameter('contains');
      } if (trigger === 'command') {
        register(trigger, (...args) => {
          run(...args);
        }).setName(func.name)
      } else {
        register(trigger, (...args) => {
          run(...args);
        });
      }
    });
  });
});
