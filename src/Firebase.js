import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCta5nWQBskE0DnqZOh6cpXVVtUUznZX40",
  authDomain: "dla-pszczelarzy.firebaseapp.com",
  databaseURL: "https://dla-pszczelarzy.firebaseio.com",
  projectId: "dla-pszczelarzy",
  storageBucket: "dla-pszczelarzy.appspot.com",
  messagingSenderId: "374190089654",
  appId: "1:374190089654:web:5fad60f2b0a0ce9ac38d17",
  measurementId: "G-EDD0PPG4DX"
});

var messagesRef = firebase.database().ref("orders");

const saveMessage = (
  firstName,
  lastName,
  email,
  address,
  city,
  zipCode,
  phone,
  items,
  price
) => {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstName,
    lastName,
    email,
    address,
    city,
    zipCode,
    phone,
    items,
    price
  });
};

export default saveMessage;
