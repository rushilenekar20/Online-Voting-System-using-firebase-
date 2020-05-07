const voterid = document.querySelector('#voterid');
const voterinfo = document.querySelector('#voterinfo');


function downloadvoter(){
       let idvoter =  voterid.downloadid.value ;

    db.collection('voters').get().then(snap =>{

        
        snap.forEach( doc  =>{

            if(doc.id == idvoter && doc.data().eligible == true ){
           if( doc.data().status == false){
            //console.log(doc.data().eligible);

            //console.log(doc.data().status);
          
            let eligible = document.createElement('p');
            let vote = document.createElement('button');

           
            eligible.textContent = "You are ELIGIBLE for voting:" ;
            vote.textContent ="VOTE NOW";

              voterinfo.appendChild(eligible);
              voterinfo.appendChild(vote);

              vote.addEventListener('click', (e) => {
                e.stopPropagation();
                db.collection('voters').doc(doc.id).update({
                    status: true,
                    eligible :false,
                 });
                setTimeout(() => { window.location.href=  "step2.html";  }, 2000);
                
               
            });
        }

            }
            
            else if(doc.id == idvoter && doc.data().eligible == false && doc.data().status ==true){

                // let eligiblenot = document.createElement('p');
                // eligiblenot.textContent ="YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have already voted..."
                // voterinfo.appendChild(eligiblenot);
                alert("YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have already voted...");

            }
            else if(doc.id == idvoter && doc.data().eligible == false ){

                // let eligiblenotstatus = document.createElement('p');
                // eligiblenotstatus.textContent ="YOU ARE NOT ELIGIBLE FOR VOTING .May be because you have not registered yet ..."
                // voterinfo.appendChild(eligiblenotstatus);
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
