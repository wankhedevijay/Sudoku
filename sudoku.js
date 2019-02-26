function solveArray(inputValues) {
  var innerIndex, outerIndex, index;
  for ( innerIndex = 0; innerIndex <= 8; innerIndex++) {
    for ( outerIndex = 0; outerIndex <= 8; outerIndex++) {
      //check for legitimate values
      if (inputValues[innerIndex][outerIndex] != 0) {
        continue;
      }
      for ( index = 1; index <= 9; index++) {
        if (insert(inputValues, innerIndex, outerIndex, index) == true) {
          inputValues[innerIndex][outerIndex] = index;
          var b = solveArray(inputValues);
          if (b == true) {
            return true;
          }
          inputValues[innerIndex][outerIndex] = 0;
        }
      }
      return false;
    }
  }
  return true;
}
function insert(inputValues, innerIndex, outerIndex, index) {
    //check column and rows
  for (var a = 0; a <= 8; a++) {
    if (a != innerIndex && inputValues[a][outerIndex] == index) {
      return false;
    }
  }
  for (var a = 0; a <= 8; a++) {
    if (a != outerIndex && inputValues[innerIndex][a] == index) {
      return false;
    }
  }
  //check the 3 by 3 squares
  var y = Math.floor((innerIndex / 3)) * 3;
  var x = Math.floor((outerIndex / 3)) * 3;
  for (var a = 0; a < 3; a++) {
    for (var b = 0; b < 3; b++) {
      if (a != innerIndex && b != outerIndex && inputValues[y + a][x + b] == index) {
        return false;
      }
    }
  }
  return true;
}
function test() {
  var tempHolder = [];
  for (var innerIndex = 0; innerIndex < 81; innerIndex++) {
    //get the form values
    tempHolder[innerIndex] = document.form[innerIndex].value;
    var inputValues = [],
      outerIndex, index;
    // from 1 dimensional to inputValues
    for (outerIndex = 0, index = -1; outerIndex < tempHolder.length; outerIndex++) {
      if (outerIndex % 9 === 0) {
        index++;
        inputValues[index] = [];
      }
      inputValues[index].push(tempHolder[outerIndex]);
    }
  }
  solveArray(inputValues);
  var solved = [];
  for (var innerIndex = 0; innerIndex < inputValues.length; innerIndex++) {
    for (var outerIndex = 0; outerIndex < inputValues[innerIndex].length; outerIndex++) {
      solved.push(inputValues[innerIndex][outerIndex]);
      //make a one dimensional array from  solved inputValues;
    }
  }
  for (var z = 0; z < solved.length; z++) {
    document.form[z].value = solved[z];
    //display the solved sudoku numbers 
  }
}
function putValue() {
  var valueArray = [];
  while(valueArray.length < 9){
    var r = Math.floor(Math.random()*10) + 1;
    if(valueArray.indexOf(r) === -1 && r != 0 && r != 10){
      valueArray.push(r);
    }
  }

  console.log(valueArray);
}
putValue();
//====================================================================

/*function resetValue() {
  let outerIndex = 0;
  let innerIndex = 0;
  var cellArray = [
    [cell0,cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8],
    [cell9,cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17],
    [cell18,cell19,cell20,cell21,cell22,cell23,cell24,cell25,cell26],
    [cell27,cell28,cell29,cell30,cell31,cell32,cell33,cell34,cell35],
    [cell36,cell37,cell38,cell39,cell40,cell41,cell42,cell43,cell44],
    [cell45,cell46,cell47,cell48,cell49,cell50,cell51,cell52,cell53],
    [cell54,cell55,cell56,cell57,cell58,cell59,cell60,cell61,cell62],
    [cell63,cell64,cell65,cell66,cell67,cell68,cell69,cell70,cell71],
    [cell72,cell73,cell74,cell75,cell76,cell77,cell78,cell79,cell80]
  ];
  var valueArray = [];
  while(valueArray.length < 9){
    var r = Math.floor(Math.random()*10) + 1;
    if(valueArray.indexOf(r) === -1 && r != 0 && r != 10){
      valueArray.push(r);
    }
  }
  for (outerIndex = 0; outerIndex < 9; outerIndex++){
    for (innerIndex = 0; innerIndex < 9; innerIndex++){
      
    }
  }
  for (outerIndex = 0; outerIndex < 9; outerIndex++){
    for (innerIndex = 0; innerIndex < 9; innerIndex++){
      document.getElementById(cellArray[innerIndex][outerIndex]).value = valueArray[innerIndex][outerIndex];
    }
  }

}*/