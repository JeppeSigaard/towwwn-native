import React, { Component } from "react";
import moment from "moment";
import localtime from "../modules/localtime";
import { StyleSheet, View, Text, Image } from "react-native";
moment.locale("da", localtime);
export default class EventListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    const img = item.images;
    const servedImg = img[600] || img[480] || img[320] || img.full;
    const start = moment(item.start_time);
    const now = moment();
    const delta = start.diff(now);
    const time = delta > 1 ? start.calendar() : start.fromNow();

    return (
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri: item.images[600] }} />
        <Text style={styles.title}>{item.name.toUpperCase()}</Text>
        <Text style={styles.date}>{time.toUpperCase()}</Text>
        <View style={styles.bottomBox}>
          <View style={styles.line} />
          <Text style={styles.parentName}>{item.parentname.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9"
  },
  image: {
    backgroundColor: "#333",
    height: 170
  },
  title: {
    color: "#333",
    lineHeight: 24,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  date: {
    marginLeft: 10,
    color: "#999"
  },
  bottomBox: {
    marginTop: 35
  },
  line: {
    height: 1,
    backgroundColor: "#639490"
  },
  parentName: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    color: "#639490"
  }
});
