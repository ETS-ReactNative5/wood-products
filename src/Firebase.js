import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrCFx9xXHIZJa-r9FUatMmGLO9Btqqa6w",
  authDomain: "wood-products-c3e75.firebaseapp.com",
  projectId: "wood-products-c3e75",
  storageBucket: "wood-products-c3e75.appspot.com",
  messagingSenderId: "512839784095",
  appId: "1:512839784095:web:3143dcf6b2eb03752174aa",
  measurementId: "G-M5X5MTKNWK"
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
