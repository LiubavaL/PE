import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: { 
		borderWidth: 1, 
		borderRadius: 10, 
		borderColor: '#ddd', 
		shadowColor: '#000', 
		shadowOffset: {width: 0, height: 10}, 
		shadowOpacity: 0.8, 
		shadowRadius: 3,
		padding: 10,
		backgroundColor: '#ffffff',
		elevation: 1, 
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}
});