import React from 'react';
import {AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';

const places = [
  {title: 'Living Room', image: 'great-room.jpg'},
  {title: 'Master', image: 'bedroom1.jpg'},
  {title: 'Theater', image: 'theater.jpg'},
  {title: 'Garden', image: 'island-garden.jpg'},
  {title: 'Home', image: 'home.jpg'}

];

export default class WorldTour extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      place: 'home.jpg'
    }
  }

  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.place)}/>
        <View
          style={styles.menuButton}
          onEnter={() => this.toggleMenu()}
        >
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
        {
          this.state.showMenu ?
            <View style={styles.menu}>
              {
                places.map((place, index) => {
                  return (
                    <View
                      style={styles.menuItem}
                      key={index}
                      onEnter={() => this.setState({place: place.image})}
                    >
                      <Text style={styles.menuItemText}>{place.title}</Text>
                    </View>
                  )
                })
              }
            </View>
          :
            <View></View>
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      {translate: [-2, 0, -7.5]}
    ]
  },
  menuButton: {
    backgroundColor: 'skyblue',
    borderRadius: .25,
    width: 0.6,
    height: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .8,
    transform: [
      {translate: [-2, 0, -5]}
    ]
  },
  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: 'black'
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    borderRadius: 0.5,
    backgroundColor: 'white',
    opacity: .8
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: 'black',
    paddingLeft: .2
  }
})

AppRegistry.registerComponent('WorldTour', () => WorldTour);
