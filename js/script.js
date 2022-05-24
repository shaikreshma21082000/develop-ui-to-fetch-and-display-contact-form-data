// put validation code here

var contacts=[];
let flag=0;
function submitContact(event)
{   
    event.preventDefault();
    let formData= document.querySelector("form");
    console.log(formData);
    let contact=Object.fromEntries(new FormData(formData));
    let result = submitContacts(contact);
    if(result==true)
      httpClient.post("http://localhost:3000/contacts",contact).then(response=>{console.log(response);}).catch(err=>{console.log(err);});
    return result;
}
httpClient.get("http://localhost:3000/contacts").then((response)=>{console.log(response);}).catch(err=>{console.log(err)});

const submitContacts = (contact) => {
    let errors={};
    if (flag==0){
         errors = {
            firstNameError:validateName(contact.firstname),
            lastNameError:validateName(contact.lastname),
            emailError:validateEmail(contact.email),
            homeNoError:validatePhone(contact.homeNo),
            workNoError:validatePhone(contact.workNo),
            birthdateError:validateDob(contact.birthdate),
            companyError:validateCompany(contact.company),
            jobTitleError:validateJobTitle(contact.jobTitle),
            notesError:validateNotes(contact.notes)
        };
    }
    else if (flag==1){
        errors = {
            firstNameError:validateName(contact.firstname),
            lastNameError:validateName(contact.lastname),
            emailError:validateEmail(contact.email),
            homeNoError:validatePhone(contact.homeNo),
            workNoError:validatePhone(contact.workNo),
            additionalContactNoError1:validatePhone(contact.additionalContactNoError1),
            birthdateError:validateDob(contact.birthdate),
            companyError:validateCompany(contact.company),
            jobTitleError:validateJobTitle(contact.jobTitle),
            notesError:validateNotes(contact.notes)
        };
    }
    else{
         errors = {
            firstNameError:validateName(contact.firstname),
            lastNameError:validateName(contact.lastname),
            emailError:validateEmail(contact.email),
            homeNoError:validatePhone(contact.homeNo),
            workNoError:validatePhone(contact.workNo),
            additionalContactNoError1:validatePhone(contact.additionalContactNoError1),
            additionalContactNoError2:validatePhone(contact.additionalContactNoError2),
            birthdateError:validateDob(contact.birthdate),
            companyError:validateCompany(contact.company),
            jobTitleError:validateJobTitle(contact.jobTitle),
            notesError:validateNotes(contact.notes)
        };

    }

    let errorMessages=Object.values(errors).filter(oneerror=>oneerror!=='');
    
    if(errorMessages.length===0){
       contacts.push(contact);
       return true;
    }
    else {
        displayValidationList(errorMessages);
        displayValidationErrorMsg(errors);
        return false;
    }
   

}

function displayValidationList(errorMessages){
    let list = '';
    errorMessages.map(e =>`<ul><li>${e}</li></ul>`).forEach(item => {
        list += item;
    });
    document.getElementsByTagName('ul')[0].innerHTML = list;
}

