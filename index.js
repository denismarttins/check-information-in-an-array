//Javascript

function exist(array,number){
  let check = array.indexOf(number);
  if (check != -1){
    return true;
  }
  else {
    return false;
  }
};

let testing = exist([1,2,3,4,5],5);
//true

let testingAgain = exist([1,2,3,4,5],6);
//false

/* This function tests if the number put at 'number' attribute is inside of array */
