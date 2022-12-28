import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BackHeaderBar from '../../components/Backheader';
import SearchInput from '../../components/SearchInput';
import Colors from '../../Theme/Colors';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
const data = [
  {
    title: 'Advertising',
    id: 1,
  },
  {
    title: 'Agriculture',
    id: 2,
  },
  {
    title: 'Design',
    id: 3,
  },
  {
    title: 'Beverages',
    id: 4,
  },
  {
    title: 'Internet',
    id: 5,
  },
  {
    title: 'Education',
    id: 6,
  },
  {
    title: 'Engineering',
    id: 7,
  },
  {
    title: 'Development',
    id: 8,
  },
  {
    title: 'Medical',
    id: 9,
  },
];

export default function PreferredIndustry() {
  const [selectedData, setSelectedData]: any = useState([]);
  const selectedValue = (item: any) => {
    setSelectedData([...selectedData, item]);
  };
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <BackHeaderBar middle={'Preferred Industry'} lastTxt={'Done'} />
      <View style={{paddingHorizontal: 25}}>
        <SearchInput />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FlatList
            data={selectedData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.selectedValue}>
                <Text style={styles.txt}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    var _selectedData = selectedData.filter(
                      _item => _item?.id !== item?.id,
                    );

                    console.log(selectedData);
                    setSelectedData(_selectedData);
                  }}
                  style={{marginLeft: 10}}>
                  {getIcons(Icons.BLACKCROSS, wp(3))}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View style={{marginTop: wp(10)}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => selectedValue(item)}>
                <Text
                  style={[styles.txt, {paddingVertical: 10, marginRight: 20}]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: CommonStyle(15, 18.15, Colors.Black, '400'),
  selectedValue: {
    borderWidth: 1,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.lightGreen,
    borderColor: Colors.Blue,
    margin: 10,
    padding: 10,
  },
});
