/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import {Excel} from '@/components/excel/Excel'
import {Formula} from '@/components/formula/Formula'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Table} from '@/components/table/Table'

import './sass/index.sass'
const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()