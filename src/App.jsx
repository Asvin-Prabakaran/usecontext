import React, {useState} from 'react'
import CartCard from './components/CartCard'
import "/node_modules/bootstrap/dist/css/bootstrap.css"

export const UserContext = React.createContext()

function App() {
  
  const [product, setProduct] = useState([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "image": "data:image/jpeg;base64,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",
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "image": "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:180"
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "image": "https://blogs-images.forbes.com/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.png"
  },
  {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "image": "https://media.mobex.in/media/catalog/product/o/p/oppo_f19_pro_fantasy_purple_8gb_ram_.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
  },
  {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "image": "https://5.imimg.com/data5/ZR/TV/HW/SELLER-57126529/huawei-p30-pro-6-gb-ram-plus-128-gb-rom-pearl-white-mobile-1000x1000.jpg"
  }
  ])

  return <>
    <UserContext.Provider value={{product, setProduct}}>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserContext.Provider>
  </>
}

export default App