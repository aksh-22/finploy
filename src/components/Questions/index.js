import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Questions = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.question}>What is the Referral Program?</Text>
            <Text style={styles.answer}>An OptimHire.com Referrer is an individual or company that partners with OptimHire.com to help promote our website to their audience. We provide marketing banners, tracking links, videos, and create exclusive promotions to help you out.
                As a Referrer, you'll earn a revenue share of the Referral Fee after a successful hire.
            </Text>

            <Text style={styles.question}>How much Referral can I earn?</Text>
            <Text style={styles.answer}>Signing a new client or candidate: You will earn 50% of the revenue that Optimhire makes as your commission on all successful hires, within six months from the date of signup via your referral link.
                Bring an inactive* client or candidate: You will earn 25% of the revenue that OptimHire makes as your commission on all successful hires, within three months from the date of re-login at OptimHire.com via your referral link.
            </Text>
            <Text>*An inactive client or candidate is an existing user who hasn’t logged in the past 90 days.</Text>

            <Text style={styles.question}>What is a Referral Fee?</Text>
            <Text style={styles.answer}>For each Job posting, Client decides a Referral Fee to pay on successful hire.</Text>
            <Text style={{marginTop:10}}>Where can I see the status of my referrals?
                After you log in, you can go to the “My Report” tab on the left-side menu.
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    question: {
        fontWeight: 'bold',
        marginTop: 10
    },
    answer: {
        marginTop: 20
    }

});

export default Questions;