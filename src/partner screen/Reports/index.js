import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Questions from '../../components/Questions';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Partnertabs from '../../Navigators/PartnerTabs';
import Headerpartner from '../../components/Header-p';

const Reports = () => {
  const RenderTableContent = ({titleText}) => {
    return (
      <View>
        <Text style={styles.title}>{titleText}</Text>
        <ScrollView
          horizontal={true}
          style={{flexDirection: 'row', marginTop: hp('3')}}
          showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.tableHeaderText}>SR No.</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Candidates</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Signup Date</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Validity upto</Text>
            <Text style={styles.lableText}>LABEL TEXT</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Jobs applied</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Interviews</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Hired</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
          <View>
            <Text style={styles.tableHeaderText}>Your commision</Text>
            <Text style={styles.tableContent}>Text Cell</Text>
          </View>
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={{flex: 1, height: hp(100)}}>
      <Headerpartner />
      <ScrollView style={{backgroundColor: 'white', height: hp(100)}}>
        <View style={styles.cardContainer}>
          <Text style={styles.mainText}>Reports</Text>
          <Text style={styles.subText}>Overall activities on your account</Text>

          <View style={styles.cardSubContainer}>
            <Text style={styles.cardText}>Total members</Text>
            <Text style={styles.cardNumber}>0</Text>
          </View>
          <View style={[styles.cardSubContainer, {marginTop: hp('3.2')}]}>
            <Text style={styles.cardText}>Total Commision Earned</Text>
            <Text style={styles.cardNumber}>0.00 USD</Text>
          </View>
        </View>

        <RenderTableContent titleText={'Your Clients Report'} />
        <RenderTableContent titleText={'Your Candidates Report'} />
        <RenderTableContent titleText={'Your Partners Report'} />
        <RenderTableContent titleText={'Your Bonus'} />

        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: wp('4'),
            marginTop: hp('6'),
          }}>
          FAQ's
        </Text>
        <Questions />
        <Footer />
      </ScrollView>
      <View style={{marginBottom: hp(8), backgroundColor: 'white'}}>
        <Partnertabs />
      </View>
    </View>
  );
};

export default Reports;
