import React, { useEffect } from 'react';
import {Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './SaveTaxStyle'

const SaveTaxScreen = (props) => {

    const navigateToPreviousScreen = () => {
      props.navigation.goBack()
    }

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
            onPress={navigateToPreviousScreen}
            style={styles.backArrow}>
            <Image
              style={styles.backImg}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
        <Image
          source={require('../../assets/saveTax.jpeg')}
          style={styles.img}
          resizeMode={'stretch'}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 50, marginTop: 8}}>{`SAVE TAX \nUP TP ₹78,000`}</Text>
        <Text style={{fontSize: 12, marginLeft: 50, marginTop: 8, marginRight: 50}}>{`Invest in ELSS, NPS, Term and Health Insurance. Get instant proofs.`}</Text>
        <TouchableOpacity style={{backgroundColor: '#339e7b', justifyContent: 'center', alignItems: 'center', margin: 20, height: 40, borderRadius: 4, width: '90%', position: 'absolute', bottom: 10}}>
          <Text style={{color: '#FFF'}}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

export default  React.memo(SaveTaxScreen);