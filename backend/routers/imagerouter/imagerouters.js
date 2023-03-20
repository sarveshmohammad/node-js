const express= require('express');
const { getEightImage,} = require('../../controllers/Imagecontrollers/eightdataimage');
const  { getSixImage,getSliderImage } = require('../../controllers/Imagecontrollers/sixdataimage')
const { getTwelveImage } = require('../../controllers/Imagecontrollers/tweleveldataimage')
const router = express.Router();
router.use(express.json())

router.get ('/eight',getEightImage)
router.get ('/six',getSixImage)
router.get ('/slider',getSliderImage)
router.get ('/twelve',getTwelveImage)



module.exports = router