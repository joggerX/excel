/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import {Router} from './core/routes/Router'
import {DashboardPage} from './pages/DashboardPage'
import {ExcelPage} from './pages/ExcelPage'
import './sass/index.sass'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage
})


