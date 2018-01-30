
var Foo = require("../js/Foo");
var expect = require('chai').expect;
var assert = require('chai').assert;

describe("testing Foo", function() {
    describe("functions are functions", function() {
        it("calculateBar is a function", function() {
            var f = new Foo();
            
            assert.typeOf(f.calculateBar, 'function');
        });
        it("calculateFoo is a function", function() {
            var f = new Foo();
            
            assert.typeOf(f.calculateFoo, 'function');
        });
        it("calculateFoozle is a function", function() {
            var f = new Foo();
            
            assert.typeOf(f.calculateFoozle, 'function');
        });
        it("getName is a function", function() {
            var f = new Foo();
            
            assert.typeOf(f.getName, 'function');
        });
        it("setName is a function", function() {
            var f = new Foo();
            
            assert.typeOf(f.setName, 'function');
        });
    });
    describe('calculateBar test suite', function(){
        it('if a < b', function() {
            var f = new Foo();
            
            var actual = f.calculateBar(0, 2);
            var expected = 0;
            
            expect(actual).to.be.equal(expected);            
        });
        it('if a > b', function() {
            var f = new Foo();
            
            var actual = f.calculateBar(2, 0);
            var expected = 1;
            
            expect(actual).to.be.equal(expected);            
        });
        it('if a = b', function() {
            var f = new Foo();
            
            var actual = f.calculateBar(2, 2);
            var expected = 1;
            
            expect(actual).to.be.equal(expected);            
        });
    });
    describe('calculateFoo test suite', function() {
        it("if a < b", function() {
            var f = new Foo();
            
            var actual = f.calculateFoo(1, 5);
            var expected = 9;
            
            expect(actual).to.be.equal(expected);
        });
        it("if a > b", function() {
            var f = new Foo();
            
            var actual = f.calculateFoo(5, 4);
            var expected = 11;
            
            expect(actual).to.be.equal(expected);
        });
        it("if a = b", function() {
            var f = new Foo();
            
            var actual = f.calculateFoo(5, 5);
            var expected = 10;
            
            expect(actual).to.be.equal(expected);
        });
    });
    describe("calculateFoozle test suite", function(){
        it("if a < b", function(){
            var f = new Foo();
            
            var actual = f.calculateFoozle(1, 2);
            var expected = 1;
            
            expect(actual).to.be.equal(expected);
        });        
        it("if a > b", function(){            
            var f = new Foo();
            
            var actual = f.calculateFoozle(2, 1);
            var expected = 1;
            
            expect(actual).to.be.equal(expected);
        });        
        it("if a = b", function(){                      
            var f = new Foo();
            
            var actual = f.calculateFoozle(2, 2);
            var expected = 2;
            
            expect(actual).to.be.equal(expected);
        });
    });
    describe("getName test suite", function(){
        it("getName() should return Foo", function(){                  
            var f = new Foo();
            
            var actual = f.getName();
            var expected = "Foo";
            
            expect(actual).to.be.equal(expected);            
        });
    });
    describe("setName test suite", function(){
        it("setName should set object's name", function(){                  
            var f = new Foo();
            
            f.setName("Bar");
            var actual = f.getName();
            var expected = "Bar";
            
            expect(actual).to.be.equal(expected);     
            
        });
    });
});