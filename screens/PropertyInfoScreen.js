import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  console.log(route.params);
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", margin: 5, flexWrap: "wrap" }}
        >
          {route.params.photos.slice(0, 5).map((photo) => (
            <View style={{ margin: 6 }}>
              <Image
                style={{
                  width: 120,
                  height: pixelNormalize(80),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show more
            </Text>
          </Pressable>
        </Pressable>
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
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <Text
          style={{
            fontWeight: "500",
            marginTop: 20,
            fontSize: 15,
            marginHorizontal: 15,
          }}
        >
          Prices for 1 night and {route.params.adults} adults
        </Text>
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
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 4,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 79,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {offerPrice.toFixed(0)} % OFF
          </Text>
        </View>
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

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
              {route.params.seletedDates.startDate}
            </Text>
          </View>

          <View>
            <Text>Check out</Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.seletedDates.endDate}
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
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Amenities />
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Pressable
        onPress={()=>navigation.navigate('Rooms',{
          name:route.params.name,
          rating:route.params.rating,
          oldPrice:route.params.oldPrice,
          newPrice:route.params.newPrice,
          adults:route.params.adults,
          children:route.params.children,
          rooms:route.params.availableRooms,
          startDate:route.params.seletedDates.startDate,
          endDate:route.params.seletedDates.endDate
        })}
          style={{
            backgroundColor: "#6CB4EE",
            bottom: 0,
            padding: 20,
            position: "absolute",
            width: "95%",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Select Availablity
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
