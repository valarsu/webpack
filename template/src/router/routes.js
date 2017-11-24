import HelloWorld from '@/components/HelloWorld'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default routes{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
