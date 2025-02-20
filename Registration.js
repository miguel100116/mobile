import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Image, ScrollView } from "react-native";
import { Mystyle } from "./Mystyle";
import { useNavigation } from '@react-navigation/native';


const RegistrationForm = () => {
  const navigation = useNavigation();  

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validateForm = () => {
    if (!form.name.trim() || !form.age.trim() || !form.gender.trim() || !form.mobile.trim() || !form.address.trim()) {
      Alert.alert("Error", "Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted:", form);
      Alert.alert("Success", "Registration Successful!", [
        { text: "OK", onPress: () => navigation.navigate("Dashboard") }  // ✅ Navigate to Dashboard
      ]);
    }
  };

  return (
    <ScrollView contentContainerStyle={Mystyle.scrollContainer}>
      <View style={Mystyle.container}>
        <View style={Mystyle.box}>
          <Image source={require("../assets/logo.png")} style={Mystyle.logo} />

          <Text style={Mystyle.label}>Name:</Text>
          <TextInput
            placeholder="Enter your name"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("name", text)}
          />

          <Text style={Mystyle.label}>Age:</Text>
          <TextInput
            placeholder="Enter your age"
            style={Mystyle.input}
            keyboardType="numeric"
            onChangeText={(text) => handleChange("age", text)}
          />

          <Text style={Mystyle.label}>Sex:</Text>
          <TextInput
            placeholder="Enter your gender"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("gender", text)}
          />

          <Text style={Mystyle.label}>Phone #:</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={Mystyle.input}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange("mobile", text)}
          />

          <Text style={Mystyle.label}>Address:</Text>
          <TextInput
            placeholder="Enter your address"
            style={Mystyle.input}
            onChangeText={(text) => handleChange("address", text)}
          />
          

          <Button title="Register" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistrationForm;
