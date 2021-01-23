import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	ratingBarWrapper: {
		width: 30,
		position: 'relative',
		bottom: 12,		
		marginBottom: -12,
		backgroundColor: '#8BCD6F',
		alignItems: 'center'
	},
	ratingBar: {
		color: '$white',
		fontFamily: 'Roboto-Medium',
		fontSize: 12
	},
	thumbCount: {
		color: '#A5A5A5',
		fontFamily: 'Roboto',
		fontSize: 14
	},
	content: {
		width: '90%',
		fontFamily: 'Roboto',
		fontSize: 15,
		lineHeight: 18,
		color: '#6E6E6E'
	}
});