const firebaseConfig = {
    apiKey: "AIzaSyAWScF8lDgxMjiFJbrY_XX3keRSmlYG6x4",
    authDomain: "zemutechnologies-9eb10.firebaseapp.com",
    databaseURL: "https://zemutechnologies-9eb10-default-rtdb.firebaseio.com",
    projectId: "zemutechnologies-9eb10",
    storageBucket: "zemutechnologies-9eb10.appspot.com",
    messagingSenderId: "333066007188",
    appId: "1:333066007188:web:792af909eddfbe25a87a81",
    measurementId: "G-GY427863W7"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
//const signIn = firebase.database().ref("zemutech");

//var signIn = firebase.database().ref("zemutech"),

document.getElementById('zemutech').addEventListener("submit", submitForm )
function submitForm(e){
    e.preventDEfault()
    var name = getElementVal('name');
    var email = getElementVal('emailid');
    var pswd = getElementVal('password');
    
    saveMessages(name, emailid, password);
}

const saveMessage = (name, emailid, password) => {
    var newContactForm = contactFormDB.push().
    newContentForm.set({
        name : name,
        emailid : emailid,
        password : password,
    })
}

const getElementVal = () => {
    return document.getElementById(id).value;
}