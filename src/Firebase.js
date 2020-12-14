import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhpVLOUfwVggbY7UBvx8GGG_g2R1Jt9W8",
  authDomain: "wood-products-32ab0.firebaseapp.com",
  databaseURL: "https://wood-products-32ab0-default-rtdb.firebaseio.com",
  projectId: "wood-products-32ab0",
  storageBucket: "wood-products-32ab0.appspot.com",
  messagingSenderId: "311062704200",
  appId: "1:311062704200:web:ad3db530d1c8ddb09f687d",
  measurementId: "G-JCV1JB1YR8"
});

// push order to database
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
