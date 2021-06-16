// var entry = document.getElementById("entry").addEventListener('click', validateForm);
const taskManager = new TaskManager(0);
const newTaskForm = document.querySelector('#newTaskForm');
var row = 1;
  
function validateForm() {
// newTaskForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
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
        
                // row++;

                taskManager.addTask(a, b, c, d, e);
                // return true;

                   // Render the tasks
                taskManager.render();

                a.value = '';
                b.value = '';
                d.value = '';
                e.value = '';
                
                document.getElementById("tId").value = "";
                document.getElementById("tDesc").value = "";
                document.getElementById("tStatus").value = "1";
                document.getElementById("tAssTo").value = "";
                document.getElementById("tDate").value = "";
        
            }
    
          }



        //   fp.addEventListener('input', e => {
        //         if (fp.validity.rangeOverflow) {
        //           fp.setCustomValidity('Custom message: greater than 100 not allowed.');
        //         } else {
        //           fp.setCustomValidity('');
        //         }
        //       })
              