function displayValidationErrorMsg(errors){
  if(flag==0){
    if(errors.firstNameError.localeCompare("")!=0)
    document.getElementById('firstNameError').innerText = "*";
  else
    document.getElementById('firstNameError').innerText = errors.firstNameError;

  if(errors.lastNameError.localeCompare("")!=0)
    document.getElementById('lastNameError').innerText ="*" ;
  else
    document.getElementById('lastNameError').innerText = errors.lastNameError;

  if(errors.emailError.localeCompare("")!=0)
    document.getElementById('emailError').innerText ="*" ;
  else
    document.getElementById('emailError').innerText = errors.emailError;

  if(errors.homeNoError.localeCompare("")!=0)
    document.getElementById('homeNoError').innerText ="*" ;
  else
    document.getElementById('homeNoError').innerText = errors. homeNoError;

  if(errors.workNoError.localeCompare("")!=0)
    document.getElementById('workNoError').innerText="*" ;
  else
    document.getElementById('workNoError').innerText = errors.workNoError;

  if(errors.birthdateError.localeCompare("")!=0)
     document.getElementById('birthdateError').innerText ="*" ;
  else
     document.getElementById('birthdateError').innerText = errors.birthdateError;
    
  if(errors.companyError.localeCompare("")!=0)
    document.getElementById('companyError').innerText = "*";
  else
    document.getElementById('companyError').innerText=errors.companyError;

  if(errors.jobTitleError.localeCompare("")!=0)
    document.getElementById('jobTitleError').innerText = "*";
  else
  document.getElementById('jobTitleError').innerText = errors.jobTitleError;
  
  if(errors.notesError.localeCompare("")!=0)
    document.getElementById('notesError').innerText ="*";
  else
    document.getElementById('notesError').innerText = errors.notesError;
  }
  else if(flag==1){
    if(errors.firstNameError.localeCompare("")!=0)
    document.getElementById('firstNameError').innerText = "*";
  else
    document.getElementById('firstNameError').innerText = errors.firstNameError;

  if(errors.lastNameError.localeCompare("")!=0)
    document.getElementById('lastNameError').innerText ="*" ;
  else
    document.getElementById('lastNameError').innerText = errors.lastNameError;

  if(errors.emailError.localeCompare("")!=0)
    document.getElementById('emailError').innerText ="*" ;
  else
    document.getElementById('emailError').innerText = errors.emailError;

  if(errors.homeNoError.localeCompare("")!=0)
    document.getElementById('homeNoError').innerText ="*" ;
  else
    document.getElementById('homeNoError').innerText = errors. homeNoError;

  if(errors.workNoError.localeCompare("")!=0)
    document.getElementById('workNoError').innerText="*" ;
  else
    document.getElementById('workNoError').innerText = errors.workNoError;

  if(errors.birthdateError.localeCompare("")!=0)
     document.getElementById('birthdateError').innerText ="*" ;
  else
     document.getElementById('birthdateError').innerText = errors.birthdateError;

  if(errors.additionalContactNoError1.localeCompare("")!=0)
    document.getElementById('additionalContactNoError1').innerText = "*"
  else
    document.getElementById('additionalContactNoError1').innerText = errors.additionalContactNoError1;
    
  if(errors.companyError.localeCompare("")!=0)
    document.getElementById('companyError').innerText = "*";
  else
    document.getElementById('companyError').innerText=errors.companyError;

  if(errors.jobTitleError.localeCompare("")!=0)
    document.getElementById('jobTitleError').innerText = "*";
  else
  document.getElementById('jobTitleError').innerText = errors.jobTitleError;
  
  if(errors.notesError.localeCompare("")!=0)
    document.getElementById('notesError').innerText ="*";
  else
    document.getElementById('notesError').innerText = errors.notesError;
  }
  else
  {
    if(errors.firstNameError.localeCompare("")!=0)
    document.getElementById('firstNameError').innerText = "*";
  else
    document.getElementById('firstNameError').innerText = errors.firstNameError;

  if(errors.lastNameError.localeCompare("")!=0)
    document.getElementById('lastNameError').innerText ="*" ;
  else
    document.getElementById('lastNameError').innerText = errors.lastNameError;

  if(errors.emailError.localeCompare("")!=0)
    document.getElementById('emailError').innerText ="*" ;
  else
    document.getElementById('emailError').innerText = errors.emailError;

  if(errors.homeNoError.localeCompare("")!=0)
    document.getElementById('homeNoError').innerText ="*" ;
  else
    document.getElementById('homeNoError').innerText = errors. homeNoError;

  if(errors.workNoError.localeCompare("")!=0)
    document.getElementById('workNoError').innerText="*" ;
  else
    document.getElementById('workNoError').innerText = errors.workNoError;

  if(errors.birthdateError.localeCompare("")!=0)
     document.getElementById('birthdateError').innerText ="*" ;
  else
     document.getElementById('birthdateError').innerText = errors.birthdateError;

  if(errors.additionalContactNoError1.localeCompare("")!=0)
    document.getElementById('additionalContactNoError1').innerText = "*"
  else
    document.getElementById('additionalContactNoError1').innerText = errors.additionalContactNoError1;
   
  if(errors.additionalContactNoError2.localeCompare("")!=0)
   document.getElementById('additionalContactNoError2').innerText = "*";
  else
  document.getElementById('additionalContactNoError2').innerText = errors.additionalContactNoError2;
    console.log(errors.companyError);
  if(errors.companyError.localeCompare("")!=0)
    document.getElementById('companyError').innerText = "*";
  else
    document.getElementById('companyError').innerText=errors.companyError;

  if(errors.jobTitleError.localeCompare("")!=0)
    document.getElementById('jobTitleError').innerText = "*";
  else
  document.getElementById('jobTitleError').innerText = errors.jobTitleError;
  
  if(errors.notesError.localeCompare("")!=0)
    document.getElementById('notesError').innerText ="*";
  else
    document.getElementById('notesError').innerText = errors.notesError;}
 
}

function validateName(name) {
    if (name === '' || name === undefined || name === null)
        return "Username cannot be left blank";
    else
        return "";
}

function validateEmail(email){
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";

    else if (!email.match(validRegex))
        emailError += 'Invalid Email';

    return emailError;
}

function validatePhone(contactNo){
    let contactNoError = '';
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (contactNo === '' || contactNo === undefined || contactNo === null)
        contactNoError += "ContactNo cannot be left blank";

    else if (!contactNo.match(validRegex))
        contactNoError += 'Invalid ContactNo';

    return contactNoError;

}

function validateDob(birthdate){
    let birthdateError='';
    if (birthdate === '' || birthdate === undefined || birthdate === null)
         birthdateError += "birthdate cannot be left blank";
    else {
        const birthyear=birthdate.split("-");
        const d = new Date();
        const year = d.getFullYear();
        const diff=year-birthyear[0];
        if(diff<18)
          birthdateError+="Age is less than 18";
    }
   return birthdateError;
}

function validateCompany(company){
    if (company==''|| company == undefined || company == null)
      return "company cannot be left blank";
    else
      return "";
}

function validateJobTitle(jobTitle){
    if (jobTitle === '' || jobTitle === undefined || jobTitle === null)
      return "jobTitle cannot be left blank";
    else
      return "";
}

function validateNotes(notes){
    console.log(notes);
    if (notes.length>50)
      return "Notes charecters exceeded 50 charecters.";
    else
      return "";
}

let birthdate = document.getElementById('birthdate');

birthdate!==null ? birthdate.setAttribute('max', new Date().toISOString().split('T')[0]):birthdate;
   
function addContact(events){
         events.preventDefault();
     if(flag<2){
        flag++;
        let element=document.getElementById("addContactNo");
        let parentelement=document.getElementById("addcontactno");
        const node=document.createElement("input");
        const errornode=document.createElement("small");
        node.setAttribute("id","additionalcontactno"+flag);
        errornode.setAttribute("id", "additionalContactNoError"+flag);
        node.placeholder="Enter "+flag+" Additional Contact No";
        parentelement.insertBefore(errornode,element);
        parentelement.insertBefore(node,errornode);
       }
      
    else
        alert("NO ADDITIONAL NUMBERS CAN BE ADDED\nPHONE NUMBERS ARE FILLED");
    
}

