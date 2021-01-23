import React from 'react';
import Home from './screens/Home';
import Product from './screens/Product';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
	$white: '#ffffff',
	$baseMargin: 15
	//$outline: 1,
});

export default () => (
	<Product/>
)