
 const candidateList = document.querySelector('#candidate-list');
 
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
 
     candidateList.appendChild(li);
     console.log(typeof doc.data().vote)
 
     // deleting data
     vote.addEventListener('click', (e) => {
         e.stopPropagation();
         let id = e.target.parentElement.getAttribute('data-id');
         
         db.collection('candidates').doc(id).update({
                vote: doc.data().vote +1,
             });
     });
 }
 
 //getting data
  db.collection('candidates').orderBy('city').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
          renderCandidates(doc);
          db.collection('candidates').doc('20').update({
            vote: 1,
         });
      });
  });
 
 
 
 //