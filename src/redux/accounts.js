import { REGISTRATION } from './const'
import accounts from '../data/accounts';
import { Map } from 'immutable'

export default (loginState = Map(accounts), action) => {
    const {type, payload} = action

    switch(type){
        case REGISTRATION:
            debugger
            return loginState.updateIn(accounts, x => accounts.push(payload))
        default:
            return loginState
    }
}