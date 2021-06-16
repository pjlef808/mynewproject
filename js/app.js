// var entry = document.getElementById("entry").addEventListener('click', validateForm);

var row = 1;
  
function validateForm() {
        var a = document.getElementById("tId").value;
        var b = document.getElementById("tDesc").value;
        var c = document.getElementById("tStatus").value;
        var d = document.getElementById("tAssTo").value;
        var e = document.getElementById("tDate").value;

        var lenA = a.length;
        var lenB = b.length;
        var lenD= d.length;
        

        document.getElementById('tId').style.border =""; 
        document.getElementById('tDesc').style.border ="";
        document.getElementById('tStatus').style.border ="";  
        document.getElementById('tAssTo').style.border ="";  
        document.getElementById('tDate').style.border ="";  


        if ((a=="") || lenA < 6) {
        alert("Task Name of at least 5 characters to be entered");
            document.getElementById('tId').focus(); 
            document.getElementById('tId').style.border ="3px solid red"; 
            return false;
        } 
        else if ((b=="") || lenB < 6) {
                alert("Description of at least 5 characters to be entered");
                document.getElementById('tDesc').focus(); 
                document.getElementById('tDesc').style.border ="3px solid red"; 

                return false;
        } 
        else if (c=="") {
                alert('Status to be chosen');
                document.getElementById('tStatus').focus(); 
                document.getElementById('tStatus').style.border ="3px solid red";  
                return false;
        } 
        else if ((d=="") || lenD < 6 ) {
                alert("Assigned at least 5 characters to be entered");
                document.getElementById('tAssTo').focus(); 
                document.getElementById('tAssTo').style.border ="3px solid red";  
                return false;
        } 
        else if (e=="") {
                alert("Date to be entered");
                document.getElementById('tDate').focus(); 
                document.getElementById('tDate').style.border ="3px solid red";  
                return false;

        } else 
        // { alert ("validation successful");
               { 
                id = 'id' + performance.now()
                dup = 'id' + performance.now()

                console.log(id)
                console.log(id.replace('.','')) // sexy id
                console.log(id === dup) // false!

                var display = document.getElementById("display");
                var row = display.rows.length;
      
                var newRow = display.insertRow(row);
        
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);
        
        
                cell1.innerHTML= id;
                cell2.innerHTML = a;
                cell3.innerHTML = b
                cell4.innerHTML = c;
                cell5.innerHTML = d;
                cell6.innerHTML = e;

        
                row++;

                // return true;
                
            }
    
          }
              




