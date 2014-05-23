angular.module('phone-format-br', [])
    .filter('phoneFormatBr', function () {

      var _formatPhone = function (raw) {

        if (!raw) return '';

        var N = raw.length;
        var result = '';
        var specialPrefixes = [
          '0300', '0500', '0800', '0900', '3003', '4003', '4004'
        ];
        var f = raw.substring(0,4);

        if (specialPrefixes.indexOf(f) !== -1) {
          var s = raw.substring(4,7);
          var t = raw.substring(7, N);

          result = f + " " + s + " " + t;
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
              cel = raw.substring(4, 5);

              if (cel === '9') {
                prefix = raw.substring(4, 9);
                lastFour = raw.substring(9, N);
              } else if (cel != '9' && N === 11) {
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

              result += '(' + ddd + ') ' + prefix + '-' + lastFour;
            }
          }
        }

        return result;
      };

      return _formatPhone;
    });
