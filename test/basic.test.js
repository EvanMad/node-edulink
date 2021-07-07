// WIP
require("dotenv").config();
const assert = require("assert");
const edulink = require("node-edulink");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var id;
var authtoken;
var learner_id;
describe("reqs", () => {
	it("Should get things", function () {
		return edulink.from_code(process.env.code).then(function (code) {
			id = code;
		});
	});
	it("Should login", function () {
		return edulink
			.login(process.env.name, process.env.pword, id)
			.then(function (result) {
				authtoken = result.auth;
				learner_id = result.id;
			});
	});
	it("Should get homework", function () {
		return edulink.get_homework(authtoken).then(function (homework) {});
	});
	it("Should get catering", function () {
		return edulink.get_catering(authtoken, learner_id);
	});
	it("Should get documents", function () {
		return edulink.documents(authtoken, learner_id);
	});
	it("Should get personal details", function () {
		return edulink.personal_details(authtoken, learner_id);
	});
	it("Should get achievement & behaviour data", function () {
		return edulink
			.get_achievementbehaviour(authtoken, learner_id)
			.then(function (result) {
				//console.log(result);
			});
	});
});
