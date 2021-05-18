/*let sequence = new Array(5);

  for(let i=0; i<sequence.length; i++){
      sequence[i] = parseInt(prompt('enter a number to be stored:'));
  }
     for(i=0; i<sequence.length; i++){
         document.write("<ul><li>"+sequence[i]+"</li></ul>");
     }

        let myArray = ["rotweiler","pitbull","german-shepard"];
            myArray.toString();

            document.write("<h2>"+myArray+"</h2>");

     let numbers = [1,2,3,4,5,6];

       for(let i=0; numbers[i]<number[5]; i++){
           let removed = numbers.unshift();

            document.write("<h2>"+numbers[i]+"</h2>")
       }

       document.createElement('ul').className = 'output';
       document.createElement('input');
       document.createElement('button');

       const list = document.querySelector('.output ul');
       const searchInput = document.querySelector('.output input');
       const searchButton = document.querySelector('.output button');

      

      let myHistory = [];

       searchButton.addEventListener('click',function(){
           //we will only allow a term to be searched if the input isnt empty
            if(searchInput.value !== ''){
                myHistory.unshift(searchInput.value);

                //empty the list so that it doesnt show any duplicate entries
                //the display is regenerated everytime a search term is entered.
                list.innerHTML = '';

                for(let i=0; i<myHistory.length; i++){
                   var itemText = myHistory[i];
                    const listItem = document.createElement('li');
                    listItem.textContent = itemText;
                    list.appendChild(listItem);
                }
                //if the array length is 5 or more, remove the oldest search term

                if(myHistory.length>=5){
                    myHistory.pop();
                }

                //empty the search input and focus it ready for the next term to be searched

                searchInput.value = '';
                searchInput.focus();    
            }
       });
       */
      let myString;

    myString = 'i love string';

    let newString = myString.replace('string','sausage');

   document.write("<h2>"+newString+"</h2>");
         
    

         