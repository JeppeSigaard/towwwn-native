import React, { Component } from "react";
import {
  Alert,
  RefreshControl,
  StyleSheet,
  View,
  Text,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as events from "../../actions/events";
import EventListItem from "../../components/EventListItem";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
    this.onRefresh = this.onRefresh.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }

  componentDidMount() {
    this.props.getEvents({ per_page: 12, after: "now" });
  }

  onPressItem(item) {}

  onRefresh() {
    this.setState({ refreshing: true });
    this.props.getEvents({ per_page: 24, after: "now" }).then(() => {
      setTimeout(() => {
        this.setState({ refreshing: false });
      }, 200);
    });
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          data={this.props.events}
          renderItem={({ item }) => (
            <EventListItem
              onPress={this.onPressItem}
              id={item.id}
              item={item}
            />
          )}
          style={styles.list}
          keyExtractor={(item, i) => i}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f0f0f0"
  }
});

const mapState = state => ({ events: state.events });
const mapDispatch = dispatch => bindActionCreators({ ...events }, dispatch);
export default connect(mapState, mapDispatch)(Index);
