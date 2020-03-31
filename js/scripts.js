//someFunction (countBy, endAt) {
//  
//}

                                          
//                [0]  [1] [2]  [3] [4] [5] [6] [7] [8] [9]
// firstVerion = ["1", "2", "3","4","5","6","7","8","9","10"]

//                   |    |   |
//                  [0]  [1] [2]  [3] [4] [5] [6] [7] [8] [9]
// secondVersion = ["1", "2", "3","4","5","6","7","8","9","10"]
//                   i*3  i*3 i*3

// buildAnArray()
// for (i = 0; i < someLength; i++)
//   array.push([])
// }

$(document).ready(function() {
  $("form#numberInputs").submit(function(event) {
    event.preventDefault();
  
    var countByValue = parseInt($("#input1").val());
    var endAtValue = parseInt($("#input2").val());

    // var iteratorMax = Math.floor(endAtValue / countByValue);

    // for (i = 0; i < iteratorMax; i++){
    //   outputValue = i*countByValue;
    //   $("#output").append("<li>" + outputValue + "</li>");
    // }


 

   for (i = countByValue; i <= endAtValue; i += countByValue) {
     $("#output").append("<li>" + i + "</li>");
    }



  }); //end submit

});
