import {briefcase} from 'briefcase'

import Choo from 'choo'
import html from 'choo/html'

import mainView from 'views/main'
import homeView from 'views/home'
import contactView from 'views/contact'
import notFoundView from 'views/notFound'
import mediaView from 'views/media'
import menuStore from 'stores/menu'
import pagesStore from 'stores/pages'
console.info(`%c${briefcase}`, 'color: yellow; text-shadow: 2px 2px 5px rgba(0,0,0,0.5)')

const app = Choo()

app.use(menuStore)
app.use(pagesStore)

app.route('/', mainView.bind(null, homeView))
app.route('/media/{id}', mainView.bind(null, mediaView))
app.route('/contact', mainView.bind(null, contactView))
app.route('*', mainView.bind(null, notFoundView))

app.mount('.js-app')
