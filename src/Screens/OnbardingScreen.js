import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../Theme/Colors';
import {english} from '../Theme/string';
function OnbardingScreen({navigation}) {
  const scrol = useRef();
  const [index, setindex] = useState(0);
  //   useEffect(() => {
  //     scrol.current?.scrollToIndex(
  //       {
  //         index,
  //         animated: true,
  //         viewPosition: 0.2,
  //       },
  //       [index],
  //     );
  //   }, []);
  const arr = [1, 2, 3, 4, 5];
  const Page = ({data}) => {
    return (
      <View>
        <View style={styles.page}>
          <Text>{data}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={scrol}
        contentContainerStyle={styles.scrollContent}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={e => setindex(e.nativeEvent.contentOffset.x)}
        data={arr}
        renderItem={({item, index}) => <Page data={item} />}></FlatList>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={index == 0 ? styles.btn2 : styles.btn}
        />
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={Math.floor(index) == 340 ? styles.btn2 : styles.btn}
        />
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={Math.floor(index) == 680 ? styles.btn2 : styles.btn}
        />
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={Math.floor(index) == 1020 ? styles.btn2 : styles.btn}
        />
        <TouchableOpacity
          onPress={() => console.warn('pressed')}
          style={Math.floor(index) == 1360 ? styles.btn2 : styles.btn}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace('login')}
        style={styles.skipBtn}>
        <Text style={{color: 'white'}}>{english.SkipNow}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.Black,
  },

  scrollContent: {justifyContent: 'center', alignItems: 'center'},
  page: {
    width: Dimensions.get('screen').width - 20,
    height: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    marginBottom: -110,
  },
  btn: {
    width: 30,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 10,
  },
  btn2: {
    width: 30,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    marginRight: 10,
  },
  skipBtn: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
});
export default OnbardingScreen;
