import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    instituition: ''
  });
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  console.log(value);

  return (
   <View style={styles.container}>
  <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onSelectItem={(item) => {
    console.log(item);
}}
      setItems={setItems}
    />

   </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


