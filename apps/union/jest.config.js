module.exports = {
  name: 'union',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/union',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
