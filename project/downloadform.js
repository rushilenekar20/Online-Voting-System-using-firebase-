const voterid = document.querySelector('#voterid');
const voterinfo = document.querySelector('#voterinfo');


function downloadvoter(){
       let idvoter =  voterid.downloadid.value ;

    db.collection('voters').get().then(snap =>{

        
        snap.forEach( doc  =>{

            if(doc.id == idvoter && doc.data().eligible == true){
           
            console.log(doc.data().eligible);

            let li = document.createElement('li');
            let fname = document.createElement('p');
            let sex = document.createElement('p');
            let lname = document.createElement('p');
            let dob = document.createElement('p');
            let address = document.createElement('p');
            let eligible = document.createElement('p');
            let mob = document.createElement('p');
          
        
           
        
        
            fname.textContent = " First Name :  " + doc.data().fname;
            lname.textContent = " Last Name :  "+  doc.data().lname;
            sex.textContent = "Gender :  " + doc.data().sex;
            dob.textContent = " Date of birth:  " + doc.data().dob;
            address.textContent = "Address:  " + doc.data().address;
            mob.textContent = "Mobile Number :  " + doc.data().mob;
            eligible.textContent = "Eligibility :  " + doc.data().eligible;
           
        
            li.appendChild(fname);
            li.appendChild(lname);
            li.appendChild(sex);
            li.appendChild(dob);
            li.appendChild(address);
            li.appendChild(mob);
            li.appendChild(eligible);
          
            
 
        
            voterinfo.appendChild(li);





            }
            else if(doc.id == idvoter && doc.data().eligible == false){

                //let eligiblenot = document.createElement('p');
               // eligiblenot.textContent ="YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have not registered yet ...";
                alert("YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have not registered yet ...");
                voterinfo.appendChild(eligiblenot);

            }
            
         

        })

    })
   // console.log(;


}


voterid.addEventListener('submit',(e) =>{
    e.preventDefault();

    //console.log(ward.ward.value);

});
