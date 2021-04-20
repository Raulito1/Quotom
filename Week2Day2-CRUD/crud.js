
function addRow() {

    // grabbing the elements by Id and storing them in a var 

    var fName = document.getElementById("firstName");
    var mName = document.getElementById("middleName");
    var lName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var addy = document.getElementById("address");
    var dob = document.getElementById("dateOfBirth");
    var citi = document.getElementById("city");
    var estado = document.getElementById("state");
    var codigo = document.getElementById("zipCode");
    var table = document.getElementById("myTableData");

    //  var rowCount - created using the .rows API to return a live HTMLCollection of all rows in the table
    // and using the length property is used to return the length of my row content
    var rowCount = table.rows.length;
    // insertRow() inserts a new row (<tr> ) in a given table with the rowCount var as the value
    var row = table.insertRow(rowCount);
    // first row is used to create a delete button when new row is created
    // the rest of the rows are created using innerHTML and the value
    row.insertCell(0).innerHTML = '<input type="button" value = "Delete" onClick="deleteRow(this)">';
    row.insertCell(1).innerHTML = fName.value;
    row.insertCell(2).innerHTML = mName.value;
    row.insertCell(3).innerHTML = lName.value;
    row.insertCell(4).innerHTML = email.value;
    row.insertCell(5).innerHTML = addy.value;
    row.insertCell(6).innerHTML = dob.value;
    row.insertCell(7).innerHTML = citi.value;
    row.insertCell(8).innerHTML = estado.value;
    row.insertCell(9).innerHTML = codigo.value;
    row.insertCell(10).innerHTML = '<input type="button" value = "Edit" onClick="editRow(this)">';

    

}
// function created with a parameter (obj) to delete the row created
function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}
// function used to clear the table fields  once clicked on the clear button
function clearThis() {
    document.getElementById('firstName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('dateOfBirth').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zipCode').value = '';
}

function editRow(obj) {

    var fName = document.getElementById("firstName" + obj);
    var mName = document.getElementById("middleName" + obj);
    var lName = document.getElementById("lastName" + obj);
    var email = document.getElementById("email");
    var addy = document.getElementById("address");
    var dob = document.getElementById("dateOfBirth");
    var citi = document.getElementById("city");
    var estado = document.getElementById("state");
    var codigo = document.getElementById("zipCode");

    var name_data = fName.innerHTML;
    var lname_data = lName.innerHTML;
    var mName_data = mName.innerHTML;

    fName.innerHTML="<input class='name' type='text' id='firstName' value='"+name_data+"'>";


}

