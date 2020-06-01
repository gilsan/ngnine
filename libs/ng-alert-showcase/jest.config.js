module.exports = {
  name: 'ng-alert-showcase',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-alert-showcase',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
