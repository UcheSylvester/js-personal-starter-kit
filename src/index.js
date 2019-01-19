import './styles.css';
import {getUsers, deleteUser} from './api/userApi';
// import {deleteUser} from './api/userApi'


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

	window.document.querySelector('#users').innerHTML = userBody;

	const deleteLinks = Array.from (document.querySelectorAll('.deleteUser'));
	console.log(deleteLinks)

	deleteLinks.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();

			const element = event.target;
			console.log(element)
			deleteUser(element.attributes['data-id'].value);
			const row = element.parentNode.parentNode;
			console.log(row);
			row.parentNode.removeChild(row);

		})
	})

})
