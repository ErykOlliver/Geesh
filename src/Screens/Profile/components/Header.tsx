import { View} from "react-native"
import ProfileStyle from "../style/ProfileStyle"
import UserPanel from "./Header/UserPanel/UserPanel"
import UserCredential from "./Header/UserCredential/UserCredential"
import { useEffect, useState } from "react"
import { auth, db } from "../../../../firebase"
import { doc, getDoc } from "firebase/firestore"
import * as ImagePicker from 'expo-image-picker'
import { Shadow } from "react-native-shadow-2"


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
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={ProfileStyle.Header}>
            <UserPanel Avatar={selectedImage} userName={userData?.name || ''} userEmail={userData?.email || ''} UID={645623} OnPress={pickImage} />
        </Shadow>
    )
}