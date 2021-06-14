/* eslint-disable linebreak-style */
import {$} from '../dom'
// import {ActiveRoute} from './ActiveRoute'

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector in not provideed in Router')
    }
    this.$placeholder = $(selector)
    this.routes = routes

    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler() {
    const Page = this.routes.excel
    const page = new Page()
    this.$placeholder.append(page.getRoot())
  }

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}
