import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import JobBanner from '../../components/Banners/JobBanner';

export default function AllTab() {
  return (
    <ScrollView style={{flex: 1}}>
      <JobBanner />
      <JobBanner />
      <JobBanner />
      <JobBanner />
    </ScrollView>
  );
}
