import { Image, View, Text, StyleSheet } from 'react-native';
import { Images, Themes } from '../assets/Themes';

const SpotifyLogo = () => {
    return (
        <View style={styles.container}>
            <Image source={Images.spotify} style={styles.img} />
            <Text style={styles.header}>My Top Tracks</Text>
        </View>
    )
}

let hundo = "100%";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30,
    },
    header: {
        color: Themes.colors.white,
        fontWeight: 'bold',
        fontSize: 27,
    },
    img: {
        width: 27,
        height: undefined,
        aspectRatio: 1,
        marginRight: 15,
    }
})

export default SpotifyLogo