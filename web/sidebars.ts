import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

const sidebars2: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'Google Tag Manager',
      collapsed: false,
      items: [
        'gtm/setup',
        'gtm/add-to-cohost',
        'gtm/event-tags-reference',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      collapsed: false,
      items: [
        'sdk/node/README',
        'sdk/react/README',
      ],
    },
    {
      type:'category',
      label: 'Cohost API',
      items: [
        'api-reference'
      ],
    }

    // {
    //   type: 'category',
    //   label: 'Getting Started',
    //   items: ['getting-started', 'gtm-setup'],
    // },
    // {
    //   type: 'category',
    //   label: 'Analytics & Events',
    //   items: ['events-reference'],
    // },
    // {
    //   type: 'category',
    //   label: 'API',
    //   items: ['api'],
    // },
  ],
};


export default sidebars2;
