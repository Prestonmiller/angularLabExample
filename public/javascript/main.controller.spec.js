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

    beforeEach(module('mainApp'));

    var scope; var mainCtrl;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('calcCtrl', {
            $scope: scope
        });
    }));

    it("should be 1",function() {
        expect(scope.letterToNumber("D")).toBe(1);
    });

    it("should be 1.3",function() {
        expect(scope.letterToNumber("D+")).toBe(1.3);
    });

    it("should be 1.7",function() {
        expect(scope.letterToNumber("C-")).toBe(1.7);
    });

    it("should be 2",function() {
        expect(scope.letterToNumber("C")).toBe(2);
    });

    it("should be 2.3",function() {
        expect(scope.letterToNumber("C+")).toBe(2.3);
    });

    it("should be 2.7",function() {
        expect(scope.letterToNumber("B-")).toBe(2.7);
    });

    it("should be 3",function() {
        expect(scope.letterToNumber("B")).toBe(3);
    });

    it("should be 3.3",function() {
        expect(scope.letterToNumber("B+")).toBe(3.3);
    });

    it("should be 3.7",function() {
        expect(scope.letterToNumber("A-")).toBe(3.7);
    });

    it("should be 4",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "B";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(3.0);
    });

    it("should be 3",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "C";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(2.0);
    });

    it("should be 2",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "D";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(1.0);
    });

    it("should be 1",function() {
        scope.grade1 = scope.grade2 = scope.grade3 = "F";
        scope.credits1 = 5;
        expect(scope.calc()).toBe(0.0);
    });

    it("should be false", function(){
        expect(scope.isNumeric("A")).toBe(false);
    });

    it("should be true", function(){
        expect(scope.isNumeric(3)).toBe(true);
    });

    it("should be true", function(){
        expect(scope.isLetter("A")).toBe(true);
    });

    it("should be false", function(){
        expect(scope.isLetter("E")).toBe(false);
    });

    it("should be false", function(){
        expect(scope.isEmpty("s")).toBe(false);
    });

    it("should be true", function(){
        expect(scope.isEmpty("")).toBe(true);
    });

    it("should be error", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.credits1 = scope.credits2 = scope.credits3 = "J";
        scope.makeGPA();
        expect(scope.message).toBe("There was an error.");
    });

    it("should be error", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.makeGPA();
        expect(scope.message).toBe("An input is empty");
    });

    it("should be green", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.color()).toBe("good");
    });
    it("should be yellow", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "C";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.color()).toBe("okay");
    });

    it("should be red", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "F";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.color()).toBe("bad");
    });

    it("should be 4.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "A";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("4!");
    });

    it("should be 3.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "B";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("3!");
    });

    it("should be 2.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "C";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("2!");
    });

    it("should be 1.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "D";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("1!");
    });

    it("should be 0.0", function(){
        scope.grade1 = scope.grade2 = scope.grade3 = "F";
        scope.credits1 = scope.credits2 = scope.credits3 = 5;
        scope.makeGPA();
        expect(scope.getGPA()).toBe("0!");
    });

});