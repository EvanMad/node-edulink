# Node-Edulink

## Background

Unofficial Edulink node client that allows for interactive with the official Edulink backend through a series of functions that wrap around API calls.

## Documentation

```javascript
// First the learner_id should be got from the api using the school code
edulink.from_code(process.env.code).then(function (id) {
  edulink
    .login(process.env.name, process.env.pword, id)
    .then(function (result) {
      var authtoken = result.auth;
      var learner_id = result.id;
      edulink.get_catering(authtoken, learner_id).then(function (catering) {
        var catering = catering;
        var balance = catering[0]["balance"];
        console.log(balance);
    }); 
 });
```

### Building

build.bat is an automated script for packing the node-edulink node library and moving into example and test for use in there.

### Dependencies

For the library

- XMLHttpRequest

For the testing

- Mocha

- cmd-env (reccomended for environment variables)

- assert

- dotenv (reccomended for environment variables)

### Disclaimer

This is unofficial and unaffiliated with the original Edulink company and was purely made for education and personal reasons.