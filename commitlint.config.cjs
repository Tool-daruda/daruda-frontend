module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)(?:\/#(\d+))?: (.*)$/, 
      headerCorrespondence: ['type', 'issue', 'subject'],     
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Init',
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Refactor',
        'Test',
        'Chore',
        'Build',
        'Design',
        'Comment',
        'Rename',
        'Remove',
        '!HOTFIX',
      ],
    ],
    'subject-empty': [
      2,
      'never',
    ],
    'type-empty': [
      2,
      'never'
    ],
  },
};