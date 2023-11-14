const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const verifyAdmin = require('../middleware/verifyAdmin')

//@desc Get all Users
//@route GET /users
//@access Private
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'No users Found' })
    }
    res.json(users)
})

//@desc Create new User
//@route POST /users
//@access Private
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, roles } = req.body

    //confirm data
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    //check for dupes
    const duplicate = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    //Hash password
    const hashedPwd = await bcrypt.hash(password, 10)

    const userObject = (!Array.isArray(roles) || !roles.length)//if roles are not given
        ? { username, "password": hashedPwd }//use default 
        : { username, "password": hashedPwd, roles }//add the roles given

    //create and store new user
    const user = await User.create(userObject)

    if (user) {//created
        res.status(201).json({ message: 'New User ' + username + ' created' })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

//@desc Update a User
//@route PATCH /users
//@access Private
const updateUser = asyncHandler(async (req, res) => {
    const { id, username, roles, active, password } = req.body

    // Confirm data 
    if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields except password are required' })
    }

    // Does the user exist to update?
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    user.username = username
    user.roles = roles
    user.active = active

    if (password) {
        // Hash password 
        user.password = await bcrypt.hash(password, 10) // salt rounds 
    }

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
})

//@desc Delete a User
//@route DELETE /users
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
    const { id, username } = req.body

    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    const user = await User.findById(id).lean()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await User.deleteOne(user)

    const reply = `Username ${username} with ID ${id} deleted`

    res.json(reply)
})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}