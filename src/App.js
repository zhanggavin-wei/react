import React from 'react';
import '@/assets/style/common.scss'
import { fetchCnodeList } from './utils/api.js'

//路由
import { HashRouter } from 'react-router-dom'


//
import QfLayOut from '@/components'

//状态管理
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    let params = {
      tab: '',
      page: 1,
      limit: 5
    }
    fetchCnodeList(params).then(res => {
      console.log('res', res)
    })
  }



  render() {

    return (
      <HashRouter>
        <Provider store={store}>
          <div className="App">
              <QfLayOut></QfLayOut>
          </div>
        </Provider>
      </HashRouter>
    );
  }

}
