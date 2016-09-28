var fs = require('fs');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');
var should = chai.should();

// TODO: clean the database before running test

chai.use(chaiHttp);

describe("Operations on taxa", function() {

    describe("Adding a taxon", function() {

        it("should work if the taxon is unique",function(done){

          var file = './test/data/taxon/vulpes_vulpes.json'
          var data = JSON.parse(fs.readFileSync(file, 'utf8'));

          chai.request(server)
            .post('/api/v0/taxon')
            .send(data)
            .end(function(req,res){
              res.should.have.status(201);
              done();
            });
          });

        it("should not work if the taxon is not unique");
        it("should not work if the taxon has no name");

    });

    describe("Adding multiple taxa", function() {

        it("should work with multiple unique taxa", {
            var multiple_taxa = [
                {
                    name: "Lamellodiscus acanthopagri",
                    eol: 11989425
                }, {
                    name: "Lamellodiscus confusus",
                    eol: 17922356
                }
            ];

            chai.request(server)
            .post('/api/v0/taxon')
            .send(data)
            .end(function(req,res){
              res.should.have.status(201);
              done();
            });

        });

        it("should work with non-unique taxa");

    });

    describe("GETting a taxon", function() {

        it("should return 404 if there is no taxon with this ID");
        it("should return a taxon with the correct ID if it exists");

    })

});
