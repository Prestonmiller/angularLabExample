var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'}
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


        $scope.calc = function(course1,credits1,course2,credits2,course3,credits3){
            return (Number(letterToNumber(course1))*Number(credits1)+Number(letterToNumber(course2))*Number(credits2)+Number(letterToNumber(course3))*Number(credits3))/(Number(credits1)+Number(credits2)+Number(credits3));
        }

        var letterToNumber = function(course) {
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

    });
