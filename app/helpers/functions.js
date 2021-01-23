export function max(array){
	if(array.length > 0){
		let max = array[0];

		for (let value of array){
			if(value > max){
				max= value;
			}
		}	
		return max;	
	}

	return null;
}

export function getImageByAlias(alias){
	let src = '';

	switch(alias){
	    case 'bigzz': 
	      src = require('../../assets/logos/bigzz.jpg');
	      break; 
	    case 'rublevski':  
	      src = require('../../assets/logos/rublevski.jpg');
	      break;
	    case 'sosedi': 
	      src = require('../../assets/logos/sosedi.jpg'); 
	      break;
	    case 'korona': 
	      src = require('../../assets/logos/korona.jpg');
	      break;
	   default: 
	      src = require('../../assets/logos/placeholder.png');
	      break;
	  }

	return src;
}