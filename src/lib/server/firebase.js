import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCsqOyQNHE3l5t9YFVYkhIRavnuOUQmWEA',
	authDomain: 'jilari.firebaseapp.com',
	projectId: 'jilari',
	storageBucket: 'jilari.appspot.com',
	messagingSenderId: '539947426513',
	appId: '1:539947426513:web:6fdf78f15905dafbd29bf0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const authFirebase = getAuth(app);

export default authFirebase;
