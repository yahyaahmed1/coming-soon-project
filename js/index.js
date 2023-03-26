var countDownDate = new Date();
countDownDate = new Date(countDownDate.getFullYear() + 1, countDownDate.getMonth() - 4, 01);
var x = setInterval(function () {
  // ---------------- constants ----------------
  const milliMonth = 1000 * 60 * 60 * 24 * 30;
  const milliDay = 1000 * 60 * 60 * 24;
  const millihour = 1000 * 60 * 60;
  const milliMenute = 1000 * 60;
  const millisecond = 1000;
  // ---------------- calculate the rest date ----------------
  var now = new Date();
  var diff = countDownDate - now;
  var month = Math.floor(diff / milliMonth);
  var day = Math.floor((diff % (milliMonth)) / (milliDay));
  var hour = Math.floor((diff % milliDay) / millihour);
  var minute = Math.floor((diff % millihour) / milliMenute);
  var second = Math.floor((diff % milliMenute) / millisecond);
  // ---------------- put them in its places ----------------
  document.getElementById("months").innerHTML = month;
  document.getElementById("days").innerHTML = day;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;
}, 1000);

// ===================================================

// for validation 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();