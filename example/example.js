require('dotenv').config();
var edulink = require("node-edulink");

edulink.login(process.env.name, process.env.pword, process.env.SCHOOL_ID).then(function(result) {
    var authtoken = result.auth;
    var learner_id = result.id;
    edulink.get_homework(authtoken).then(function(homework) {
        var homework = (homework);
    });
    edulink.get_catering(authtoken, learner_id).then(function(catering) {
        var catering = catering;
        var balance = catering["result"]["transactions"][0]["balance"];
        console.log(balance);
    });
    edulink.documents(authtoken, learner_id).then(function(documents) {
        var docs = documents["result"]["documents"];
        docs.forEach(doc => {
        });
    });
    edulink.personal_details(authtoken, learner_id).then(function(personal) {
        //console.log(personal);
    })
    edulink.get_achievementbehaviour(authtoken, learner_id).then(function(achievementbehaviour) {
        //console.log(achievementbehaviour);
    });
});
