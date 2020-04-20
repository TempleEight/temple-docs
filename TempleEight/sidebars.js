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
        'guide/value-annotations', 'guide/authentication',
        'guide/access-control', 'guide/foreign-keys',
        'guide/omitting-endpoints', 'guide/enumeration', 'guide/hooks',
        'guide/adding-endpoints', 'guide/adding-dao-functions',
        'guide/regeneration', 'guide/orchestration', 'guide/metrics',
        'guide/temple-test'
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
          ]
        }
      ]
    }
  ]
};
