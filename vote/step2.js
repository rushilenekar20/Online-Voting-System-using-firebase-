

const zone = document.querySelector('#searchcandidate');
const candidatelist = document.querySelector('#candidatelist');


function searchcandidates(){
    let count =1;
   let city = "c"+ zone.ward.value +count;

   db.collection('candidates').get().then(snap =>{
        console.log(city);

        
        snap.forEach( doc  =>{
           // console.log(doc.id);

            if(doc.id == city  ){
                renderCandidates(doc);
                count++;
                city = "c" + zone.ward.value +count;
    
            }
            
            

        })

    })
   // console.log(;


}


zone.addEventListener('submit',(e) =>{
    e.preventDefault();

    //console.log(ward.ward.value);

});



 
 // create element & render cafe
 function renderCandidates(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let party = document.createElement('span');
    let symbol = document.createElement('span');
    let vote = document.createElement('div');

    li.setAttribute('data-id', doc.id);

    nameval = doc.data().fname +' '+ doc.data().lname;

    name.textContent = nameval;
    party.textContent = doc.data().party;
    symbol.textContent = doc.data().symbol;
    
    vote.textContent = 'VOTE';

    li.appendChild(name);
    li.appendChild(party);
    li.appendChild(symbol);
    

    
    li.appendChild(vote);

    candidatelist.appendChild(li);
   // console.log(typeof doc.data().vote)

    // deleting data
    vote.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        
        console.log(doc.data().vote +1 );
        console.log(id);
        
        db.collection('candidates').doc(id).update({
               vote: doc.data().vote +1,
            });
            //next();
            
setTimeout(() => { window.location.replace ( "step3.html");  }, 2000);
            
           // window.location.replace ( "step3.html");
    });
   
}

async function next(){
    window.location.replace ( "step3.html");
   
}
