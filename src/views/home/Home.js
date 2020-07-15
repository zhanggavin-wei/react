import React from 'react'
import './style.scss'

//状态管理
import { connect } from 'react-redux'
import { changeMsg } from '@/store/actions/test'

function mapStateToProps(state){
    return {
       msg: state.test.msg
    }
  }
function mapActionToProps(dispatch){
    return{
        changeMsg:(payload)=>dispatch(changeMsg(payload)) 
    }
}

class Home extends React.Component{
    constructor(porps){
        super(porps)
        this.state={

        }
    }
    
  click() {
    this.props.changeMsg("hello 1234")
  }
    render(){
        return(
            <div>
                <h1>首页</h1>
                <h1>{this.props.msg}</h1>
                <button onClick={this.click.bind(this)}>修改msg</button>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapActionToProps)(Home)