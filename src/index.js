import './styles.css';
import {getUsers} from './api/userApi.js';


/* eslint-disable no-console */

getUsers().then(result => {
	let userBody = '';
	console.log(result)

	result.forEach(user => {
		userBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
	});

	document.querySelector('#users').innerHTML = userBody;
})
