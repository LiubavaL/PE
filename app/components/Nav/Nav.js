import React, {Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class Nav extends Component {
	constructor(props){
		super(props);
	}

	_handleNavPress(){
		console.log('_handleNavPress');
	}

	getPrevNavItems(){
		let renderedItems = [];

		for(let key in this.props.items){
			let value = this.props.items[key];
			if(key !== 'subcategory'){
				renderedItems.push(
					<TouchableOpacity onPress={this._handleNavPress}>
						<Text style={styles.navBarItem}>{value}</Text>
					</TouchableOpacity>
					
				);
				renderedItems.push(
					<View style={[styles.triangle, styles.navBarSeparator]}></View>
				);				
			}
		}

		return renderedItems;
	}

	render(){
		return(
			<View style={styles.navBar}>
				{ this.getPrevNavItems() }
				<Text style={[styles.navBarItem, styles.navBarItemCurrent]}>{this.props.items.subcategory}</Text>
			</View>
		);
	}
}