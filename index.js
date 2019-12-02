function addRow(){
        var fname=document.getElementById('fname').value;
        var lname=document.getElementById('lname').value;
        var age=document.getElementById('age').value;
       
       
        
        var table=document.getElementsByTagName('table')[0];
        var newRow=table.insertRow(table.rows.length);

        var c1=newRow.insertCell(0);
        var c2=newRow.insertCell(1);
        var c3=newRow.insertCell(2);
        var c4=newRow.insertCell(3);
        

        c1.innerHTML=Date();
        c2.innerHTML=fname;
        c3.innerHTML=lname;
        c4.innerHTML=age;
        
//clear
     document.getElementById('date').value='';
     document.getElementById('fname').value='';
     document.getElementById('lname').value='';
     document.getElementById('age');
     
}


