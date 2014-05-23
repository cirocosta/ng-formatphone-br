'use strict';

describe('phoneFormatBr', function() {

  beforeEach(function () {
    browser.get('demo/index.html');
  });

  describe('filter,', function () {

    it('should apply the filter', function () {
      element(by.model('phoneInput')).sendKeys('551132078877');
      var pI = element(by.binding('phoneInput'));

      expect(pI.getText()).toEqual('(11) 3207-8877');
    });
  });
});
