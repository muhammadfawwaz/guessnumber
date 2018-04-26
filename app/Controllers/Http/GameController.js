'use strict'

class GameController {
    async index({ view }) {
        return view.render('main')
    }

    async guess({ request, response, session }) {
        const num = request.input('number')

        const random = Math.floor(Math.random() * 10)
        
        if(!num) {
            var result = 'Fill the number'
        }
        else {
            if(num == random) {
                var result = 'Your number is right'
            }
            else {
                var result = 'False. The right number is ' + random
            }
        }

        session.flash({
            notification: result,
            random: random
        })

        return response.redirect('/')
    }

}

module.exports = GameController
