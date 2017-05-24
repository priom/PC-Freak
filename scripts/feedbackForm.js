//feedbackForm.js
//In the previous version of our website, the actual validation
//was shifted to the pattern attribute of the input elements in
//the HTML file, so all this script had to do was report that all
//went well and, if the user requested an e-mail reply, report
//as well that e-mail feedback report confirmation was yet available.

//In the current version of the website, not even those two actions
//are necessary, since if all went well the data is sent to the 
//server and is processed there, including the sending of emails,
//since that feature is now active and the confirmation is sent
//back to the user from the server.

//In short, we include this file (with this explanataion) only to
//avoid any confusion about why it had "disappeared".

//Of course, validation should also take place on the server to
//be doubly sure that nothing is amiss with the submitted data,
//but for the sake of conciseness we omit that step and validate
//only on the client side.




/*

function feedbackFormValidate()
{
    var contactFormObj = document.getElementById("contact");
    var firstName = contactFormObj.firstName.value;
    var lastName = contactFormObj.lastName.value;
    var phone = contactFormObj.phone.value;
    var email = contactFormObj.email.value;
    var everythingOK = true;
    
    if ((!validateName(firstName)) && (!validateName(lastName)) && (!validatePhone(phone)) && (!validateEmail(email)))
    {
      alert("Error: Please fill out all the fields.");
      everythingOK = false;
    }
    else if ((!validateName(firstName)) && (!validateName(lastName)) && (!validatePhone(phone)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;
    }

    else if ((!validateName(firstName)) && (!validateName(lastName)) && (!validateEmail(email)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;

    }
    
    else if ((!validateName(firstName)) && (!validateEmail(email)) && (!validatePhone(phone)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;

    }
    
    else if ((!validateName(lastName)) && (!validateEmail(email)) && (!validatePhone(phone)))
    {
        alert("Error: Please fill out the fields");
        everythingOK = false;
    }
    
    else if ((!validateName(firstName)) && (!validateName(lastName)))
    {
        alert("Error: Please fill out first and last name.");
        everythingOK = false;

    }
    
    else if ((!validatePhone(phone)) && (!validateEmail(email)))
    {
      alert("Error: Please fill out phone and email");
      everythingOK = false;
    }
    
    else
    {
      if (!validateName(firstName))
      {
          alert("Error: Invalid first name.");
          everythingOK = false;
      }
      
      if (!validateName(lastName))
      {
          alert("Error: Invalid last name.");
          everythingOK = false;
      }
      
      if (!validatePhone(phone))
      {
          alert("Error: Invalid phone number.");
          everythingOK = false;
      }
      
      if (!validateEmail(email))
      {
          alert("Error: Invalid e-mail address.");
          everythingOK = false;
      }
    }
    
    
    if (everythingOK)
    {
        if (contactFormObj.reply.checked)
            alert("Warning: The e-mail feature is currently not supported.")
        alert("All the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
        return true;
    else
        return false;
}

function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}
*/

