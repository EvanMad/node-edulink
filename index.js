var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.login = function(username, password, school_id) {
    return new Promise(function(resolve, reject) {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var auth;
        var url = "https://www2.edulinkone.com/api/?method=EduLink.Login";
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        
        xhr.setRequestHeader("X-API-Method", "EduLink.Login");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onreadystatechange = function (e) {
           if (xhr.readyState === 4) {
              var result = JSON.parse(xhr.responseText);
              auth = result["result"]["authtoken"];
              var id = result["result"]["user"]["id"]
              var loginObj = {auth, id};
              resolve(loginObj);
           }};
        var data = `{"jsonrpc":"2.0","method":"EduLink.Login","params":{"from_app":false,"ui_info":{"format":2,"version":"0.5.181","git_sha":"727e92d872e1b7cb408090427bfab119f384a836"},"username":"${username}","password":"${password}","establishment_id":${school_id}},"uuid":"${uuidv4()}","id":"1"}`;
        xhr.send(data);
    })
}

exports.get_homework = function(auth) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.Homework";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        
        xhr.setRequestHeader("X-API-Method", "EduLink.Homework");
        xhr.setRequestHeader("Authorization", `Bearer ${auth}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              var result = JSON.parse(xhr.responseText);
              var homework = result["result"]["homework"]["current"]
              resolve(homework);
           }
        };
        
        var data = `{"jsonrpc":"2.0","method":"EduLink.Homework","params":{"format":2},"uuid":"${uuidv4()}", "id":"1"}`;
        
        xhr.send(data);    
    })
}

exports.get_catering = function(auth, learner_id) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.Catering";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("X-API-Method", "EduLink.Catering");
        xhr.setRequestHeader("Authorization", `Bearer ${auth}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText);
            resolve(result); //Should probably filter this data
        }};
        var data = `{"jsonrpc":"2.0","method":"EduLink.Catering","params":{"learner_id":"${learner_id}"},"uuid":"${uuidv4()}","id":"1"}`;

        xhr.send(data);
    })
}

exports.documents = function(auth, learner_id) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.Documents";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("X-API-Method", "EduLink.Documents");
        xhr.setRequestHeader("Authorization", `Bearer ${auth}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText);
            resolve(result); //TODO: filter
        }};
        var data = `{"jsonrpc":"2.0","method":"EduLink.Documents","params":{"learner_id":"${learner_id}"},"uuid":"${uuidv4()}","id":"1"}`;

        xhr.send(data);
    })
}

exports.personal_details = function(auth, learner_id) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.Personal";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Authorization", `Bearer ${auth}`);
        xhr.setRequestHeader("X-API-Method", "EduLink.Personal");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText);
            resolve(result);
        }};

        var data = `{"jsonrpc":"2.0","method":"EduLink.Personal","params":{"learner_id":"${learner_id}"},"uuid":"${uuidv4()}","id":"1"}`;

        xhr.send(data);
    })
}

exports.get_achievementbehaviour = function(auth, learner_id) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.AchievementBehaviourLookups";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Authorization", `Bearer ${auth}`);
        xhr.setRequestHeader("X-API-Method", "EduLink.AchievementBehaviourLookups");
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText);
            resolve(result);
        }};
    
        var data = `{"jsonrpc":"2.0","method":"EduLink.AchievementBehaviourLookups","params":{"learner_id":"${learner_id}"},"uuid":"${uuidv4()}","id":"1"}`;
    
        xhr.send(data);
    })
}

exports.attendance = function(auth, learner_id) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.RegisterCodes";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader(`Authorization", "Bearer ${auth}`);
        xhr.setRequestHeader("X-API-Method", "EduLink.RegisterCodes");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};

        var data = `{"jsonrpc":"2.0","method":"EduLink.RegisterCodes","params":{"learner_id":"${learner_id}"},"uuid":"${uuidv4()}","id":"1"}`;

        xhr.send(data);
    })
}

// UUID generator stolen from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}