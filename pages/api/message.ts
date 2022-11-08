import connectDB from '@/libs/db'
import Message from '@/libs/models/Message'
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
handler.post(async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      await Message.create({
        name,
        email,
        content: message,
      })

      return res.status(201).send({ message: 'Message created successfully.' })
    } else {
      throw new Error('Invalid Email')
    }
  } catch (error) {
    console.log(error)
    res.send({ error: 'Something went wrong!' })
  }
})

export default connectDB(handler)
