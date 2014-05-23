angular.module('phone-format-br', []).filter('phoneFormatBr', function () {

  function _formatPhone(raw) {
    if (!(raw && (typeof raw === 'string' || raw instanceof String)))
      return '';

    var N = raw.length;
    var result = '';
    var specialPrefixes = [
      '0300', '0500', '0800', '0900', '3003', '4003', '4004'
    ];
    var f = raw.substring(0,4);

    if (specialPrefixes.indexOf(f) !== -1) {
      var s = raw.substring(4,7);
      var t = raw.substring(7, N);

      if (t) {
        result = f + " " + s + " " + t;
      } else if(s) {
        result = f + " " + s;
      } else {
        result = f;
      }

    } else {
      if (N <= 5) {
        result = raw;
      } else {
        var ddd;
        var prefix;
        var lastFour;
        var cel;

        ddd = raw.substring(0,2);

        if (ddd === '55') {
          ddd = raw.substring(2,4);
          cel = raw[4];

          if (cel === '9') {
            prefix = raw.substring(4, 9);
            lastFour = raw.substring(9, N);
          } else if (cel !== '9' && N === 11) {
            prefix = raw.substring(4, 7);
            lastFour = raw.substring(7, N);
          } else {
            prefix = raw.substring(4, 8);
            lastFour = raw.substring(8, N);
          }

          result += '(' + ddd + ') ' + prefix + '-' + lastFour;
        } else {
          if (N === 9) {
            prefix = raw.substring(2, 5);
            lastFour = raw.substring(5, N);
          } else {
            cel = raw.substring(2, 3);
            if (cel === '9') {
              prefix = raw.substring(2, 7);
              lastFour = raw.substring(7, N);
            } else {
              prefix = raw.substring(2, 6);
              lastFour = raw.substring(6, N);
            }
          }

          if (lastFour) {
            result += '(' + ddd + ') ' + prefix + '-' + lastFour;
          } else {
            result += '(' + ddd + ') ' + prefix;
          }
        }
      }
    }

    return result;
  };

  return _formatPhone;
}).directive('phoneValidator', ['$filter',function ($filter) {

  var formatPhoneBrFilter = $filter('phoneFormatBr');

  function _removeNonNumeric(str) {
    if (typeof str === 'string' || str instanceof String)
      return str.replace(/\D/g, '');

    return '';
  };

  function _applyFormat(str) {
    if (!str) return '';

    return formatPhoneBrFilter(_removeNonNumeric(str));
  };

  return {
    restrict: 'A',
    require: '^ngModel',
    scope: {
      ngModel: '='
    },
    link: function (scope, elem, attrs, ngModelController) {
      ngModelController.$parsers.push(function (data) {
        data = data || '';
        return _removeNonNumeric(data);
      });

      ngModelController.$formatters.push(function (data) {
        return _applyFormat(data);
      });

      elem.bind('keyup', function (e) {
        var currVal = elem.val();
        elem.val(_applyFormat(currVal));
      });
    }
  };
}]);
