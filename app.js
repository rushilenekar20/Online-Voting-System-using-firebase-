const voterList = document.querySelector('#voter-list');
const form = document.querySelector('#add-voter-form');

// create element & render cafe
function renderVoters(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let sex = document.createElement('span');
    let age = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);

    nameval = doc.data().fname +' '+ doc.data().lname;

    name.textContent = nameval;
    sex.textContent = doc.data().sex;
    age.textContent = doc.data().age;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(sex);
    li.appendChild(age);
    li.appendChild(city);
    li.appendChild(cross);

    voterList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('voters').doc(id).delete();
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
    db.collection('voters').add({
        fname: form.fname.value,
        lname: form.lname.value,
        sex: form.sex.value,
        age: form.age.value,
        city: form.city.value
    });
    form.fname.value = '';
    form.lname.value = '';
    form.sex.value = '';
    form.age.value = '';
    form.city.value = '';
});

// real-time listener
db.collection('voters').orderBy('city').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        //console.log(change.doc.data());
        if(change.type == 'added'){
            renderVoters(change.doc);
        } else if (change.type == 'removed'){
            let li = voterList.querySelector('[data-id=' + change.doc.id + ']');
            voterList.removeChild(li);
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