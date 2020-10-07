export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f7e4a689620f74a6fe8cfe7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-wpidood4',
                  apiId: '7e7a0d30-6a72-40b1-b824-d8ce0bf70545'
                },
                {
                  buildHookId: '5f7e4a6968d51e31a3129cde',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-68dfd123',
                  apiId: '342db97b-e7b8-4584-89b6-705dfee3870f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicolazj/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-68dfd123.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
