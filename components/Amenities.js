import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Amenities = () => {
    const services = [
        {
          id: "0",
          name: "room service",
        },
        {
          id: "2",
          name: "free wifi",
        },
        {
          id: "3",
          name: "Family rooms",
        },
        {
          id: "4",
          name: "Free Parking",
        },
        {
          id: "5",
          name: "swimming pool",
        },
        {
          id: "6",
          name: "Restaurant",
        },
        {
          id: "7",
          name: "Fitness center",
        },
      ];
  return (
    <View>
      <Text>Most popular Facilities</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>
         {services.map((item,index)=>(
             <View style={{backgroundColor:'#007FFF',margin:10,borderRadius:25,paddingHorizontal:15,paddingVertical:5}} key={index}>
                <Text style={{color:'white',textAlign:'center'}}>{item.name}</Text>
             </View>
         ))}
      </View>
    </View>
  )
}

export default Amenities

const styles = StyleSheet.create({})