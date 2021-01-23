import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class Block extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const containerStyles = [styles.container];
		containerStyles.push(this.props.styles); 

		return(
			<View style={containerStyles}>
				{this.props.children}
			</View>
		);
	}
}