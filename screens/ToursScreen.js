import React, { useEffect, useState } from "react";
import { Image, ScrollView, Dimensions } from "react-native";

import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  Animated,
  View,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import PagerView from "react-native-pager-view";
import { color, onChange } from "react-native-reanimated";
import CategoryScreen from "./CategoryScreen";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const ToursScreen = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [schedules, setSchedules] = useState(true);
  const [imgAddress, setImgAddress] = useState([]);
  const [infoShedules, setInfoShedules] = useState([]);
  const [infoPackages, setInfoPackages] = useState([]);
  const images = [];

  const id = route.params.paramKey;
  const getCategory = async () => {
    fetch("http://194.36.191.166/api/v1/tours/" + id)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        if (!json.schedules[0]) {
          setSchedules(false);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCategory();
  }, []);
  function BookingElement() {
    if (schedules)
      return (
        <>
          <View style={styles.price_container}>
            <Text style={styles.price}>
              {data.schedules[0].price} ₽ {"\n"}
              <Text style={styles.price_text}>с человека</Text>
            </Text>
            <Button style={styles.zabron}>
              <Text style={styles.zabron_text}>Забронировать</Text>
            </Button>
          </View>
        </>
      );
    return (
      <>
        <View style={styles.price_container}>
          <Text style={styles.warn}>
            На данный момент {"\n"}
            нет тура в расписании
          </Text>
          <Button style={styles.zabronDisenabled} disabled>
            <Text style={styles.zabron_text}>Забронировать</Text>
          </Button>
        </View>
      </>
    );
  }
  return (
    <SafeAreaView style={styles.Area}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView
            style={styles.Scroll}
            showsVerticalScrollIndicator={false}
          >
            <PagerView
              // onScroll={({nativeEvent}) => onChange(nativeEvent)}
              style={styles.wrap}
              initialPage={0}
            >
              {data.images.map((e, index) => (
                <View key={index} collapsable={false}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: "http://194.36.191.166/storage/" + e.image_name,
                    }}
                  />
                </View>
              ))}
            </PagerView>

            {/* <View style={styles.wrapDot}>
                {
                  images.map((e, index) => 
                  <Text 
                  key={e} 
                  style={imgActive == index ? styles.dotActive : styles.dot}>
                    ●
                  </Text>)
                }
              </View> */}
            <View style={styles.ItemContent}>
              <Text style={styles.LinkText_}>Название</Text>
              <Text style={styles.LinkText}>{data.title}</Text>
              <Text style={styles.LinkText_}>Размещение:</Text>
              <Text style={styles.LinkText}>{data.accommodation}</Text>
              <Text style={styles.LinkText_}>Место сбора:</Text>
              <Text style={styles.LinkText}>{data.place}</Text>
              <Text style={styles.LinkText_}>Описание:</Text>
              <Text style={styles.LinkText__}>{data.description}</Text>
              <BookingElement></BookingElement>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LinkText: {
    fontSize: 20,
    paddingTop: "5%",
    color: "#001B36",
    lineHeight: 26,
    right: 0,
    width: 350,
  },
  ItemContent: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
  },
  Area: {
    flex: 1,
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  LinkText_: {
    fontSize: 22,
    paddingTop: "10%",
    paddingBottom: 0,
    fontWeight: "bold",
    color: "#001B36",
    lineHeight: 22,
    right: 0,
    width: 380,
  },
  zabron: {
    backgroundColor: "#ECBE00",
    marginTop: "10%",
    right: 0,
    color: "white",
    borderRadius: 28,
    padding: 10,
    left: "5%",
  },
  zabronDisenabled: {
    backgroundColor: "grey",
    marginTop: "10%",
    marginBottom: 150,
    right: 0,
    color: "white",
    borderRadius: 28,
    padding: 10,
    left: "5%",
  },
  zabron_text: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 18,
  },
  LinkText__: {
    fontSize: 22,
    paddingTop: "5%",
    color: "#001B36",
    lineHeight: 30,
    right: 0,
  },
  price: {
    fontWeight: "700",
    fontSize: 25,
    color: "#00274E",
    marginTop: "10%",
    left: 5,
  },
  price_text: {
    fontSize: 22,
  },
  warn: {
    color: "#00274E",
    marginTop: "10%",
    fontSize: 18,
  },
  container: {
    backgroundColor: "white",
    alignItems: "flex-start",
    // height: '100%',
  },
  price_container: {
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "flex-start", // ignore this - we'll come back to it
    flexDirection: "row",
    marginBottom: 20
  },
  img: {
    left: 0,
    alignSelf: "center",
    paddingTop: 10,
    width: "100%",
    height: "100%",
  },
  wrap: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT * 0.35,
  },
  // wrapDot: {
  //   position: 'absolute',

  //   flexDirection: 'row',
  //   alignSelf: 'center'
  // },
  // dotActive: {
  //   margin: 3,
  //   color: 'black'
  // },
  // dot: {
  //   margin: 3,
  //   color: 'white'
  // }
});

export default ToursScreen;
