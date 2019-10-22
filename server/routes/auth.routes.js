const { Router } = require('express')
const { login, createUsr } = require('../controllers/auth.controller')
const router = Router()

// */api/auth/admin/login
router.post('/admin/login', login)

// */api/auth/admin/create
router.post('/admin/create', createUsr)

module.exports = router