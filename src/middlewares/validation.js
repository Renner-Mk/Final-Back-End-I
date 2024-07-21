
import {users} from '../routes/users'

export function validateUserRestration(request, response, next){
    const {name, email, password} = request.body
    const user = users.find(user => user.email === email)

    if(!name){
        return response.status(400).json({message: 'Por favor, verifique se passou o nome.'})
    }
    if(!email){
        return response.status(400).json({message: 'Por favor, verifique se passou o email.'
        })
    }
    
    if(user){
        return response.status(400).json({message: 'Email já cadastrado, insira outro.'})
    }

    if(!password){
        return response.status(400).json({message: 'Por favor, verifique se passou a senha.'})
    }

    next()
}

export function validateUserLogin(request, response, next){
    const { email, password} = request.body

    if(!email){
        return response.status(400).json({message:'Insira um e-mail válido.'})
    }
    if(!password){
        return response.status(400).json({message:'Insira uma senha válida.'})
    }

    next();
}

export function validateCreateMessage(request, response, next){
    const {title, description} = request.body

    if(!title){
        return response.status(400).json({message: 'Por favor, verifique se passou o titulo.'})
    }
    if(!description){
        return response.status(400).json({message: 'Por favor, verifique se passou uma descrição.'})
    }

    next();
}

export function validateUpdateMessage(request, response, next){
    const {title, description} = request.body

    if(!title){
        return response.status(400).send('Por favor, verifique se passou o titulo.')
    }
    if(!description){
        return response.status(400).send('Por favor, verifique se passou uma descrição.')
    }

    next();
}
