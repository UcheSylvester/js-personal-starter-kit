import './styles.css';
import numeral from 'numeral';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');


console.log(`Soon, I will be building web apps making more than ${courseValue} from it!`);
