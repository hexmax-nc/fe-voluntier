import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  logo: {
    width: 150,
    resizeMode: "contain",
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 20,
    height: 20,
  },
  accountIcon: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 20,
    height: 20,
  },
});
