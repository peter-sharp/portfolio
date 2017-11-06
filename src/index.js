import {briefcase} from 'briefcase'

import Choo from 'choo'
import html from 'choo/html'

import homeView from 'views/main'
console.info(`%c${briefcase}`, 'color: yellow; text-shadow: 2px 2px 5px rgba(0,0,0,0.5)')

const app = Choo()

app.route('/', homeView)

app.mount('.js-app')
