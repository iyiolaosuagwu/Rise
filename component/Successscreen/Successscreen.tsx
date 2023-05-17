import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Custombtn from '../Custombtn/Custombtn'
import Successcheckicon from '../../assets/icons/Successcheckicon'


const Successscreen = ({navigation, route}) => {

    const {title, info, nextScreenName, btnText} = route.params


    let navigateToNext = () => {
        navigation.navigate(nextScreenName)
    }

  return (
    <View style={{flex: 1, paddingBottom: 100, paddingHorizontal: 20}}>
      <View style={{flex: 1,  justifyContent: "center", alignItems: "center"}}>
            <View style={{width: 90, height: 90, backgroundColor: "rgba(113, 135, 156, 0.1)", borderRadius: 90/2, justifyContent: "center", alignItems: "center"}}>
                <Successcheckicon />
            </View>
            <Text style={{marginTop: 33, marginBottom: 10, fontSize: 20, fontFamily: "DMregular", paddingHorizontal: 80, textAlign: "center", color: "#222222"}}>{title}</Text>
            <Text style={{fontSize: 15, fontFamily: "DMregular", color: "#71879C"}}>{info}</Text>
      </View>
      <Custombtn btnText={btnText} btnAction={navigateToNext}/>
    </View>
  )
}

export default Successscreen

const styles = StyleSheet.create({})