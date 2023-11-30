import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
  const dispatch = useDispatch();
  const confirmBooking = () =>{
        dispatch(savedPlaces(route.params));
        navigation.replace("Main");
  }
  return (
    <View>
      <Pressable style={{ backgroundColor: "white",margin:10 }}>
        <View
          style={{
            marginHorizontal: 12,
            margintop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="star" size={25} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Genius level
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#17B169",
              borderRadius: 6,
              paddingHorizontal: 6,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>
              Travel Sustainable
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text>Check in</Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.startDate}
            </Text>
          </View>

          <View>
            <Text>Check out</Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.endDate}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and guest
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>
        <Pressable onPress={confirmBooking} style={{backgroundColor:'#003580',width:120,padding:5,borderRadius:5,marginHorizonta:12,marginBottom:20}}>
          <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:'bold'}}>Book now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
