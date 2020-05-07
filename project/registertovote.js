const form =document.querySelector('#addvoterform');
const submitstatus =document.querySelector('#Submitstatus');


let voterid;


form.addEventListener('submit',(e) =>{
    e.preventDefault();

    console.log(form.fname.value);
    
    let cityname =form.city.value;
     db.collection('voters').orderBy("currentidcount", "desc").limit(1).get().then( snapshot =>{
        snapshot.forEach( doc =>{
            let documentid =doc.data().currentidcount +1 ;
            voterid =documentid;

            db.collection('voters').doc(cityname+documentid ).set({
                fname: form.fname.value,
                lname: form.lname.value,
                sex :form.sex.value,
                city:cityname,
                dob: form.dob.value,
                address: form.address.value,
                mob: form.mob.value,
                currentidcount : documentid,
                elegible :true
            });
            
        
            
            console.log(documentid);
        })

    })

  


});

console.log(voterid);


function submitForm(){
    let status = document.createElement('span');
    let button = document.createElement('button');



    status.textContent = "Your registeration is suuccesfull. ";
   


    submitstatus.appendChild(status);
 
}

function getvoterid(){
   let cityname =form.city.value;
    
    let id = document.createElement('span');
    id.textContent ="Your voter id is :" +" "+cityname +" "+ voterid ;
    
    submitstatus.appendChild(id);

}