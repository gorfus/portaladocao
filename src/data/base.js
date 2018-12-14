var config = {
    apiKey: "AIzaSyCr55u4LAzxXwmRexKDj5TLqxKVfEcaTK0",
    authDomain: "bichosadocao.firebaseapp.com",
    databaseURL: "https://bichosadocao.firebaseio.com",
    projectId: "bichosadocao",
    storageBucket: "bichosadocao.appspot.com",
    messagingSenderId: "810992161227"
  };
//   firebase.initializeApp(config);

const Rebase =  require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())

export default base
export const storage = app.storage();