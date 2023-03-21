function kiemTraNguyenTo(n) {
          if (n < 2) {
            return false;
          }
          for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
              return false;
            }
          }
          return true;
        }

        function tongSoNguyenTo() {
          var num1 = parseInt(document.getElementById("num1").value);
          var num2 = parseInt(document.getElementById("num2").value);
          var tong = 0;
          for (var i = num1; i <= num2; i++) {
            if (kiemTraNguyenTo(i)) {
              tong += i;
            }
          }
          document.getElementById("ketQua").value = tong;
        }