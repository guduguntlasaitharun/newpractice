let employees = [
    { id: 101, name: "Rahul", sal: 45000 },
    { id: 102, name: "Sonia", sal: 55000 },
    { id: 103, name: "priyanka", sal: 65000 },
    
  ];
function displayData()
{
    let rows="";
    for(i=0;i<=employees.length-1;i++){
        rows=
           rows+
           `<tr>
               <td> ${employees[i].id}  </td>
               <td> ${employees[i].name} </td>
               <td> ${employees[i].sal} </td>
            </tr>`;
    }
    document.getElementById("abc").innerHTML=rows;
}