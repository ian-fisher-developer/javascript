import {Greeting} from "../greeting.js";

describe("Greeting getMessage", function(){
    it("provides the hello message", function(){
        let greeting = new Greeting();
        assert.equal(greeting.getMessage(), "Hello, JavaScript!");
    });
});
