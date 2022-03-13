const {Router} = require('express')
const router = new Router()
const User = require('../models/User')

router.post('/registration', async (req, res) => {
    try{

        const {email, password} = req.body
        const isUsed = await User.findOne({email})

        if(isUsed){
           return res.status(300).json({message: 'Даний Email вже зареєстрований, спробуйте інший...'})
        }

        const user = new User({
            email, password
        })

        await user.save()

        res.status(201).json({ message: 'Користувача створено'})

    }catch(e){console.log(e)}
})

module.exports = router