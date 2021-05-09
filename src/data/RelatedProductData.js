
import product1 from "../images/product-images/product-image1.jpg" 
import product2 from "../images/product-images/product-image2.jpg"
import product3 from "../images/product-images/product-image3.jpg"
import product4 from "../images/product-images/product-image4.jpg"
import product5 from "../images/product-images/product-image5.jpg"
import product6 from "../images/product-images/product-image6.jpg"
import product7 from "../images/product-images/product-image7.jpg"
import hover1 from  "../images/product-images/product-image1-1.jpg"
import hover2 from  "../images/product-images/product-image2-1.jpg"
import hover3 from  "../images/product-images/product-image3-1.jpg"
import hover4 from  "../images/product-images/product-image4-1.jpg"
import hover5 from  "../images/product-images/product-image5-1.jpg"
import hover6 from  "../images/product-images/product-image6-1.jpg"
import hover7 from  "../images/product-images/product-image7-1.jpg"
import img1 from "../images/product-images/variant1.jpg"
import img2 from "../images/product-images/variant2.jpg"
import img3 from "../images/product-images/variant3.jpg"
import img4 from "../images/product-images/variant4.jpg"
import img5 from "../images/product-images/variant5.jpg"
import img6 from "../images/product-images/variant2-1.jpg"
import img7 from "../images/product-images/variant2-2.jpg"
import img8 from "../images/product-images/variant2-3.jpg"
import img9 from "../images/product-images/variant2-4.jpg"
import img10 from "../images/product-images/variant3-1.jpg"
import img11 from "../images/product-images/variant3-2.jpg"
import img12 from "../images/product-images/variant3-3.jpg"
import img13 from "../images/product-images/variant3-4.jpg"
import img14 from "../images/product-images/variant4-1.jpg"
import img15 from "../images/product-images/variant4-2.jpg"
import img16 from "../images/product-images/variant4-3.jpg"
import img17 from "../images/product-images/variant4-4.jpg"
const RelatedProductData = [
    {
        img: product1 ,
        hoverImg:hover1,    
       productname: "Edna Dress",
        labelonSale:"-16%",
        label:"new",
        oldprice:"500.00",
        newprice:"600.00",
        swatch:[img1,img2,img3,img4,img5],
        starRate:3
    },
        
    {   img: product2 ,
      hoverImg:hover2,
        productname: "Elastic Waist Dress",
        labelonSale:false,
        label:false,
        oldprice:false,
        newprice:"748.000",
        swatch:[img6,img7,img8,img9],
        starRate:5

    },
    {
         img: product3  ,
            hoverImg:hover3,
        productname: "3/4 Sleeve Kimono Dress",
        labelonSale:false,
        label:"Hot",
        oldprice:false,
        newprice:"550.00",               
         swatch:[img10,img11,img12,img13],
         starRate:4

    },
     {
         
         img: product4  ,
            hoverImg:hover4,
        productname: "Cape Dress",
        labelonSale:"Sale",
        label:"Hot",
        oldprice:"900.00",
        newprice:"788.00",
         swatch:[img14,img15,img16,img17],
         starRate:3

    },
     {
         
          img: product5 ,
            hoverImg:hover5,
        productname: "Paper Dress",
        labelonSale:"Sale",
        label:"Hot",
        oldprice:false,
        newprice:"550.00",
        swatch:[img10,img11,img12,img13],
        starRate:5

    },
     {
         
         img: product6 ,
            hoverImg:hover6,
        productname: "Zipper Jacket",
        labelonSale:"-16%",
        label:"new",
        oldprice:false,
        newprice:"788.00",
       swatch:false,
       starRate:3,

    },
    {
         
        img: product7,

            hoverImg:hover7,
        productname: "Zipper Jacket",
        labelonSale:false,
        label:"",
        oldprice:false,
        newprice:"748.00",
        swatch:false,
        starRate:5

    },

]
export  default RelatedProductData