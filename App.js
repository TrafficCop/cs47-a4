import { StyleSheet, SafeAreaView, View, Text, Pressable, Dimensions } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyAuthButton, SongList, SpotifyLogo }from "./components";

let width = Dimensions.get('window').width;

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = (
    <View style={styles.subContainer} >
      <SpotifyLogo />
      <SongList tracks={tracks} />
    </View>
    );
  } else {
    contentDisplayed = (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth} styles={styles} />
    );
  }

  //console.log("tracks", tracks);
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  authText: {
    color: Themes.colors.white,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
  }
});
