const UserModel = require("../models/user")

const saveUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = new UserModel({
            name: user.name,
            email: user.email,
            nationalId: user.nationalId,
            password: user.password
            
        })
        newUser.save()
        .then(() => res.json({message: "kayit basarili"}))
        .catch(err => res.json({error: err}))
        
        
    } catch (error) {
        res.json({error:"kullanici kayit edilemedi", err : error})
    }

}
const login = async (req, res) => {
    const user = await UserModel.findOne({nationalId: req.body.nationalId})
    if(!user){
        res.json({message: "nouser"})
        return
    }else if(user.password !== user.password){
        res.json({message :"nopassword"})
        return
    }
    res.json({user})
}

const changeUser = async (req, res) => {
    const user = req.body;
    const aranankisi = await UserModel.findOneAndUpdate({nationalId: user.nationalId},{$set:{password:"burak"}})
    if(!aranankisi){res.json({message: "valla bele biri yoktur"})}
    res.send(aranankisi.nameLastname
    )
}
const transfer = async (req, res) => {
    // findOneAndUpdate ile kendi hesabından 50 azalt
    // findOneAndUpdate ile karşı hesabın id si ile arat ve 50 arttır
    // const _user = await UserModel.findOne({_id: req.body._id})
    const ifUser = await UserModel.findOne({_id: req.body.recipientId})
    if(!ifUser){
        res.json({error: "Belirtilen IBAN eksik ya da hatalı."})
        return
    }
    
    const me = await UserModel.findOneAndUpdate({_id: req.body.senderId},{$inc:{balance: -req.body.amount}},{new:true})
    const toUser = await UserModel.findOneAndUpdate({_id: req.body.recipientId},{$inc:{balance: +req.body.amount}},{new:true})
    if(me && toUser){
        res.json({message: "Transfer işlemi başarıyla yapıldı.", user: me})
        return
    }
}
const get = async (req, res) => {
    const user = req.body;
    const aranankisi = await UserModel.findOne({nationalId: user.nationalId})
    res.json({kisi: aranankisi})
}

module.exports= {
    saveUser,
    login,
    changeUser,
    transfer,
    get
}