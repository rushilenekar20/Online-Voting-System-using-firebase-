const voterid = document.querySelector('#voterid');
const voterinfo = document.querySelector('#voterinfo');


function downloadvoter(){
       let idvoter =  voterid.downloadid.value ;

    db.collection('voters').get().then(snap =>{

        
        snap.forEach( doc  =>{

            if(doc.id == idvoter && doc.data().eligible == true){
           
            //console.log(doc.data().eligible);

            
          
            let eligible = document.createElement('h7');
           
            eligible.textContent = "You are ELIGIBLE for voting:" ;
              voterinfo.appendChild(eligible);





            }
            else if(doc.id == idvoter && doc.data().eligible == false){

                //let eligiblenot = document.createElement('h7');
                //eligiblenot.textContent ="YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have not registered yet ..."
                
               // voterinfo.appendChild(eligiblenot);
               alert("YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have not registered yet ...");

            }
            
         

        })

    })
   // console.log(;


}


voterid.addEventListener('submit',(e) =>{
    e.preventDefault();

    //console.log(ward.ward.value);

});
