import React, { Component } from 'react';
import { MapView } from 'expo';
import {
	Text, 
	View, 
	Image
} from 'react-native';
import { Logo } from '../Logo';
import styles from './styles';

export default class CustomMap extends Component {
	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			markers: [
		        {
		          latitude: 53.9046754,
		          longitude: 27.5609406,
		          icon: 'bigzz',
		          title: '2.70'
		        },
		        {
		          latitude: 53.903681,
		          longitude:  27.566145,
		          icon: 'rublevski', 
		          title: '3.38'
		        },
		     ]
		}
	}

	componentDidMount(){
		this.setState({
			isLoading: false
		})
	}

	render(){
		const propStyles = this.props.styles;


		return(
			<MapView
				style={propStyles}
				initialRegion = {{
					latitude: 53.9042401,
		            longitude: 27.564131,
		            latitudeDelta: 0.005,
		            longitudeDelta: 0.005,
				}}
			>
			{this.state.mapLoading ? null :
	        this.state.markers.map((marker, index) => {
	          const coords = {
	            longitude: marker.longitude,
	            latitude: marker.latitude
	          };
	          let src = '';

	          switch(marker.icon){
	            case 'bigzz': 
	              src = require('../../../assets/logos/bigzz.jpg');
	              break; 
	            case 'rublevski':  
	              src = require('../../../assets/logos/rublevski.jpg');
	              break;
	            case 'sosedi': 
	              src = require('../../../assets/logos/sosedi.jpg'); 
	              break;
	            case 'korona': 
	              src = require('../../../assets/logos/korona.jpg');
	              break;
	           default: 
	              src = require('../../../assets/logos/placeholder.png');
	              break;
	          } 

	          return (
	            <MapView.Marker
	              key={index}
	              coordinate={coords}
	              title={marker.title}
	            >
	              <View style={{flexDirection: 'row'}}> 
	                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 3}}>
	                	<Logo src={src} styles={{width: 18, height: 18}}/>
	                </View> 
	                <Text style={styles.price}>{marker.title}</Text>
	              </View>
	            </MapView.Marker>
	          )
	        })}
			</MapView>
		);
	}
}