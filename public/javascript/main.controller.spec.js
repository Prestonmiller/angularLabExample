'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.data.length;
           scope.removeData(1);
           expect(scope.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.data.length;
            scope.textField = "kittens";
            scope.addData();
            expect(scope.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.pages.length > 0).toEqual(true);
    });
});

describe('Testing controller: calcCtrl', function(){

    it("should be 1",function() {
        expect(letterToNumber("D")).toBe(1);
    });

    it("should be 1.3",function() {
        expect(letterToNumber("D+")).toBe(1.3);
    });

    it("should be 1.7",function() {
        expect(letterToNumber("C-")).toBe(1.7);
    });

    it("should be 2",function() {
        expect(letterToNumber("C")).toBe(2);
    });

    it("should be 2.3",function() {
        expect(letterToNumber("C+")).toBe(2.3);
    });

    it("should be 2.7",function() {
        expect(letterToNumber("B-")).toBe(2.7);
    });

    it("should be 3",function() {
        expect(letterToNumber("B")).toBe(3);
    });

    it("should be 3.3",function() {
        expect(letterToNumber("B+")).toBe(3.3);
    });

    it("should be 3.7",function() {
        expect(letterToNumber("A-")).toBe(3.7);
    });

    it("should be 4",function() {
        expect(calc("A",5,"A",4,"A",1234)).toBe(4.0);
    });

    it("should be 3",function() {
        expect(calc("B",5,"B",4,"B",1234)).toBe(3.0);
    });

    it("should be 2",function() {
        expect(calc("C",5,"C",4,"C",1234)).toBe(2.0);
    });

    it("should be 1",function() {
        expect(calc("D",5,"D",4,"D",1234)).toBe(1.0);
    });

    it("should be 1.3",function() {
        expect(calc("D+",5,"D+",4,"D+",1234)).toBe(1.3);
    });

    it("should be 1.7",function() {
        expect(calc("C-",5,"C-",4,"C-",1234)).toBe(1.7);
    });

    it("should be 2.3",function() {
        expect(calc("C+",5,"C+",4,"C+",1234)).toBe(2.3);
    });

    it("should be 2.7",function() {
        expect(calc("B-",5,"B-",4,"B-",1234)).toBe(2.7);
    });

    it("should be 3.3",function() {
        expect(calc("B+",5,"B+",4,"B+",1234)).toBe(3.3);
    });

    it("should be 3.7",function() {
        expect(calc("A-",5,"A-",4,"A-",1234)).toBe(3.7);
    });

});