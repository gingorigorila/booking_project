import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState,useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Room",
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
  const [selected, setSelected] = useState([]);
  console.log(selected);
  return (
    <>
    <ScrollView>
      {route.params.rooms.map((item, index) => (
        <Pressable
          style={{ backgroundColor: "white", padding: 10, margin: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}>
              {item.name}
            </Text>
            <AntDesign name="infocirlce" size={25} color="#007FFF" />
          </View>
          <Text>pay at the property</Text>
          <Text>Free cancellation Available</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 4,
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice}
            </Text>
            <Text style={{ fontSize: 18 }}>Rs{route.params.newPrice}</Text>
          </View>
          <Amenities />
          {selected.includes(item.name) ? (
            <Pressable
              style={{
                borderColor: "#318CE7",
                backgroundColor: "#F0F8FF",
                borderWidth: 2,
                width: "100%",
                padding: 10,
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#318CE7",
                  fontWeight: "bold",
                }}
              >
                SELECTED
              </Text>
              <Entypo
                onPress={() => setSelected([])}
                name="circle-with-cross"
                size={25}
                color="red"
              />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setSelected(item.name)}
              style={{
                alignItems: "center",
                borderColor: "#007FFF",
                borderWidth: 2,
                borderRadius: 5,
                padding: 10,
              }}
            >
              <Text style={{ color: "#007FFF", textAlign: "center" }}>
                SELECT
              </Text>
            </Pressable>
          )}
        </Pressable>
      ))}
    
    </ScrollView>
    {selected.length > 0 ? (
       <Pressable onPress={()=>navigation.navigate("User",{
        oldPrice:route.params.oldPrice,
        newPrice:route.params.newPrice,
        name:route.params.name,
        children:route.params.children,
        adults:route.params.adults,
        rating:route.params.rating,
        startDate:route.params.startDate,
        endDate:route.params.endDate
       })} style={{backgroundColor:'#007FFF',alignItems:'center',padding:8,marginBottom:30,borderradius:3,marginHorizontal:15}}>
           <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Reserve</Text>
       </Pressable>
    ):(
        null
    )}
    </>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
