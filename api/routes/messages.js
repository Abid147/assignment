const express = require('express')
const router = express.Router()
const Message = require('../models/message')

/* GET all messages. */
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find()
    res.json(messages)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* GET single message. */
router.get('/single/:id', getMessage, async (req, res) => {
  res.message.isRead = true
  try {
    const updatedMessage = await res.message.save()
    res.json(updatedMessage)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

/* GET add a new message. */
router.post('/create', async (req, res) => {
  const message = new Message({ subject: req.body.subject, body: req.body.body })

  try {
    const newMessage = await message.save()
    res.status(201).json(newMessage)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

/* GET unread messages count. */
router.get('/unread/count', async (req, res) => {
  try {
    const messages = await Message.find({ isRead: false }).count()
    res.json(messages)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* GET unread messages. */
router.get('/unread', async (req, res) => {
  try {
    const messages = await Message.find({ isRead: false })
    res.json(messages)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

/* DELETE single message. */
router.delete('/single/:id', getMessage, async (req, res) => {
  try {
    await res.message.remove()
    res.json({ message: 'Message deleted' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

/* PATCH single message. */
router.patch('/read/:id', getMessage, async (req, res) => {
  res.message.isRead = true
  try {
    const updatedMessage = await res.message.save()
    res.json(updatedMessage)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getMessage (req, res, next) {
  let message
  try {
    message = await Message.findById(req.params.id)
    if (message == null) return res.status(404).json({ message: 'Message not found' })
  } catch (err) {
    return res.status(500).json({ message: 'Message not found', error: err.message })
  }
  res.message = message
  next()
}

module.exports = router
