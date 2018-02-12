import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import EventList from "./event-list";
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableHighlight
} from "react-native";

import HomeScreen from "./home/index";
import EventListScreen from "./event-list/index";
import EventSingleScreen from "./event-single/index";
import LocationCategoryScreen from "./location-categories/index";
import LocationListScreen from "./location-list/index";
import LocationSingleScreen from "./location-single/index";

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const MainBase = () => (
  <View style={style.root}>
    <View style={style.header}>
      <StatusBar barStyle="light-content" />
    </View>
    <View style={style.main}>
      <EventListScreen />
    </View>
    <View style={style.footer}>
      <View style={style.icons}>
        <Text style={style.icon}>Begivenheder</Text>
        <Text style={style.icon}>Steder</Text>
      </View>
    </View>
  </View>
);

const Main = () => {
  return (
    <Provider store={store}>
      <MainBase />
    </Provider>
  );
};
export default Main;

const style = StyleSheet.create({
  root: {
    flex: 1
  },
  header: {
    height: 22,
    backgroundColor: "#333"
  },
  main: {
    flex: 1
  },
  logoContainer: {
    marginTop: 8,
    marginLeft: 10
  },
  logo: {
    height: 30,
    width: 30
  },
  footer: {
    height: 52,
    backgroundColor: "#f0f0f0"
  },
  icons: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    height: 52,
    lineHeight: 52,
    textAlign: "center",
    flex: 1
  }
});
