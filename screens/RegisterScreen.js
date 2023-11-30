import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const navigation = useNavigation();
  const register = () => {
    if (email === "" || password === "" || phoneno === "") {
      Alert.alert(
        "Invalid detail",
        "Please enter all the credentials",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        console.log(user);
        const uid = auth.currentUser.uid;
        Alert.alert("Success");
        setDoc(doc(db, "users", `${uid}`), {
          email: user,
          password: password,
          phoneno: phoneno,
        });
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Api call error");
        alert(error.message);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontWeight: "700", fontSize: 17 }}>
            Register
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Create an account
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="enter your password"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              Phone number
            </Text>
            <TextInput
              value={phoneno}
              onChangeText={(text) => setPhoneno(text)}
              placeholder="enter your phone number"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>
        <Pressable
          onPress={() => register(navigation)}
          style={{
            backgroundColor: "#003580",
            padding: 15,
            width: 200,
            marginTop: 40,
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: 7,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Register
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Already have an account? Login{" "}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
