function resetValue () {
  var arr = [];
  var arr2D = [[]];
  //document.write(arr);
  var cellArray = [
    ['cell0','cell1','cell2','cell3','cell4','cell5','cell6','cell7','cell8'],
    ['cell9','cell10','cell11','cell12','cell13','cell14','cell15','cell16','cell17'],
    ['cell18','cell19','cell20','cell21','cell22','cell23','cell24','cell25','cell26'],
    ['cell27','cell28','cell29','cell30','cell31','cell32','cell33','cell34','cell35'],
    ['cell36','cell37','cell38','cell39','cell40','cell41','cell42','cell43','cell44'],
    ['cell45','cell46','cell47','cell48','cell49','cell50','cell51','cell52','cell53'],
    ['cell54','cell55','cell56','cell57','cell58','cell59','cell60','cell61','cell62'],
    ['cell63','cell64','cell65','cell66','cell67','cell68','cell69','cell70','cell71'],
    ['cell72','cell73','cell74','cell75','cell76','cell77','cell78','cell79','cell80']
  ];
  for(var i = 0; i < 9; i++ ){
    for(var j = 0; j < 9; j++ ){
      var r = Math.floor(Math.random()*10) + 1;
      if(arr2D.indexOf(r) === -1 && r != 0 && r != 10){
        arr2D[i][j] = r;
      }
    }
  }
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      //document.write(cellArray);
    }
  }
  console.log(arr2D);
}
resetValue();