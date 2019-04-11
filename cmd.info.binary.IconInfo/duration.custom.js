jeedom.cmd.displayDuration2 = function(_date,_el){
  var arrDate = _date.split(/-|\s|:/);
  var timeInMillis = new Date(arrDate[0], arrDate[1] -1, arrDate[2], arrDate[3], arrDate[4], arrDate[5]).getTime();
  _el.attr('data-time',timeInMillis);
  if(_el.attr('data-interval') != undefined){
    clearInterval(_el.attr('data-interval'));
  }
  if(_el.attr('data-time') < (Date.now()+ clientServerDiffDatetime)){
    var d = ((Date.now() + clientServerDiffDatetime) - _el.attr('data-time')) / 1000;
    var j = Math.floor(d / 86400);
    var h = Math.floor(d % 86400 / 3600);
    var m = Math.floor(d % 3600 / 60);
    _el.empty().append(((j > 0 ? j + "j " : "") + (h > 0 ? h + "h " : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + "min" : "0min")));
    var myinterval = setInterval(function(){
      var d = ((Date.now() + clientServerDiffDatetime) - _el.attr('data-time')) / 1000;
      var j = Math.floor(d / 86400);
      var h = Math.floor(d % 86400 / 3600);
      var m = Math.floor(d % 3600 / 60);
      _el.empty().append(((j > 0 ? j + "j " : "") + (h > 0 ? h + "h " : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + "min" : "0min")));
    }, 60000);
    _el.attr('data-interval',myinterval);
  }else{
    _el.empty().append("0min");
    var myinterval = setInterval(function(){
      if(_el.attr('data-time') < (Date.now()+ clientServerDiffDatetime)){
        var d = ((Date.now() + clientServerDiffDatetime) - _el.attr('data-time')) / 1000;
        var j = Math.floor(d / 86400);
        var h = Math.floor(d % 86400 / 3600);
        var m = Math.floor(d % 3600 / 60);
        _el.empty().append(((j > 0 ? j + "j " : "") + (h > 0 ? h + "h " : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + "min" : "0min")));
      }else{
        _el.empty().append("0min");
      }
    }, 60000);
    _el.attr('data-interval',myinterval);
  }
};