import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";
// import styledComponents from "styled-components";
export type Props = {
	isTrue: string
}

export default function AddInput({isTrue}:Props){
  
  // const onChangeText = (text) => {
	// 	setValue(text);
	// };


  

    return (
     
   <Button title={isTrue}>
        submit
       </Button>
  
    )
    
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

