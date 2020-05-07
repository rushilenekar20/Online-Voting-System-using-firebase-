const zone = document.querySelector('#searchvoter');
const voterlist = document.querySelector('#voterlist');


function searchvoter(){
    let count =1;
   let city =  "c"+zone.ward.value +count;
   let maxvotes =0;
   let maxid ;
   let name ;

    db.collection('candidates').get().then(snap =>{

        
        snap.forEach( doc  =>{

            if(doc.id == city  ){
           
                
                if(doc.data().vote > maxvotes){
                    maxvotes =doc.data().vote ;
                    maxid = doc.id;
                    name =doc.data().fname +" "+ doc.data().lname;
                }

            count++;
            city = "c"+ zone.ward.value +count;

            }
            




        })
        
        let winner = document.createElement('h2');
        let highlight =document.createElement('h3');
        let emoji =document.createElement('span');
        highlight.textContent = "The winner of Eletion in " +zone.ward.value + "  is  " ;
        winner.textContent = name;
        emoji.textContent ="🎉";
        
        voterlist.appendChild(emoji);
        voterlist.appendChild(highlight);
        voterlist.appendChild(winner);
     
      
        

    
  

    })
   // console.log(;


}


zone.addEventListener('submit',(e) =>{
    e.preventDefault();

    //console.log(ward.ward.value);

});
