// put the solution code to persist and fetch data here
// method to persist data
// method to fetch all contacts
// method to fetch contact by id
// Provide persistence solution code here


let httpClient={
    flag:0,
    get:url=>{
        let promise = new Promise(function (resolve,reject){
            var myObj;
            let text="";
            let xhr=new XMLHttpRequest();
            xhr.open("GET","http://localhost:3000/contacts");
            xhr.send();
            xhr.onload=(response)=>{
                if(xhr.readyState==4 && xhr.status==200 ){
                     myObj = JSON.parse(xhr.responseText);
                     console.log("------------------"+myObj);
                  if(httpClient.flag==0){
                     for (let x in myObj) {
                        text += `<tr><td> ${ myObj[x].firstname }</td><td>${myObj[x].lastname}</td><td>${myObj[x].email}</td><td>${myObj[x].homeNo}</td><td><button id="btn-${myObj[x].id}" data-bs-target="#exampleModal" data-bs-toggle="modal"  onclick="modalsfun(event)">+</button></td></tr>`;
                       
                    }
                    document.getElementById("add").innerHTML= text;    
                   console.log(document.getElementsByTagName("tbody"));
                   httpClient.flag==1;
                  }
                   resolve(xhr.responseText);
               
                }
                else 
                   reject("ERROR");}
            
        });                                                                                                                                                                                                       
        return promise;  
     
    },

    post:(url,contact)=>{
        alert("entered post");
        let promise = new Promise(
            function(resolve,reject){
                let xhr= new XMLHttpRequest();
                xhr.open("POST"," http://localhost:3000/contacts",true );
                xhr.setRequestHeader("content-type","application/json");
                xhr.send(JSON.stringify(contact));
                xhr.onload=()=>{
                if(xhr.status==200)
                  resolve(xhr.response);
                else 
                  reject("ERROR");
                }
        });
        return promise; 
    }
};

function modalsfun(event){
    console.log(event.target.id);
    let id=event.target.id.split("-");
    selectedId=id[1];
    httpClient.get("http://localhost:3000/contacts").then((responses)=>{console.log(responses);
      let body=document.getElementById("contact-data"); 
      let response=JSON.parse(responses);
       for(var i in response)
         {
           if(response[i].id==selectedId)
           {   
            console.log("response"+response[i]);
            console.log("selected"+selectedId);
            body.innerHTML=`Name      :${response[i].firstname} ${response[i].lastname}<br>
                              Email     :${response[i].email}<br>
                              Home No   :${response[i].homeNo}<br>
                              work No   :${response[i].workNo}<br>
                              Birth Date:${response[i].birthdate}<br>
                              Company   :${response[i].company}<br>
                              Job Title :${response[i].jobTitle}<br>
                              Notes     :${response[i].notes}<br>`;
            console.log(body);
            break;

            }
        }
    })
    .catch(err=>{console.log(err)});

}

   





   

