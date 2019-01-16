import {expect} from 'chai';
// importing jsdom for accessing the DOM
import jsdom from 'jsdom';
// import the file management system to be able to select the DOM elements
import fs from 'fs';

describe('my first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	})
})


describe('check for hello world', () => {
	it('should contain hello world', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, function(err, window) {
			const h1 = window.document.querySelector('h1');
			expect(h1.innerHTML).to.equal('Hello World!');
			done()
			window.close()
		})
	})
})
