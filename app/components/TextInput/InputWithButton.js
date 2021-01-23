import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from './styles';

export default class InputWithButton extends Component {
	constructor(props){
		super(props);
		this.state = { text: 'Поиск'};
	}

	render(){
		return (
			<View style={styles.inputContainer}>
				<TextInput 
					style={styles.input}
					underlineColorAndroid="transparent"
					onChangeText={(text) => this.setState({text})}
					value={this.state.text} 
				/>  
				{this.props.children}
			</View> 
		);
	}
}