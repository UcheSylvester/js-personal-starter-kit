/*
This file contains references to the vendor libaries we're using in this project.
This is used by webpack in the production build only.
A seperate bundle for vendor code is useful as it's unlikely to change as often as
the application's (index.js) code.
So all the libaries we reference to here will be written to vendor.js
so they can be cached until one of them change.
so basically, this avoids customers having to download a huge JS file anytime a line
of code changes. The only have to download vendor.js when a vendor libary changes
which should be less frequent. Any files that aren't referenced here will be bundled
into main.js for the production build
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
