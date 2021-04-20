
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const name = formData.get('name');
	const content = formData.get('content');
	// get info amd trun it into an object
	const tweet = {
		name,
		content
	}

	//console.log(tweet);


	
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJCxAVZnwh6Dm3ijh2IV6ZHG4_Flu6lZk",
    authDomain: "twitter-2-clone.firebaseapp.com",
    databaseURL: "https://twitter-2-clone-default-rtdb.firebaseio.com",
    projectId: "twitter-2-clone",
    storageBucket: "twitter-2-clone.appspot.com",
    messagingSenderId: "835170629594",
    appId: "1:835170629594:web:2bd7cf0c29e8f7eb7b32e3",
    measurementId: "G-DBSDY064WN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


	
});