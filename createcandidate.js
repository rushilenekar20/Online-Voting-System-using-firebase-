const candidateList = document.querySelector('#candidate-list');
const form = document.querySelector('#add-candidate-form');



// create element & render cafe
function renderCandidates(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let sex = document.createElement('span');
    let age = document.createElement('span');
    let city = document.createElement('span');
    let party = document.createElement('span');
    let symbol = document.createElement('span');
    let votes = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);

    nameval = doc.data().fname +' '+ doc.data().lname;

    name.textContent = nameval;
    sex.textContent = doc.data().sex;
    age.textContent = doc.data().age;
    city.textContent = doc.data().city;
    party.textContent = doc.data().party;
    symbol.textContent = doc.data().symbol;
    votes.textContent = doc.data().votes;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(sex);
    li.appendChild(age);
    li.appendChild(city);
    li.appendChild(party);
    li.appendChild(symbol);
    li.appendChild(votes);
    
    li.appendChild(cross);

    candidateList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('candidates').doc(id).delete();
    });
}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('candidates').add({
        fname: form.fname.value,
        lname: form.lname.value,
        sex: form.sex.value,
        age: form.age.value,
        city: form.city.value,
        party: form.partyname.value,
        symbol: form.symbol.value
    });
    form.fname.value = '';
    form.lname.value = '';
    form.sex.value = '';
    form.age.value = '';
    form.city.value = '';
    form.partyname.value = '';
    form.symbol.value = '';
});

// real-time listener
db.collection('candidates').orderBy('city').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCandidates(change.doc);
        } else if (change.type == 'removed'){
            let li = candidateList.querySelector('[data-id=' + change.doc.id + ']');
            candidateList.removeChild(li);
        }
    });
});

// updating records (console demo)
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });