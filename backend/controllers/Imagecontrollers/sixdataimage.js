const getSixImage  =  async(req,res)=>{
    res.status(202).json(SixImage)
}
const SixImage = [
    {'image':'https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-1.jpg.webp'},
    {'image':'https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-2.jpg.webp'},
    {'image':'https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-3.jpg.webp'},
    {'image':'https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-4.jpg.webp'},
    {'image':'https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-5.jpg.webp'},
    {'image':'https://preview.colorlib.com/theme/malefashion/img/instagram/instagram-6.jpg.webp'}
]




const  getSliderImage = async(req,res)=>{
    res.status(201).json(Slider)
}
const Slider =[
    {img1:'https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp'},
    {img2:'https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp'}
]




module.exports ={
    getSixImage,
    getSliderImage
}