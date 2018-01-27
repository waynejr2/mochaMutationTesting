function Foo() {
    var name;
    this.name = "Foo";
};

Foo.prototype.calculateFoo = function(a, b) {
    if ( a < b) {
        return 2 * b - a;
    } else {
        return 3 * a - b;
    }
};

Foo.prototype.calculateFoozle = function(a, b) {
    if ( a < b || b < a ) {
        return Math.abs(a - b);
    } else {
        return a;
    }
};

Foo.prototype.getName = function(){
    return this.name;
};

Foo.prototype.setName = function(name){
    this.name = name;
};

module.exports = Foo;