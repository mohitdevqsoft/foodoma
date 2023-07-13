import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import Home from "./src/Screens/Home";
// import Home2 from "./src/Screens/Home2";
const App = () => {


//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//         // flexDirection: 'row'
//       }}
//     >
//  <StatusBar
//         animated={true}
//         backgroundColor="#61dafb"
//         // barStyle={}
//         // showHideTransition={statusBarTransition}
//         // hidden={hidden}
//       />
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'red'
//         }}
//       >

//       </View>


//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'green'
//         }}
//       >

//       </View>


//       <View
//         style={{
//           flex: 0.8,
//           backgroundColor: 'black'
//         }}
//       >

//       </View>


//       <View
//         style={{
//           flex: 1.2,
//           backgroundColor: 'yellow'
//         }}
//       >
//        <View style={{backgroundColor:"orange", flex:1}}>

//        </View>

//         <View style={{backgroundColor:"blue", flex:1}}>

//        </View>

//       </View>


//     </View>
//   )
  return (
    <View style={{ flex: 1 }}>
      <Home />
      {/* <Home2/> */}
    </View>
  )
}

export default App;
