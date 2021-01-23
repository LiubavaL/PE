import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default class IconButton extends Component {
	getSize(){
		return (this.props.size) ? this.props.size : 28;
	}

	render(){
		return (
			<TouchableOpacity onPress={this.handleSearch} style={[styles.type_Search, this.props.styles]}>
				<Feather name={this.props.icon} size={this.getSize()} style={styles.icon}/>
			</TouchableOpacity>
		)
	}
}
