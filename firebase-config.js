/* ============================================================
   United Rays — Firebase configuration (edit this ONE file)
   ============================================================
   1. Go to Firebase Console → your project → Project settings
      (gear icon) → scroll to "Your apps" → Web app → "SDK setup
      and configuration" → choose "Config".
   2. Copy the values into the object below.
   3. Flip FIREBASE_READY to true once the values are filled in.

   NOTE: these Firebase web keys are SAFE to expose in front-end
   code — they are project identifiers, not secrets. Security is
   enforced by Firebase Authentication + Firestore rules, not by
   hiding this config.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAP9aa_OtOIcP1bDv6fsggeho-i6Zd5d7w",
  authDomain: "unitedrayswebsite.firebaseapp.com",
  projectId: "unitedrayswebsite",
  storageBucket: "unitedrayswebsite.firebasestorage.app",
  messagingSenderId: "591179300324",
  appId: "1:591179300324:web:208f69626d4eae4fd19bf1"
};

// Set to true AFTER you paste real values above.
// While false, the site runs in DEMO mode (no real sign-in required).
window.FIREBASE_READY = true;

// Firestore collection where member records live.
window.MEMBERS_COLLECTION = "members";
