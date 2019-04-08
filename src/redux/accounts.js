import { REGISTRATION } from './const'
import accounts from '../data/accounts';

export default (loginState = accounts, action) => {
    const {type, payload} = action

    switch(type){
        case REGISTRATION:
            return {...loginState.accounts, payload};
        default:
            return loginState
    }
}