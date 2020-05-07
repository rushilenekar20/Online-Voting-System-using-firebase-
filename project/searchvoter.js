const zone = document.querySelector('#searchvoter');
const voterlist = document.querySelector('#voterlist');


function searchvoter(){
    let count =1;
   let city =  zone.ward.value +count;

    db.collection('voters').get().then(snap =>{

        
        snap.forEach( doc  =>{

            if(doc.id == city  && doc.data().eligible == true){
           
            //console.log(doc.data().eligible);

            let li = document.createElement('li');
            let fname = document.createElement('span');
            let sex = document.createElement('span');
            let lname = document.createElement('span');
            let dob = document.createElement('span');
            let address = document.createElement('span');
          
        
           
        
            fname.textContent = doc.data().fname;
            lname.textContent = doc.data().lname;
            sex.textContent = doc.data().sex;
            dob.textContent = doc.data().dob;
            address.textContent = doc.data().address;
           
        
            li.appendChild(fname);
            li.appendChild(lname);
            li.appendChild(sex);
            li.appendChild(dob);
            li.appendChild(address);
          
            
 
        
            voterlist.appendChild(li);





            }
            
            count++;
            city =  zone.ward.value +count;

        })

    })
   // console.log(;


}


zone.addEventListener('submit',(e) =>{
    e.preventDefault();

    //console.log(ward.ward.value);

});
