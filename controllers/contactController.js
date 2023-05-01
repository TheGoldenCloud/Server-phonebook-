import asyncHandler from 'express-async-handler'
import ContactModel from '../models/constactModel.js'

const getContacts = asyncHandler(async(req,res)=>{
    let all = await ContactModel.find();
    let alll = JSON.stringify(all);
    res.send(alll); //VARTI SE NA OVO I NASTAVI SA IZRADOM CELOG RADA
})

//
let getContactById = asyncHandler(async (req,res)=>{
    let contact = ContactModel.findOne({ username: req.params.id });
    console.log(contact);
    await res.status(200).json({
        message: "Sent to console"
    });
})


//
let createContact = asyncHandler(async(req,res)=>{
    console.log(req.body);
    let contact = await ContactModel.create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone
    })

    res.status(201).json({
        message: "You created user!"
    });

})

let deleteContact = asyncHandler(async(req,res)=>{
    await ContactModel.findByIdAndDelete(req.params.id);
    res.send(200).json({
        message: "Contact deleted"
    })
    
})

let changeContact = asyncHandler(async(req,res)=>{
    let old = ContactModel.findById(req.params.id);
    let newOne = {
        username: "Zamena",
        email: "zamena@mail.com",
        phone: "zamena broj"
    }


    await ContactModel.findOneAndReplace(old,newOne);

    res.sendStatus(302).json({
        message: "Changed contact"
    })

})

export { getContacts,createContact,getContactById,deleteContact,changeContact }