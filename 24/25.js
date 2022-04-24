const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.getName = function () {};
    return Person;
})();
