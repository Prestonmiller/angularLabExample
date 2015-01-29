var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "GPA Calculator", link: '/calc'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "animal"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });
//============================Calc========================
    mainApp.controller('calcCtrl', function($scope){
        console.log("controller loaded!");

        $scope.grade1 = "";
        $scope.grade2 = "";
        $scope.grade3 = "";
        $scope.credits1 = "";
        $scope.credits2 = "";
        $scope.credits3 = "";
        $scope.gpa = "";

        $scope.getGPA = function(){

        }

        $scope.isNumeric = function(arg1){
            return !isNaN(parseFloat(arg1));
        }

        $scope.calc = function(){
            return (Number($scope.letterToNumber($scope.grade1))*Number($scope.credits1)+Number($scope.letterToNumber($scope.grade2))*Number($scope.credits2)+Number($scope.letterToNumber($scope.grade3))*Number($scope.credits3))/(Number($scope.credits1)+Number($scope.credits2)+Number($scope.credits3));
        }

        $scope.letterToNumber = function(course) {
            switch (course.toUpperCase()) {
                case "A":
                    return 4;
                case "A-":
                    return 3.7;
                case "B":
                    return 3;
                case "B+":
                    return 3.3;
                case"B-":
                    return 2.7;
                case "C":
                    return 2;
                case "C+":
                    return 2.3;
                case "C-":
                    return 1.7;
                case "D":
                    return 1;
                case "D+":
                    return 1.3;
                default:
                    return 0;
            }
        }
        $scope.isLetter = function(course) {
            switch (course.toUpperCase()) {
                case "A":

                case "A-":

                case "B":

                case "B+":

                case"B-":

                case "C":

                case "C+":

                case "C-":

                case "D":

                case "D+":

                case "F":
                    return true;
                default:
                    return false;
            }
        }

    });
