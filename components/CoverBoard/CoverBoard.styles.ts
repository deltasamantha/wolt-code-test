import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
  },
  box1: {
    backgroundColor: "yellow",
    left: 20,
    top: 0,
  },
  box2: {
    backgroundColor: "red",
    right: 20,
    top: 0,
  },
  box3: {
    backgroundColor: "blue",
    left: 20,
    bottom: 0,
  },
});
