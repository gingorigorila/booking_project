import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation=useNavigation();
  const login = () => {
    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
       console.log("user credential", userCredential);
       const user = userCredential.user;
       console.log("user details", user);
    })
}

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.replace("Main");
        }
      });

      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);

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
            Sign In
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sign in to your account
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
        </View>
        <Pressable
        onPress={login}
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
            Login
          </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Register")} style={{marginTop:10}}>
         <Text style={{textAlign:'center',color:'gray',fontSize:17}}>Don't have an account? Sign in </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
