const express =  require('express')

const router = express.Router()


const blogController = require('../controllers/controllers.js')

// blog index
router.get('/', blogController.blog_index)

// blog post
router.post('/', blogController.blog_create_post)

router.get('/create', blogController.blog_create_get)

router.get('/:id', blogController.blog_details)

router.delete('/:id', blogController.blog_delete)



module.exports = router