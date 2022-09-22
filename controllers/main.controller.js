import CustomAPIError from '../errors/custom-error.js'
import jwt from 'jsonwebtoken'
const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello, John Done`,
    secret: `Her is your authorized data, your lucky number is ${luckyNumber}`,
  })
}
const login = (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }
  // just for demo, normally provided by db
  // just for demo, in production use long, complex and unguessable string value !!!

  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: 'user created,', token })
}

export { dashboard, login }
