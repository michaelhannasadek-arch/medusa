/* Firebase = saves website text/data online in Firestore.
   Cloudinary = uploads and hosts images online. */

/* Set to false for local demo mode (saves in browser localStorage only)
   Set to true for online mode (saves to Firebase Firestore) */
window.USE_FIREBASE = true;

/* Firebase configuration - contact developer if you want to enable online mode */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCnV7w1ty2amY1ZbR6__MjuFERIVStnKE8",
  authDomain: "medusa-aa8e5.firebaseapp.com",
  projectId: "medusa-aa8e5",
  storageBucket: "medusa-aa8e5.firebasestorage.app",
  messagingSenderId: "790727181582",
  appId: "1:790727181582:web:a0ace176672b69cc0fc35f"
};
window.CMS_DOC_PATH = "websites/medusa/content/main";

/* Cloudinary image upload settings. */
window.USE_CLOUDINARY = true;
window.CLOUDINARY_CLOUD_NAME = "dew5qojur";
window.CLOUDINARY_UPLOAD_PRESET = "medusa_upload";
window.CLOUDINARY_FOLDER = "medusa";
