/*var zipcodepattern = /^\d{5}$/;
 var zipcode = zipcodepattern.exec(prompt('Enter ZIP code:'));
 if(zipcode !=null)
 {
     alert('Valid ZIP Code');
     alert('Regular Expression Pattern: ' + zipcodepattern.source);
 }

 else{
     alert('Invalid ZIP Code-Format xxxxx.');
 }

 var calc = eval(prompt('please enter a simple calculation to be made:' ));
 var res;
   if(calc != null){
       if(calc<100){
           alert('calculations were successful!  answer=' + calc + ".");
        
       }
       else
       {
           alert('error in calculating');
       }
   }
   else
   {
       alert('error inputting!')
   }

   function factorial(num){
       if(num==0){
           return 0;
       }
       else if(num==1){
           return 1;
       }
       else{
           var result=num;
           while(num>1){
               result = result * (num-1);
               num--
           }
           return result;
        }
    }

    var num= prompt('Enter number:','');
    var result = factorial(num);
    alert('Factorial of '+num+' is' +result+ '.')

*/
 /*var app = angular.module('myApp',[]);
  app.controller('namesCtrl',function($scope){
   $scope.names=[
       {name:'damola',country:'norway'},
       {name:'johnny',country:'new zealand'}
   ];
   $scope.persons=[
       {name:'ife',country:'egypt'},
       {name:'elijouns',country:'saudi arab'}
   ];
  });


  var secapp = angular.module('myApp',[]);
  secapp.controller('namesCtrl',function($scope){
        $scope.name = "funke";
  });*/
/*
  angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
});*/

 /* var app= angular.module('myApp',[]);

  app.controller('myCtrl',function($scope,$interval){
      $scope.theTime = new Date().toLocaleTimeString();  // this sets the time from the date method to the $scope.theTime variable
      $interval(function(){
          $scope.theTime = new Date().toLocaleTimeString(); //assigns the interval of the time to count every 1 sec
      },1000);
  })*/

  /*
  var app= angular.module('myApp',[]);
  app.controller('myCtrl',function($scope,$http){
    $http({
        method:"GET",
        url: "welcome.htm"
    }).then(function mySuccess(response){
        $scope.myWelcome = response.data;
    },function myError(response){
        $scope.myWelcome= response.statusText;
    });
  });*/


   /*  var app = angular.module('myApp',[]);
     app.controller('myCtrl',function($scope){
         $scope.cars = [{model:"volvo",color:"black"},
                        {model:"lexus",color:"white"},
                        {model:"bugatti",color:"silver"}
        ]
        $scope.count=0;
     });*/

      /*var app = angular.module('myApp',[]);
      app.controller('myCtrl',function($scope){
        $scope.master = {firstName:"John",lastName:"Doe"};
        $scope.reset = function(){
            $scope.user = angular.copy($scope.master);
        };
        $scope.reset(); 
      });*/

    /*  var app = angular.module('myApp',[]);
      app.directive('myDirective',function(){
          return{
              require: 'ngModel',
              link:function(scope,element,attr,mCtrl){
                  function myValidation(value){
                      if(value.indexOf("e")>-1){
                          mCtrl.$setValidity('charE',true);
                      }
                      else{
                          mCtrl.$setValidity('charE',false);
                      }
                      return value;
                  }
                  mCtrl.$parsers.push(myValidation);
              }
          };
      })
*/
         
     // loops and arrays
 