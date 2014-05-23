describe('PhoneFormatBr,', function () {
  'use strict';


  beforeEach(function () {
    module('phone-format-br');
  });

  var CASES = [
    ['contains 55 and a residential number',
      '551132078877','(11) 3207-8877'],
    ['doesnt contains 55 and has a residential number',
      '1132078877','(11) 3207-8877'],
    ['contains 55 and is an old residential number',
      '55112078877','(11) 207-8877'],
    ['contains 55, it is a celphone number, has a 9 prefix',
      '5511932078877','(11) 93207-8877'],
    ['doesnt contains 55, it is a celphone number, has a 9 prefix',
      '11932078877','(11) 93207-8877'],
    ['it is a 5 digit number',
      '10315', '10315'],
    ['it is a 3 digit number',
      '199', '199'],
    ['it is an special number',
      '08007260505','0800 726 0505'],
  ];

  describe('PhoneFormatBr filter', function () {
      it('should be defined', inject(function (phoneFormatBrFilter) {
        expect(!!phoneFormatBrFilter).toBe(true);
      }));

      describe('regarding the test cases', function () {
        for (var i in CASES) {
          it(CASES[i][0], inject(function (phoneFormatBrFilter) {
            expect(phoneFormatBrFilter(CASES[i][1])).toBe(CASES[i][2]);
          }));
        }
      });
  });
});
