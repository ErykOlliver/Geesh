import { View, Text } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, LibrariesIcon, Mail01Icon, Moon02Icon, PencilEdit01Icon, PlayListAddFreeIcons, SmartPhone01Icon, User02Icon, User03Icon, ViewFreeIcons } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics.js"
import ProfileStyle from "../style/ProfileStyle.js"
import UserPanel from "./Header/UserPanel/UserPanel.tsx"
import UserCredential from "./Header/UserCredential/UserCredential.tsx"
import { useEffect, useState } from "react"
import { auth, db } from "../../../../firebase.js"
import { doc, getDoc } from "firebase/firestore"

export default function Header() {
    const [userData, setUserData] = useState(null);
    async function getUserData() {
        const user = auth.currentUser;
        if (!user) return;

        const uid = user.uid;
        const docRef = doc(db, "accounts", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserData(docSnap.data());
        } else {
            console.log("Nenhum dado extra encontrado!");
        }
    }

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <View style={ProfileStyle.Header}>
            <UserPanel userName={userData?.name || ''} UID={645623} />
            <UserCredential userPhone={userData?.tel || ''} userEmail={userData?.email || ''} />
        </View>
    )
}