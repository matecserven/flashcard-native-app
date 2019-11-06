import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const CARD_COLLECTION = 'cardCollection';
const USERS = 'users';

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  // Auth API

  doCreateNewUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInUser = ({ email, password }) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        console.log(authUser.role);
        const snapshot = await this.user(authUser.uid);
        const dbUser = snapshot.data();

        // default empty roles
        if (!dbUser.roles) {
          dbUser.roles = {};
        }

        // merge auth and db user
        authUser = {
          uid: authUser.uid,
          email: authUser.email,
          emailVerified: authUser.emailVerified,
          providerData: authUser.providerData,
          ...dbUser,
        };

        next(authUser);
      } else {
        fallback();
      }
    });

  // Database API

  // Users

  user = (uid) =>
    this.db
      .collection(USERS)
      .doc(uid)
      .get();

  createNewUser = (uid, username, email) => {
    this.db
      .collection(USERS)
      .doc(uid)
      .set({ username, email });
  };

  // Cards
  getCards = (lang, type) =>
    this.db
      .collection(CARD_COLLECTION)
      .doc(lang)
      .collection(type)
      .get();

  addCard = (card, lang, type) => {
    let newCard = {};
    // eslint-disable-next-line
    for (let [key, value] of Object.entries(card)) {
      newCard[key] = value;
    }

    return this.db
      .collection(CARD_COLLECTION)
      .doc(lang)
      .collection(type)
      .add(newCard);
  };

  createNewCards = (cards, lang, type) => {
    Promise.all(cards.map((card) => this.addCard(card, lang, type)))
      .then(() => console.log('success'))
      .catch((e) => console.log(e));
  };
}

export default Firebase;
