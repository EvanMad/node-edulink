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
              console.log(xhr.status);
              var result = JSON.parse(xhr.responseText);
              auth = result["result"]["authtoken"];
              resolve(auth);
           }};
        var data = `{"jsonrpc":"2.0","method":"EduLink.Login","params":{"from_app":false,"ui_info":{"format":2,"version":"0.5.181","git_sha":"727e92d872e1b7cb408090427bfab119f384a836"},"username":"${username}","password":"${password}","establishment_id":${school_id}},"uuid":"${uuidv4()}","id":"1"}
        `;
        
        xhr.send(data);
    })
}

exports.get_homework = function(auth) {
    return new Promise(function(resolve, reject) {
        var url = "https://www2.edulinkone.com/api/?method=EduLink.Homework";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        
        xhr.setRequestHeader("X-API-Method", "EduLink.Homework");
        xhr.setRequestHeader("Authorization", "Bearer " + auth);
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              var result = JSON.parse(xhr.responseText);
              var homework = result["result"]["homework"]["current"]
              resolve(homework);
           }};
        
        var data = '{"jsonrpc":"2.0","method":"EduLink.Homework","params":{"format":2},"uuid":"' + uuidv4() + '","id":"1"}';
        
        xhr.send(data);    
    })
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}