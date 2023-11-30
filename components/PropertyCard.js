import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  key,
  rooms,
  children,
  property,
  adults,
  seletedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation=useNavigation()
  return (
    <View>
      <Pressable
      onPress = {()=>navigation.navigate("Info",{
        name:property.name,
        rating:property.rating,
        oldPrice:property.oldPrice,
        newPrice:property.newPrice,
        photos:property.photos,
        availableRooms:property.rooms,
        adults:adults,
        children:children,
        rooms:rooms,
        seletedDates:seletedDates
        
        ,
      })}
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 3.5, width: width - 290 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ width: 100 }}>{property.name}</Text>
            <AntDesign name="hearto" size={25} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="star" size={25} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Genius level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 150,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ fontWeight: "500", marginTop: 4, fontSize: 15 }}>
            Prices for 1 night and {adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 5,
            }}
          >
            <Text style={{ color: "red", textDecorationLine: "line-through" }}>
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 15 }}>{property.newPrice * adults}</Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "gray", fontSize: 16 }}>Deluxe room</Text>
            <Text style={{ color: "gray", fontSize: 16 }}>
              Hotel room: 1 bed
            </Text>
            <View
              style={{
                backgroundColor: "#6082B6",
                paddingVertical: 3,
                borderRadius: 5,
                marginTop:4,
                width: 150,
                paddingHorizontal:4
              }}
            >
              <Text style={{color:"white",textAlign:"center"}}>Limited time deal</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
