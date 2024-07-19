import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQ2i2vVH3fkQ0IynVoQEPW1oZs-WLoiM4",
  authDomain: "islamic-movie.firebaseapp.com",
  projectId: "islamic-movie",
  storageBucket: "islamic-movie.appspot.com",
  messagingSenderId: "915920639717",
  appId: "1:915920639717:web:0fc2de3113c7d8057a660c",
  measurementId: "G-6GS1G6L12W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
