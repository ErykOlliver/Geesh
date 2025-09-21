import { View, Text } from "react-native"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, LibrariesIcon, Mail01Icon, Moon02Icon, PencilEdit01Icon, PlayListAddFreeIcons, SmartPhone01Icon, User02Icon, User03Icon, ViewFreeIcons } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../../components/DesigneTokens/metrics"
import ProfileStyle from "../style/ProfileStyle.js"
import UserPanel from "./Header/UserPanel/UserPanel"
import UserCredential from "./Header/UserCredential/UserCredential"
import { useEffect, useState } from "react"
import { auth, db } from "../../../../firebase.js"
import { doc, getDoc } from "firebase/firestore"
import * as ImagePicker from 'expo-image-picker'


export default function Header() {
    const [selectedImage, setSelectedImage] = useState (undefined)
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

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
            console.log(result)
        } else {
            alert("voce não selecionou uma imagem")
        }
    }
    return (
        <View style={ProfileStyle.Header}>
            <UserPanel Avatar={selectedImage} userName={userData?.name || ''} UID={645623} OnPress={pickImage} />
            <UserCredential userPhone={userData?.tel || ''} userEmail={userData?.email || ''} />
        </View>
    )
}