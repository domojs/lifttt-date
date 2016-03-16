require('jnode/setup.js');
var getTarget=require('./date.js') ;

function test(now)
{
    getTarget({'minute':now.getMinutes()});
    getTarget({'minute':now.getMinutes(), 'hour':now.getHours()});
    getTarget({'minute':now.getMinutes(), 'hour':now.getHours(), 'date':now.getDate()});
    getTarget({'minute':now.getMinutes(), 'hour':now.getHours(), 'day':[0,6]});
    getTarget({'rise/set':'rise',"lat":48.0927988,"lng":7.370460299999999, tz:0,'day':[0,6]});
}

var now=new Date();

now.setMinutes(now.getMinutes()+1);

test(now);

now.setMinutes(now.getMinutes()-2);
console.log('');
test(now);