import { savePost, getPost, deletePost } from "./index.js";
import {validateForm} from "./validate.js"

var customers;

document.body.onload = async function () {

    document.forms[0].addEventListener("submit", async function submitForm(e) {
        e.preventDefault();

        if(validateForm()){
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let email = document.querySelector("#email").value;
        let mobile = document.querySelector("#mobile").value;
        let body = {
            firstName,
            lastName,
            email,
            mobile
        };
        let createdPost = await savePost(body);
        let {id} = createdPost;
        alert(`Customer added successfully with id: ${id}`);
    }
    });

    
    async function deleteCurrentClick(id) {
        let res = await deletePost(id);
    }

    customers = await getPost();

    if (customers.length == 0) {
        document.getElementById("customersTable").style.display = "none";

        document.getElementById("customers").innerHTML = "No customers to display";
    } else {
        var table = document.getElementById("customersTable");

        for (let i = 0; i < customers.length; i++) {

            let tr = document.createElement("tr");

            let td_ID = document.createElement("td");
            td_ID.textContent = customers[i].id;
            tr.appendChild(td_ID);
            

            let td_FirstName = document.createElement("td");
            td_FirstName.textContent = customers[i].firstName;
            tr.appendChild(td_FirstName);
            td_FirstName.style.color = "#0087ed";

            let td_LastName = document.createElement("td");
            td_LastName.textContent = customers[i].lastName;
            tr.appendChild(td_LastName);
            td_LastName.style.color = "#0087ed";


            let td_Email = document.createElement("td");
            td_Email.textContent = customers[i].email;
            tr.appendChild(td_Email);
            td_Email.style.color = "#0087ed";


            let td_Mobile = document.createElement("td");
            td_Mobile.textContent = customers[i].mobile;
            tr.appendChild(td_Mobile);
            td_Mobile.style.color = "#0087ed";


            let td_Button = document.createElement("input");
            td_Button.setAttribute("type", "button");
            td_Button.setAttribute("value", "  DELETE  ")
            td_Button.setAttribute("id", customers[i].id);
            td_Button.style.backgroundColor = "#ff0000";
            td_Button.style.borderColor = "#ff0000"
            td_Button.style.borderBottomLeftRadius = "10px";
            td_Button.style.borderTopLeftRadius = "10px";
            td_Button.style.borderTopRightRadius = "10px";
            td_Button.style.borderBottomRightRadius = "10px";
            td_Button.style.marginTop = "8px";
            td_Button.style.color = "white";
            
            
            td_Button.onclick = deleteCurrentClick.bind(null, customers[i].id);
            tr.appendChild(td_Button);

            table.appendChild(tr);
        }
    }


}