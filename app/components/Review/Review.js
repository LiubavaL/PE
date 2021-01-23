import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { StarRating } from '../StarRating';
import { IconButton } from '../Button';
import { Logo } from '../Logo';
import styles from './styles';

export default class Review extends Component{
	render(){
		return(
			<View>
				<View style={styles.row}>
					<Text style={{color: '#303030', fontFamily: 'Roboto-Bold', fontSize: 16 }}>{this.props.title}</Text>
					<Text>{this.props.date}</Text>
				</View>
				<View style={styles.row}>
					<StarRating theme='gray' rating={this.props.rating} hideNumber="true"/>
					<Text>{this.props.author}</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{marginRight: 5}}>
						<View style={{alignItems: 'center'}}>
						<Logo src={this.props.avatar} styles={{width: 40, height: 40}}/>
						<View style={styles.ratingBarWrapper}>						
							<Text style={styles.ratingBar}>{this.props.rating}</Text>
						</View>
					</View>
					</View>
						<Text style={styles.content}>{this.props.content}</Text>
					
				</View>
				<View  style={[styles.row, { marginTop: 10 }]}>
					<View style={{width: 80, flexDirection: 'row',  justifyContent: 'space-between'}}>
						<View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
							<View style={{marginRight: 5}}>
								<IconButton size={14} icon="thumbs-up"/>						
							</View>
							<Text style={styles.thumbCount}>{this.props.agreed}</Text>					
						</View>
						<View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
							<View style={{marginRight: 5}}>
								<IconButton size={14} icon="thumbs-down"/>
							</View>
							<Text style={styles.thumbCount}>{this.props.disagreed}</Text>					
						</View>
					</View>					
					<View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
						<Text style={styles.thumbCount}>{this.props.replies}</Text>
						<View style={{marginLeft: 5}}>
							<IconButton size={14} icon="message-square"/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}