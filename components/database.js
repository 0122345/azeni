 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDsfTIr3EoCwWVlYr9lZSntREUdIHXLH2I",
    authDomain: "azeni-sample.firebaseapp.com",
    databaseURL: "https://azeni-sample-default-rtdb.firebaseio.com",
    projectId: "azeni-sample",
    storageBucket: "azeni-sample.appspot.com",
    messagingSenderId: "863925857382",
    appId: "1:863925857382:web:82cc99254d5e97275751a7"
  };
 
  firebase.initializeApp(firebaseConfig);

  var contactDb = firebase.database().ref('azeni-sample')
  document.getElementById("contact").addEventListener("submit", submitForm);


  function submitForm(event) {
     event.preventDefault();

     var name = getElementVal('name')
     var email = getElementVal('email')

     saveMsg(name, email);

     setTimeout(() => {
        alert("sent was Successfully")
     }, 3000);
     document.getElementById('contactForm').reset();
  }

  const saveMsg = (name, email) => {
     var newForm = contactDb.push();

     newForm.set({
        name: name,
        email: email
     })
  }

  const getElementVal = (id) => {
     return document.getElementById(id).value;
  }