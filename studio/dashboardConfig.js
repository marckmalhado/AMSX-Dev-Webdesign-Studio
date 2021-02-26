export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603933aa5aab1400ab3ca836',
                  title: 'Sanity Studio',
                  name: 'amsx-dev-webdesign-studio-studio',
                  apiId: '8c1b8a06-5a2a-4aee-abb7-9fb7f2189fad'
                },
                {
                  buildHookId: '603933abe854c8007c9050c9',
                  title: 'Blog Website',
                  name: 'amsx-dev-webdesign-studio',
                  apiId: '6838bccf-1457-41b9-82e1-5ed1f8f0d078'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marckmalhado/AMSX-Dev-Webdesign-Studio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://amsx-dev-webdesign-studio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
