import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import BottomNavBar from '../../Components/BottomNavBar'
import Colors from '../../Constants/Colors'
import Iconborder from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import TopBar from '../../Components/TopBar';


const UserProfile = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <TopBar navigation={navigation} headerText={"user profile"} />
      <View style={styles.userDetailsContainer}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userAvatar}
            source={require("../../assets/images/index.png")}
          />
          <Text style={{ color: Colors.color1, fontSize: 20 }}>Name</Text>
          <Text style={{ color: Colors.color3 }}>@userName</Text>
        </View>
        <View style={styles.followerDetails}>
          <View>
            <Text style={styles.followNumbers}>80K</Text>
            <Text style={styles.followText}>Followers</Text>

          </View>
          <View>
            <Text style={styles.followNumbers}>1K</Text>
            <Text style={styles.followText}>Following</Text>

          </View>
          <View>
            <Text style={styles.followNumbers}>50</Text>
            <Text style={styles.followText}>Posts</Text>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[styles.userPosts, { alignItems: "flex-start" }]}
      >
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
        <Image
          style={styles.ImageGrid}
          source={require("../../assets/images/index.png")}
        />
      </ScrollView>
    </View>
  )
}

export default UserProfile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  Chaticon: {
    marginHorizontal: "3%",
    padding: 5,
  },
  userDetailsContainer: {
    // marginTop: 20,
    height: "40%",
    backgroundColor: "white",
  },
  userPosts: {
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 3,
    // height: "50%",
    // flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomContainer: {
    height: "45%",
    backgroundColor: "green",
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  pressed: {
    opacity: 0.5,
  },
  userInfo: {
    flex: 2,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  followerDetails: {
    flex: 1,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
  },
  userAvatar: {
    width: "30%",
    height: "55%",
    borderRadius: 200,
    borderColor: Colors.color2,
    borderWidth: 1,
    resizeMode: "contain"
  },
  followNumbers: {
    color: Colors.color1,
    fontSize: 20,
    alignSelf: 'center'
  },
  followText: {
    fontSize: 15,
    color: Colors.color3
  },
  ImageGrid: {
    width: "33.3%",
    height: "33.3%",
    borderColor: Colors.color01,
    borderWidth: 1,
    resizeMode: "contain"
  }

})