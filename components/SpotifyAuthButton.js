import { Pressable, Text, Image } from "react-native";
import { Images } from "../assets/Themes";

const SpotifyAuthButton = ({ authenticationFunction, styles }) => {
    let hundo = "80%";
    return (
        <Pressable style={styles.authButton} onPress={authenticationFunction}>
            <Image source={Images.spotify} style={{ marginRight: 10, width: undefined, height: hundo, aspectRatio: 1 }} />
            <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
    );
};


export default SpotifyAuthButton;