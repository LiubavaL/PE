import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	button: {
		borderRadius: 3, 
		padding: 7,
		alignItems: 'center',
	},
	icon: {
		width: '100%',
		color: '#A5A5A5'
	},
	rounded: {
		borderRadius: 20
	},

	/* Dark Gray  */
	buttonTheme_DarkGray: {
		backgroundColor: '#212121'
	},
	labelTheme_DarkGray: {
		color: '#ffffff',
		fontFamily: 'Roboto-Medium'
	},
	/* Light */
	labelTheme_Light: {
		color: '#5E5E5E',
		fontFamily: 'Roboto'
	},
	buttonTheme_Light: {
		borderColor: '#5E5E5E',
		borderWidth: 1
	},
	/* Sizes */
	labelSize_M: {
		fontSize: 14
	},
	/* Types  */
	type_Search: {
		width: '100%',
	}
});