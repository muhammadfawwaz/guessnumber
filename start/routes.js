'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

// Route.get('/', ({request}) => {
//     const num = request.input('number');

//     if(!num) {
//         return 'Please fill the number. Hope that number will be matched'
//     }

//     const random = Math.floor(Math.random() * 1000);

//     if(num === random) {
//         return 'What the heck you was fill the right number. Congratulations'
//     }
//     else {
//         return 'It is not the right number. The right number is ' + random
//     }
// })
Route.get('/', 'GameController.index')

Route.post('/', 'GameController.guess')