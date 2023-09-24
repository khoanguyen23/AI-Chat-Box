import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Data from "../Services/Data";

export default function HomeScreen() {
  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState([]);

  useEffect(() => {
    setChatFaceData(Data);
    setSelectedChatFaceData(Data[0]);
  }, []);

  const changeFace =(id) =>{
    setSelectedChatFaceData(Data[id-1]);
  }

  return (
    <View style={{ alignItems: "center", paddingTop: 90 }}>
      <Text style={[{ color: selectedChatFaceData.primary, fontSize: 30 }]}>
        Hello
      </Text>
      <Text
        style={[
          {
            color: selectedChatFaceData.primary,
            fontSize: 30,
            fontWeight: "bold",
          },
        ]}
      >
        I am {selectedChatFaceData.name}
      </Text>
      <Image
        source={{ uri: selectedChatFaceData.image }}
        style={{ width: 150, height: 150, marginTop: 20 }}
      />
      <Text style={{ fontSize: 25, marginTop: 30 }}>How can I have you</Text>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#F5F5F5",
          alignItems: "center",
          height: 110,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <FlatList
          data={Data}
          horizontal
          renderItem={({ item }) =>item.id!=selectedChatFaceData.id&&(
            <TouchableOpacity style={{ margin: 15 }} 
            onPress={()=> 
                changeFace(item.id)
               }
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          )}
        />
        <Text style={{marginTop:5,fontSize:17,color:'#B0B0B0'}}>Choose Your Fav ChatBuddy</Text>
      </View>
      <TouchableOpacity style={[{backgroundColor:selectedChatFaceData.primary}
        ,{marginTop:40,padding:17,width:Dimensions.get('screen').width*0.6,
         borderRadius:100,alignItems:'center'}]} >
        <Text style={{fontSize:16,color:'#fff'}}>Let's Chat</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
