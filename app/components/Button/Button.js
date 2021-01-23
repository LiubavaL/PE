import React, {Component} from 'react';
import {Text, TouchableOpacity} from  'react-native';
import styles from './styles';

export default class Button extends Component{
	render(){
		let buttonStyles = [this.props.styles, styles.button],
			labelStyles = [styles.labelSize_M];

		switch(this.props.theme){
			case 'darkGray':
				buttonStyles.push(styles.buttonTheme_DarkGray);
				labelStyles.push(styles.labelTheme_DarkGray);
				break;
			case 'light':
				buttonStyles.push(styles.buttonTheme_Light);
				labelStyles.push(styles.labelTheme_Light);
				break;
		}
		if(this.props.rounded){
			buttonStyles.push(styles.rounded);
		}

		return (
			<TouchableOpacity style={buttonStyles} onPress={this.props.onPress}>
				<Text style={labelStyles}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
}