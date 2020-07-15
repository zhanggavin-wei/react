import {CHANGE_MSG} from '../actionTypes'
let initState={
    msg:'hello redux',
    list:[]
}

export default function reducer(state=initState,action){
    switch(action.type){
        case CHANGE_MSG:
            console.log('收到',action)
            let newState=JSON.parse(JSON.stringify(state))
            newState.msg=action.payload
            return newState
        case 2:
            return state
        case 3:
            return state
        case 4:
            return state
        case 5:
            return state
        default:
            return state
    }
}