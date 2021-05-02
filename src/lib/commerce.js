import Commerce from '@chec/commerce.js';
//require('dotenv').config()
//console.log(process.env)

export const commerce = new Commerce(process.env.REACT_APP_COM_KEY,true);


//