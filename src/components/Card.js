import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default Card=({img, title, price, count, inc, id})=>{
    return(
        <View style={styles.item} key={id}>
        <Image source={img} />
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{price}</Text>
          <View
            style={{
              flexDirection: 'row',
              borderColor: '#D7D7D7',
              borderWidth: 1,
              elevation: 1,
            }}>
            <TouchableOpacity
            // style={{borderColor: '#D7D7D7', borderWidth: 1, elevation: 1}}
            >
             <Text>{count===0?'BESTEL':count} </Text>
            
            </TouchableOpacity>
            <TouchableOpacity onPress={inc}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )

      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          //  flexDirection:'row'
        },
        item: {
          
          marginTop: '5%',
          // marginLeft: '6%',
        }
    })