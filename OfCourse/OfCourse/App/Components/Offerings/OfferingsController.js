var app = angular.module('ofCourse');

app.controller('OfferingsController', ['$scope', function ($scope) {
  
 
        $scope.courses =
        [{
            "department": "CSC",
            "number": 3102,
            "name": "Advanced Data Structures and Algorithm Analysis",
            "location": "Tureaud Hall",
            "startTime": "1:30",
            "endTime": "2:50",
            "days" : "TTH",
            "professor": "Kooima R",
            "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
        },
        {
            "department": "CSC",
            "number": 1200,
            "name": "Ethics in Computing",
            "location": "Tureaud Hall",
            "startTime": "10:30",
            "endTime": "11:20",
            "days": "W",
            "professor": "Busch K",
            "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
        },
        {
            "department": "CSC",
            "number": 4330,
            "name": "Software Systems Development",
            "location": "Tureaud Hall",
            "startTime": "5:00",
            "endTime": "6:30",
            "days": "MW",
            "professor": "Mahmoud A",
            "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
        },
         {
             "department": "MATH",
             "number": 1550,
             "name": "Calculus",
             "location": "Lockett Hall",
             "startTime": "5:30",
             "endTime": "6:30",
             "days": "MTWTH",
             "professor": "Terri W",
             "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
         },
          {
              "department": "ENGL",
              "number": 2000,
              "name": "English Composition",
              "location": "Tureaud Hall",
              "startTime": "3:00",
              "endTime": "4:30",
              "days": "TTH",
              "professor": "Mahmoud A",
              "description": "Prereq.: CSC 1254 or CSC 1351 and credit or concurrent enrollment in CSC 2259 or EE 2740. Description and utilization of formal ADT representations, especially those on lists, sets and graphs; time and space analysis of recursive and nonrecursive algorithms, including graph and sorting algorithms; algorithm design techniques."
          }];
}]);