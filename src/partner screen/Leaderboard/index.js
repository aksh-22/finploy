import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Card from "../../components/Card"
import Footer from "../../components/Footer";
import Questions from "../../components/Questions";
import { colors } from "../../Utils/colors";

const Leaderboard = () => {
    const data = [
        {
            rank: '1',
            members: 'Mustafa',
            earnings: '200,00,00'
        },
        {
            rank: '2',
            members: 'Mustafa',
            earnings: '200,00,00'
        },
        {
            rank: '3',
            members: 'Mustafa',
            earnings: '200,00,00'
        },
        {
            rank: '4',
            members: 'Mustafa Abc',
            earnings: '200,00,00'
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, paddingHorizontal: 12, paddingVertical: 21, alignItems: 'center' }}>
                <View style={{ flex: 0.2, }}>
                    <Text style={styles.blueText}>#{item.rank}</Text>
                </View>

                <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 32, width: 32, borderRadius: 25 }}
                            source={require('../../Assets/image1.png')}
                        />
                        <Text style={[styles.blueText,{ marginLeft: 15 }]}>{item.members}</Text>
                    </View>
                    <Text style={styles.blueText}>₹   {item.earnings}</Text>
                </View>
            </View>
        )
    }
    return (
        <ScrollView>
            <View>
                <Card headerText={'Talents'} text={'Find jobs fort his talents  and earn upto 7 crore commison'} url={require('../../Assets/card1.png')} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.cardBg,marginHorizontal: 16, paddingHorizontal: 12, paddingVertical: 12, alignItems: 'center',marginTop:55 }}>
                    <View style={{ flex: 0.2, }}>
                        <Text style={styles.text}>Rank</Text>
                    </View>

                    <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.text}>Members</Text>
                        </View>
                        <Text style={styles.text}>Earnings</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 16, marginTop: 48 }}>FAQ's</Text>
                <Questions />
                <Footer />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    blueText:{
        color:colors.blue
    }
})
export default Leaderboard;