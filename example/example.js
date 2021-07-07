require("dotenv").config();
var edulink = require("node-edulink");

edulink.from_code(process.env.code).then(function (id) {
  edulink
    .login(process.env.name, process.env.pword, id)
    .then(function (result) {
      var authtoken = result.auth;
      var learner_id = result.id;
      edulink.get_homework(authtoken).then(function (homework) {
        var homework = homework;
      });
      edulink.get_catering(authtoken, learner_id).then(function (catering) {
        var catering = catering;
        var balance = catering[0]["balance"];
        console.log(balance);
      });
      edulink.documents(authtoken, learner_id).then(function (documents) {
        documents.forEach((doc) => {});
      });
      edulink.personal_details(authtoken, learner_id).then(function (personal) {
        //console.log(personal);
      });
      edulink
        .get_achievementbehaviour(authtoken, learner_id)
        .then(function (achievementbehaviour) {
          //console.log(achievementbehaviour);
        });
    });
});
