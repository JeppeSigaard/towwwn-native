import React, { Component } from "react";
import { View } from "react-native";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { connect } from "react-redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import { Provider } from "react-redux";

import HomeScreen from "./home/index";
import EventListScreen from "./event-list/index";
import EventSingleScreen from "./event-single/index";
import LocationCategoryScreen from "./location-categories/index";
import LocationListScreen from "./location-list/index";
import LocationSingleScreen from "./location-single/index";

const AppNavigator = StackNavigator({
  Home: {
    screen: EventListScreen
  },
  EventList: {
    screen: EventListScreen
  },
  EventSingle: {
    screen: EventSingleScreen
  },
  LocationCategories: {
    screen: LocationCategoryScreen
  },
  LocationList: {
    screen: LocationListScreen
  },
  LocationSingle: {
    screen: LocationSingleScreen
  }
});

const nav = createReactNavigationReduxMiddleware("root", state => state.nav);
const addListener = createReduxBoundAddListener("root");

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Home")
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

const appReducer = combineReducers({
  ...rootReducer,
  nav: navReducer
});

const store = createStore(
  appReducer,
  { nav: initialState },
  applyMiddleware(thunk, nav)
);

class NavigatorBase extends Component {
  render() {
    const { nav, dispatch } = this.props;
    console.log(nav);
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({ nav: state.nav });
const Navigator = connect(mapStateToProps)(NavigatorBase);

const Root = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default Root;
