var expect = require('chai').expect;
var request = require('supertest');
var express = require('../');
var http = require ('http');

describe("Implement Empty App",function(){
	var app = express();
	describe("as handler to http.createServer",function(){
		it("responds to /foo with 404",function(done){
			var server = http.createServer(app);
			request(server)
				.get("/foo")
				.expect(404)
				.end(done);
		});
	});

	describe("Defining the app.listen method",function(){
		var server;

		before (function(done){
			server = app.listen('7000',done);			
		});

		it("should return an http.Server",function(){
			expect(server).to.be.instanceof(http.Server);
		});
		it("should responds to /foo with 404",function(done){
			request("http://localhost:7000").get("/foo").expect(404).end(done);
		});

	});
})