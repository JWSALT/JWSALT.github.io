
setInterval(function () {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hour >= 12 ? 'pm' : 'am';
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0' + minute : minute;
    var time = hour + ':' + minute;
    document.getElementById('time').innerHTML = time;
    document.getElementById('day').innerHTML = days[day];
  }, 1000);
  