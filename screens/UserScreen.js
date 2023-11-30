import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneno, setPhoneno] = useState();

  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneno) {
      Alert.alert("Invalid details", "Please enter all the fields", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (firstName && lastName && email && phoneno) {
      navigation.navigate("Confirmation", {
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate,
      });
    }
  };
  return (
    <>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>Họ</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>Ten</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text>So dien thoai</Text>
          <TextInput
            value={phoneno}
            onChangeText={(text) => setPhoneno(text)}
            style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          alignItems: "center",
          marginTop: "auto",
          flexDirection: "row",
          marginBottom: 40,
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
              marginHorizontal: 12,
              gap: 8,
            }}
          >
            <Text style={{ color: "red", textDecorationLine: "line-through" }}>
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 15 }}>
              RS {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <View>
            <Text>
              You saved {route.params.oldPrice - route.params.newPrice} rupees
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => finalStep()}
          style={{ backgroundColor: "#007FFF", padding: 10, borderRadius: 5 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Final Step
          </Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
