import React from "react";
import { View } from "react-native";
import { styles } from "../styles/appStyles";
import OrgListings from "../components/OrgListings";

export default function OrgHomeScreen() {

  return (
    <View style={styles.container}>
      <OrgListings />
    </View>
  );
}