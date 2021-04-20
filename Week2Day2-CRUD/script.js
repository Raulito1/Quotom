function addRow() {
    var fName = document.getElementById("firstName");
    var mName = document.getElementById('middleName');
    var lName = document.getElementById('lastName');
    var mesa = document.getElementById('myTableData');
    var mesaLength = mesa.rows.length;
    var row = mesa.insertRow(mesaLength);


    document.getElementById("firstName").value="";
    document.getElementById('lastName').value="";
    document.getElementById('middleName').value="";

    row.insertCell(0).innerHTML = '<input type="button" value = "Delete" onClick="deleteRow(this)">';
    row.insertCell(1).innerHTML = fName.value;
    row.insertCell(2).innerHTML = mName.value;
    row.insertCell(3).innerHTML = lName.value;
}

function deleteRow(obj) {
    document.getElementById("row"+obj+"").outerHTML="";
}

