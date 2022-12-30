import {ScrollView, Text, View} from 'react-native';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Questions from '../../components/Questions';
import {useRequest} from '../../hooks/useRequest';
import {hp} from '../../Theme/Dimensions';
import JobItem from './JobItem';
import TableHead from './TableHead';
import {getAllJobs} from './../../api/partner/jobs.service';
import {useEffect, useState} from 'react';
import {jobsElementItemType} from '../../../typings/jobs-data-type';
import SearchJobBox from './SearchJobBox';

const Jobs = () => {
  const [jobs, setJobs] = useState<Array<jobsElementItemType>>([]);

  const onSuccess = (fetchedData: any) => {
    console.log(
      'fetchedData',
      JSON.stringify(fetchedData.data.jobList, null, 2),
    );
    setJobs(fetchedData.data.jobList);
  };

  const {isLoading, sendRequest} = useRequest({api: getAllJobs, onSuccess});

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <View style={{flex: 1, height: hp(100), backgroundColor: 'white'}}>
      <ScrollView style={{backgroundColor: '#FFFFFF', height: hp(100)}}>
        <View>
          <Card
            headerText={'Jobs'}
            text={
              'Find talents for these jobs and earn upto 75 Crore in commisions'
            }
            url={require('../../Assets/card1.png')}
          />
          <SearchJobBox />
          <TableHead />
          {jobs?.map((el, index) => (
            <JobItem data={el} key={index} />
          ))}
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 16,
              marginTop: 48,
            }}>
            FAQ's
          </Text>
          <Questions />
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};

export default Jobs;
