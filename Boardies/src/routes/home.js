var express = require('express');
var HomeController = require('../controllers/home');

const router = express.Router();
const homeController = new HomeController();

router
    .get('/', homeController.Index)
    .get('/about-us', homeController.AboutUs)
    .get('/contact-us', homeController.ContactUs)
    .get('/FAQ', homeController.FAQ)
    .get('/login', homeController.Login)

module.exports = router;