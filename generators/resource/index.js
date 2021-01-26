/**
 * Component Generator
 */

const path = require('path');

const RESOURCE_NAME = 'ResourceName';

const serverPath = path.join(__dirname, '../../src/server/');
const serverBasePath = path.join(__dirname, '../../src/server/main.py');

const resourceGenerator = {
  description: 'Add a resource',
  prompts: [
    {
      type: 'input',
      name: RESOURCE_NAME,
      message: 'What should it be called?',
      default: 'resource',
    },
  ],
  actions: (data) => {

    const actions = [
      {
        type: 'add',
        path: `${serverPath}/${data[RESOURCE_NAME]}.py`,
        templateFile: './resource/server.py.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${serverBasePath}`,
        pattern: new RegExp(/.*\#.*\[INCLUDE NEW ROUTER ABOVE\].+/),
        templateFile: './resource/includeRouter.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${serverBasePath}`,
        pattern: new RegExp(/.*\#.*\[IMPORT NEW ROUTER ABOVE\].+/),
        templateFile: './resource/importRouter.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

module.exports = {
  resourceGenerator
}
