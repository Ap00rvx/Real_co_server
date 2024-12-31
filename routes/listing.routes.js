const {getListing,getVisibleListing,createListing,updateVisibility,deleteListing}  = require("../controller/listing.controller");
const adminMiddleware = require('../middleware/admin.middleware');

const router = require('express').Router();


router.get('/', getVisibleListing);;


router.get('/all', adminMiddleware, getListing);
router.post('/create', adminMiddleware, createListing);
router.put('/update/:id', adminMiddleware, updateVisibility);
router.delete('/delete/:id', adminMiddleware, deleteListing);



module.exports = router;