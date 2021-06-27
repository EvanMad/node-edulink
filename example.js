require('dotenv').config();
var edulink = require("edulink");
var auth;

edulink.login(process.env.name, process.env.pword, process.env.SCHOOL_ID).then(function(authtoken) {
    edulink.get_homework(authtoken).then(function(homework) {
        var homework = (homework);
        console.log(homework)
    })
});
