//sqauring a given number
function squared(num){
        return num*num;
}
//getting the cube of a number function
function cube(num){
        return num*num*num;
}

//function for the factorial of a number
function factorial(num){
     let x= num;
     for(let i = 1; x>i; x--){
         num *= x-1;
     }
     return  num;
}

//changing the string at every even index to uppercase
 function convert(myString){                                   
     var con = myString.length;
     var i,c,txt='';
     for(i=0; i<con; i++){
        c = myString[i];
        if(i%2 ==0){
            c = c.toUpperCase();
        }
        txt += c;
     }
     return txt;
 }

 //generating a random number function

  function random(number){
      return Math.floor(Math.random()*(number+1));
  }

  //function for cube of an array

   function map(f,a){
       let i;
       let result=[];
        for(i=0; i!=a.length; i++){
            result[i]=f(a[i]);
            return result;
        }
   }

    const f = function(x){
        return x*x*x;
    }

    let numbers = [0,1,2,3,4];
    let cube = map(f,numbers);

    //fuction for multiplying an array elements with the length of the array

    function multiplyByLength(arr) {
        return arr.map(x => x * arr.length);
    }

    //function to find the max and min number in an array

    function Disp_Maxnum(arr){
        return  Math.max(...arr);
    }
    function Disp_Minnum(arr){
        return Math.min(...arr);
    }

    //function to check whether every element in an array is an even number,where the array is arr

    function checkAllEven(arr) {
        function x(currentValue) {
      return currentValue % 2 === 0;
    }
      return arr.every(x)
    }

    //function to negate an array

    function negate(arr){
        return arr.map(x=>-x);
    }
    //function to round up a division to the nearest hundredth

     function roundUp(bs,cs){
         let num;
         num = bs/cs;
         return num.toFixed(2);
     }

     //function to test for white space

     // find min in an arr

      function findM(arr){
          let ransom;
          ransom = arr[0];
          for(let i=0; i<arr.length; i++){
              if(arr[i]<ransom){
                  ransom = arr[i];
              }
              return ransom;
          }
      }

      //function to return the first and last element i an array

      function firstLast(arr) {
        return [arr.shift(), arr.pop()];
    }
    //function to reverse a string
    function reverse(str) {
        let q = str.split("");
      return q.reverse().join("");
  }
  //function to print out the even number in an array
  function noOdds(arr) {
    return arr.filter(x => x % 2 === 0);
  }

  //function to reverses all the words in a sentence that start with a particular letter.
  function specialReverse(s, c) {
	return s.split(" ")
		.map(x => x[0]== c ? x.split("").reverse().join(""):x)
		.join(" ");
}


//function to extract a part in a string

  function extract(str){
      return str.slice(num1,num2);
  }

  // function to return the number of elements in an array even nested arrays
  function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}

// fabonacci code

  function fab(num){
      let res=[];
      let x,y=0;
      for(let i=0; i!=num; i++){
          y+=i;
          res[i]=y;
      }
  }

//function to return the min and max of a given number

 function returnNo(min,max){
     return Math.floor(Math.random()*(max-min+1))+min;
 }

 //function for creating an image slider

    var images = [
        'first img',
        'sec img',
        'third img'
    ];
    var num=0;
       function next(){           //this will be passed as an onclick DOM event(for the next image) in HTML document
         var img = document.getElementById("slide");   //the image tag id
        num++;
        if(num>=images.length){
            num=0;
        }
         img.src = images[num];
       }

         function prev(){                   //passed also as DOM manipulation for the prev image
             var img = document.getElementById("slide");   //the img tag id
            num--;
            if(num< indexOf(images[0])){
                num = images.length-1;
            }
            img.src =imgages[num];
         }

         
         //return an array in random order

         var points = [40, 100, 1, 5, 25, 10];
      points.sort((a, b)=>{return 0.5 - Math.random()});

         //function to check for prime numbers
         function isPrime(n){
            if(n<=1){
                return false;
            }
             for(let i=2; i<n; i++){
                 if(n%i==0){
                     return false
                 }
             }
             return true
        }

          console.log(isPrime(23));

          //function that counts the multiple of a number that isnt prime
          function primeFact(n){
            while(n%2==0){
                console.log(2);
                n=n/2;
            }
            for(let i=3; i*i<=n; i=i+2){
                while(n%i==0){
                    console.log(i);
                    n = n/i;
                }
            }
            if(n>2){
                console.log(n);
            }
        }

        primeFact(100); // output '2''2''5''5'

        //program to count the index char of a string
        function chrcnt(str,chr){
            var keep = str.indexOf(chr);
            var cnt=0;
           while(keep!==-1){
               cnt++;
               pos = str.indexOf(chr,pos+1);
           }
         return cnt;
        }

//function to calculate the sum in an array(using recursion)
         function sumarr(arr){
             let cnt=0;
             arr.forEach(items =>{
                 if(Array.isArray(items)){
                     sumarr(items);
                 }
                 cnt+=items;
             })
             return cnt;
         }


//function to reverse a string withoout using the string object reverse method

function reverseWord(str) {
     var reversed = "" ;
     for (var i = str.length - 1 ; i >= 0 ; i-- ) {
     reversed += str.charAt(i);
     }
     return reversed;
     }
    
     //Used for encrypting and decrypting
     function modInverse(e,phi){
        var mo = phi,t,q;
        var xo = 0,x1 =1;

        if(phi==1){
            return 0;
        }
        while(e>1){
            //q is quotient
            q = Math.floor(e/phi);
            t=phi;

            phi=e%phi,e=t;

            t=xo;
            xo = x1-q*xo;
            x1=t;
        }
        //make x1 positive
        if(x1<0){
            x1+=mo;
        }
        return x1;
    }
   
    //function to test for a value in an array

    function testarr(section){
        return section.includes(value);
    }
    //function to count the number of vowel occurrence in a string
    function countVowels(str) {
        return str.match(/[aeiou]/gi).length;
      }

    // code to convert a number to an array 
    Array.from(n.toString()).map(Number);
                    //or
 (num).toString(10).split("").map(Number);

 //function to remove duplicate characters in a string

 function removedupchar(string){
     return string.split('').filter(function(item,pos,self){
         return self.indexOf(item)==pos;
     }).join('');
 }


 
//returnin set of unique elements in an array
function longest(s1, s2) {
    // your code
    
    /*var st1 = s1.split('').sort().join('');
    var st2 = s2.split('').sort().join('');*/
    
    var cct = s1.concat(s2);
    var sorted = cct.split('').sort();
     var clean =[...new Set(sorted)];
    return clean.join('');
  }
                //OR
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


// code wars way to format an array of numbers to a string of phone  number😫😩😩😩
 
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  /*Mad nice algorithm to reduce numbers into a single number by addition e.g 123-->1+2+3->6  */
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

  //Function to cnt the number of character occurrence in a string(Wise code)
  function charCount(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}