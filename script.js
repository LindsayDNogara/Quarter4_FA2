function myFunction() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 > 1 && num1 < 11 && num2 > 1 && num2 < 11) {
        var container = document.getElementById("myContainer");
        
        if (container.style.display === "none" || container.innerHTML === "") {
            container.style.display = "block";
            container.innerHTML = ""; 
            
            var table = document.createElement("table");
            table.border = "1";

            let c = 1;
            let d = 1;

            for (let a = 0; a < num1; a++) {
                let row = table.insertRow(a);
                for (let b = 0; b < num2; b++) {
                    let cell = row.insertCell(b);
                    cell.innerHTML = c * d;
                    c++;
                }
                c = 1;
                d++;
            }

            container.appendChild(table);
        } else {
            container.style.display = "none";
        }
    } else {
        alert("Please enter numbers between 2 and 10");
    }
}