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
const contactFormDB = firebase.database().ref("zemutech");

//var signIn = firebase.database().ref("zemutech"),

//add event listener to the form
document.getElementById('zemutech').addEventListener("submit", submitForm);
document.getElementById('signIn').addEventListener("submit", signInForm);
function submitForm(e){
    e.preventDefault()
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var password = getElementVal('password');
    
    saveMessage(name, emailid, password, () => {
        window.location.href = "index,html";
    });
}

function signInForm(e) {
    e.preventDefault();
    var emailid = getElementVal('signinEmail');
    var password = getElementVal('signinPassword');
    
    authenticateUser(emailid, password, () => {
        window.location.href = "index.html"; // Redirect to home page on successful sign-in
    });
}

const saveMessage = (name, emailid, password, callback) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        password: password,
    }, (error) => {
        if (error) {
            console.error("Error saving message: ", error);
        } else {
            callback();
        }
    });
}

const authenticateUser = (emailid, password, callback) => {
    firebase.auth().signInWithEmailAndPassword(emailid, password)
        .then((userCredential) => {
            // Sign-in successful.
            callback();
        })
        .catch((error) => {
            console.error("Error signing in: ", error);
        });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}