import React, {Component} from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class Logo extends Component {

	render(){
		const path = (this.props.url) ? { uri: this.props.url } : (this.props.src ? this.props.src : require('./images/logo_placeholder.png')),
			containerStyles = [styles.logoContainer];
		/*switch(this.props.size){
			case 'small': ;break;
		}*/
		containerStyles.push(this.props.styles);

		return (
			<View style={containerStyles}>
				<Image
					resizeMode='cover'
					fadeDuration={0}
					style={this.props.styles}
					source={path} />
			</View>	
		);
	}
}