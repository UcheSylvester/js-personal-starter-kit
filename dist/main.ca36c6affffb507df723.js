webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _userApi = __webpack_require__(3);
	
	// import {deleteUser} from './api/userApi'
	
	
	/* eslint-disable no-console */
	
	(0, _userApi.getUsers)().then(function (result) {
		var userBody = '';
		console.log(result);
	
		result.forEach(function (user) {
			userBody += '<tr>\n\t\t<td><a href="#" data-id="' + user.id + '" class="deleteUser">Delete</a></td>\n\t\t<td>' + user.id + '</td>\n\t\t<td>' + user.firstName + '</td>\n\t\t<td>' + user.lastName + '</td>\n\t\t<td>' + user.email + '</td>\n\t\t</tr>';
		});
	
		window.document.querySelector('#users').innerHTML = userBody;
	
		var deleteLinks = Array.from(document.querySelectorAll('.deleteUser'));
		console.log(deleteLinks);
	
		deleteLinks.forEach(function (link) {
			link.addEventListener('click', function (event) {
				event.preventDefault();
	
				var element = event.target;
				console.log(element);
				(0, _userApi.deleteUser)(element.attributes['data-id'].value);
				var row = element.parentNode.parentNode;
				console.log(row);
				row.parentNode.removeChild(row);
			});
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getUsers = getUsers;
	exports.deleteUser = deleteUser;
	
	__webpack_require__(4);
	
	var _baseUrl = __webpack_require__(5);
	
	var _baseUrl2 = _interopRequireDefault(_baseUrl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var baseUrl = (0, _baseUrl2.default)();
	
	function getUsers() {
		return get('users');
	}
	
	function deleteUser(id) {
		return del('users/' + id);
	}
	
	function del(url) {
		var request = new Request(baseUrl + url, {
			method: 'DELETE'
		});
	
		return fetch(request).then(onSuccess, onError);
	}
	
	function get(url) {
		return fetch(baseUrl + url).then(onSuccess, onError);
	}
	
	function onSuccess(response) {
		return response.json();
	}
	
	function onError(err) {
		console.log(err); // eslint-disable-line no-console
	}

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getBaseUrl;
	function getBaseUrl() {
		return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
	}
	
	function getQueryStringParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		    results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

/***/ }
]);
//# sourceMappingURL=main.ca36c6affffb507df723.js.map