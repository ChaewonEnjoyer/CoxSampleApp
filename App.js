import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isShowingImage, setShowingImage] = React.useState(false)
  let data = "WOW";
  let counter = 0;

  const get_num= () =>{
    counter++;
    console.log(counter)  
  }
  
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Employee ID"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
        </View> 
      </View>
      {
        isShowingImage ?
        (
          <Image 
          style={{ width: 250, height: 250 }}
          source={{uri: `https://api.qrserver.com/v1/create-qr-code/?data=${this.data}&size=100x100`}}
        />
         ) : (
      <Button
        onPress={() => {setShowingImage(true); this.data=password; get_num;}}
        // onPress{() => { this.functionOne(); this.functionTwo();}}
        title="Click me"
        color="#841584"
      /> )
      }
      <StatusBar style="auto" />
      <TextInput
          style={styles.inputView}
          placeholder="Current Rank #1"
          placeholderTextColor="#003f5c"
          textAlign='center'
          secureTextEntry={true}
        /> 
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: "#fff",
      alignItems: "center",
      margin:10,
      marginBottom:10,
      justifyContent: "center",
    },
    image: {
      marginBottom: 80,
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 30,
      marginBottom: 100,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });
