import { User } from '../models'

import {
    sha256
} from 'js-sha256'

const UserController = {
    findAll() {
        return User.findAll()
    },
    authenticate(user, password) {
        const encodedPass = sha256(password)
        const query = this.find({
            user: user,
            password: encodedPass
        }, (result) => console.log(result))
    },
    register: async function (name, password, birthday) {
        try { 
            const user = await User.findAll({where: { name: name }})
            console.log(user)
            if(user.length === 0) {
                const res = await User.create({
                    name: name,
                    password: sha256(password),
                    birthday: birthday
                })
                console.log(res)
                return {status: 200, user: res}
            }
        } catch(error){
            console.log(error)
            return { status: '500', message: 'Erro ao inserir novo usuário'}
        }
    }
}
export default UserController
