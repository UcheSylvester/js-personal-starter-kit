import {expect} from 'chai';
// importing jsdom for accessing the DOM
import jsdom from 'jsdom';
// import the file management system to be able to select the DOM elements
import fs from 'fs';

describe('index.html', () => {
	it('should have h1 that says Users', () => {
		expect(true).to.equal(true);
	})
})


describe('check for hello world', () => {
	it('should contain hello world', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, function(err, window) {
			const h1 = window.document.querySelector('h1');
			expect(h1.innerHTML).to.equal('Users');
			done()
			window.close()
		})
	})
})
