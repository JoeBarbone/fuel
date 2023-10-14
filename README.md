# Fuel
React/Firebase app to track fuel consumption

This webapp will be used to further my understanding of CRUD with React/Firebase.

# Setup
npm install react-bootstrap bootstrap  
npm install react-router-dom  
add to index.js: import 'bootstrap/dist/css/bootstrap.min.css';
npm install firebase
npm install moment

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWSRUTAiv15OYZeYBBAv2gwAwoeAw3UBY",
  authDomain: "vema-e70a5.firebaseapp.com",
  projectId: "vema-e70a5",
  storageBucket: "vema-e70a5.appspot.com",
  messagingSenderId: "740424739667",
  appId: "1:740424739667:web:68677f12c2e173f4d34fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

# Database structure
This is a Firebase that is a new app added to the VeMa project. This was done because I am running out of Firebase projects and wanted to test adding an app to an existing project. Unfortunately, this means I will need to combine collections.

* id - auto created
* date - transaction date Need to use Moment for this
* station - gas station name
* gallons - number of gallons
* price - price per gallon

# Hosting
Hosting will be provided by Google/Firebase

# Footer acknowledgements and attributes
home
<a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>

Add
<a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by Pixel perfect - Flaticon</a>

Reports
Report
<a href="https://www.flaticon.com/free-icons/report" title="report icons">Report icons created by Freepik - Flaticon</a>


BrandCrowd for Logo on page 4 row 2 col 1