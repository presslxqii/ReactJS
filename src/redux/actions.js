import { REGISTRATION } from './const'

export function registration(account){
    return{
        type: REGISTRATION,
        payload: account
    }
}