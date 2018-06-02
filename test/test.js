var expect = require("chai").expect;
var User = require("../app/models/user");

// requiring db to mimic our POST route
var db = require("../app/models");


describe("feature: user", function () {
    it("scenario: exists", function () {
        expect(User).to.be.a('function')
    });

    it("should create a new user", () => {
        expect(function (done) {
            //we are 'mimicking' our api POST route with our specified DataTypes
            db.User.create({
                firstname: "your name",
                lastname: "last name",
                username: "imTheGOAT",
                email: "any@email.com",
                password: "password"
            });
            done();
        });
    });

    it("should use bcrypt to compare user password with a hash in the database", () => {
        expect(function () {
            bcrypt(password, this.password);
        });
    });

    it("should authenticate user login", ()=> {
        expect(post).to.respondTo("passport.authenticate");
    });

});