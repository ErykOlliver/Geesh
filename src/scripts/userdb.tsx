import { auth } from "../../firebase"
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase";


export const getUserData = async () => {
    const uid = auth.currentUser.uid;
    const docRef = doc(db, 'accounts', uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) return docSnap.data()
}