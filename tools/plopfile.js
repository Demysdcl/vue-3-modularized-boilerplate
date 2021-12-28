module.exports = function (plop) {
  plop.setGenerator('Create Base Component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where you want to create the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{path}}/{{pascalCase name}}.vue',
        templateFile: './component/component.vue.hbs',
      },
    ],
  })

  plop.setGenerator('Create Base Module', {
    description: 'Create a module with store, router e components folders',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the module name?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../src/modules/{{camelCase name}}',
        templateFiles: './module',
      },
      // {
      //   type: 'append',
      //   path: '../src/modules/index.js',
      //   pattern: /\/\/plopfile append pattern - do not remove this comment/g,
      //   template: "import './{{camelCase name}}'",
      // },
      // {
      //   type: 'append',
      //   path: '../src/modules/router.js',
      //   pattern: /\/\/plopfile import pattern - do not remove this comment/g,
      //   template:
      //     "import {{camelCase name}}Router from './{{camelCase home}}/router'",
      // },
      // {
      //   type: 'append',
      //   path: '../src/modules/router.js',
      //   pattern: /export default \[/g,
      //   template: '...{{camelCase name}}Router',
      // },
    ],
  })
}
