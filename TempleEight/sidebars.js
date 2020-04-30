/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guide/access-control',
        'guide/adding-dao-functions',
        'guide/adding-endpoints',
        'guide/authentication',
        'guide/enumeration',
        'guide/foreign-keys',
        'guide/hooks',
        'guide/metrics',
        'guide/omitting-endpoints',
        'guide/open-api',
        'guide/orchestration',
        'guide/regeneration',
        'guide/temple-test',
        'guide/value-annotations',
        'guide/value-constraints',
      ],
    },
    {
      type: 'category',
      label: 'Generated Architecture',
      items: ['arch/system', 'arch/service'],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/templefile-spec', 'reference/templefile-primitives', {
          type: 'category',
          label: 'Example Templefiles',
          items: [
            'reference/example-templefiles/airbnb',
            'reference/example-templefiles/amazon',
            'reference/example-templefiles/deliveroo',
            'reference/example-templefiles/five-a-side',
            'reference/example-templefiles/lockdown-shopping',
          ]
        }
      ]
    }
  ]
};
