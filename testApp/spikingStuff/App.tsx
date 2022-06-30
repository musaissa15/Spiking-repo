import { StatusBar } from 'expo-status-bar';
// import WixCalendar from './components/WixCalendar';
import { Agenda,  } from 'react-native-calendars';
import {View} from 'react-native';
import AddInput from './components/AddInput';
import React, { useState } from 'react';
import Schedule from './components/Schedule';



export default function App()  {
	
 const [isTrue, setIsTrue] = useState('HELLO')
 
 

	return (
	
		<View>
			<Schedule/>
		</View>
)
	
}


