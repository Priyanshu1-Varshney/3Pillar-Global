function addRow() {
    var myfName = document.getElementById("fname");
    // var mylname = document.getElementById("lname");
    var myCountry = document.getElementById("country");
    var myScore = document.getElementById("score");
    var table = document.getElementById("myTableData");
    if (
      myfName.value == "" ||
      // mylname.value == "" ||
      myCountry.value == "" ||
      myScore.value == ""
    ) {alert("All fields are manadatory") 
     } else{
     
     
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = myfName.value;
    // row.insertCell(1).innerHTML = mylname.value;
    row.insertCell(1).innerHTML = myCountry.value;
    row.insertCell(2).innerHTML = myScore.value;
    row.insertCell(3).innerHTML =
      '<i class="fa fa-trash" onClick="Javacsript:deleteRow(this)" ></i>';
    row.insertCell(4).innerHTML =
      "<button onClick='Javacsript:substractScore(this)' class='badge badge-info'>-5</button>";
    row.insertCell(4).innerHTML =
      "<button onClick='Javacsript:increaseScore(this)' class='badge badge-info;''>+5</button>";
     
   
     }

    document.getElementById("fname").value="";
    // document.getElementById("lname").value="";
    document.getElementById("country").value="";
    document.getElementById("score").value="";
  }
  function substractScore(obj) {
    var scoreTd = obj.parentNode.parentNode.getElementsByTagName("TD")[2];
    scoreTd.innerHTML = Number(scoreTd.innerHTML) - 5;
  }
  function increaseScore(obj) {
    var scoreTd = obj.parentNode.parentNode.getElementsByTagName("TD")[2];
    scoreTd.innerHTML = Number(scoreTd.innerHTML) + 5;
  }

  function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
  }