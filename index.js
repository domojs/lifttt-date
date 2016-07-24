var getTarget=require('./date.js');

function intervaller(fields, callback){
    
	var timeOut=setTimeout(function(){
	    process.removeListener('exit', cancelPreviousListener)
		intervaller(fields, callback);
		callback(fields);
	}, getTarget(fields).getTime()-new Date().getTime());
	
    var cancelPreviousListener=function(){
        clearTimeout(timeOut);
	};
	
	process.on('exit',cancelPreviousListener);
}

module.exports={"name":"date", "triggers":[
{"name":"Tous les jours à", fields:[{ "name":"hour", "displayName":"Heure"}, {"name":"minute", "displayName":"Minute"}], "when":intervaller},
{"name":"Tous les levers/coucher de soleils", fields:[{"name":"lat", "displayName":"Latitude"}, {"name":"lng", "displayName":"Longitude"}, {"name":"tz", "displayName":"Fuseau horaire"}, {"name":"rise/set", "displayName":"Coucher/Lever"}, {name:"day", displayName:"Jour"}], "when":intervaller},
{"name":"Toutes les heures à", fields:[{"name":"minute", "displayName":"Minute"}], "when":intervaller},
{"name":"Toutes les semaines à", fields:[{ "name":"hour", "displayName":"Heure"}, {"name":"minute", "displayName":"Minute"},{ "name":"day", "displayName":"Jour"}], "when":intervaller},
{"name":"Tous les mois à", fields:[{ "name":"hour", "displayName":"Heure"}, {"name":"minute", "displayName":"Minute"},{ "name":"date", "displayName":"Jour"}], "when":intervaller},
{"name":"Tous les ans", fields:[{ "name":"hour", "displayName":"Heure"}, {"name":"minute", "displayName":"Minute"},{ "name":"day", "displayName":"Jour"}, {"name":"month", "displayName":"Mois"}], "when":intervaller}
]}