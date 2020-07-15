import React from 'react'
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom'
import routes from '@/views'

export default class Qfcontent extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    createRoute() {
        var res = []
        console.log(routes)
        routes.map(ele => {
            res.push(
                <Route
                key={ele.id}
                exact
                path={ele.path}
                component={ele.component}
            ></Route> 
            )
            if (ele.children) {
                ele.children.map(ele => {
                    res.push(
                        <Route
                        key={ele.id}
                        exact
                        path={ele.path}
                        component={ele.component}
                    ></Route> 
                    )
                })
            }
        })
        return res
    }

    render(){
        return(
            <div>
                <Switch>
                    {/*一组匹配规则，从上到下进行匹配*/}
                    {this.createRoute()}
                    <Redirect from='/*' to='/home'></Redirect>
                </Switch>

            </div>
        )
    }
}