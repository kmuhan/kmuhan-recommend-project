import firebase from "./firebase_config";
import '@firebase/firestore'

const db = firebase.firestore();
 
export async function getUser(userId) {
    try {
        const user = await db.collection('user').doc(userId).get();
        return user.data() ?? null;
    } catch (e) {
        return null;
    }
    // const user = await db.collection('user').doc(userId).get();
    // return user.data()
}
