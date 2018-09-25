var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function  addElementToBeginningOfArray(array, element){
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array = array.unshift(element);
   return array;
}

function addElementToEndOfArray(){
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(){
   array = array.push(element);
   return array;
}

function accessElementInArray(array, index){
  array = array[index];
  return array;
}
