import { useState } from 'react';
import './App.css';
import Card from './Card.jsx';
import Cart from './Cart.jsx'
let rawdata = [
  {
    image: "https://media.ed.edmunds-media.com/tesla/model-s/2021/oem/2021_tesla_model-s_sedan_plaid_f_oem_1_1280x855.jpg" ,
    title: "2023 Tesla Model S",
    price: 89999,
    rating: 4.9,
    info: "Electric luxury sedan with autopilot, fast acceleration, and a range of over 370 miles.",
  },
  {
    image: "https://www.bkford.com/blogs/2764/wp-content/uploads/2024/05/24_FRD_MST_S5A0331_1e_V2.jpg" ,
    title: "2024 Ford Mustang GT",
    price: 55999,
    rating: 4.7,
    info: "High-performance V8 muscle car with modern features and aggressive styling.",
  },
  {
    image:"https://www.inquirer.com/resizer/v2/NIAXNGNT4NARVLOYICH2K3MJCY.jpg?auth=ddab27b3bd9b3de764364f5c6354f40c9ec213422a0b58f9fa2f52cb62eb2fa3&focal=674,765&width=700&height=467",
    title: "2023 Toyota Camry Hybrid",
    price: 31999,
    rating: 4.6,
    info: "Fuel-efficient and reliable sedan with a comfortable ride and safety technologies.",
  },
  {
    image: "https://i.cdn.newsbytesapp.com/images/l14220230208112500.jpeg?tr=w-720",
    title: "2024 BMW X5",
    price: 70999,
    rating: 4.8,
    info: "Premium midsize SUV with luxury features, advanced driving aids, and spacious cabin.",
  },
 {
    image: "https://media.ed.edmunds-media.com/chevrolet/corvette/2024/oem/2024_chevrolet_corvette_coupe_z06_fq_oem_1_1600.jpg",
    title: "2024 Chevrolet Corvette Z06",
    price: 105300,
    rating: 4.9,
    info: "Track-ready American supercar with a 670-hp V8 engine and stunning design.",
  },
  {
    image: "https://cfsm-image-service.s3.amazonaws.com/resized-iaiconicwebcommediasitelibraryImagesDG024019CHjltuokgntbv7l37fimmc20le00midjpg",
    title: "2024 Dodge Charger Daytona EV",
    price: 65999,
    rating: 4.6,
    info: "Electric muscle car concept blending classic Charger DNA with futuristic tech.",
  },
  {
    image:"https://jesusbehindthewheel.com/wp-content/uploads/2024/04/img_4408.jpg?w=1024",
    title: "2024 Toyota GR Supra",
    price: 49990,
    rating: 4.5,
    info: "Sporty two-seater coupe with turbocharged power and agile handling dynamics.",
  }

]


function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const handleaddtocart = (items) =>{
    setCartItems([...cartItems,items])
  }
  
  return (
    <>  
      <div className='Container'>
        <div className='AllCards'>
        {
          rawdata.map((item, index) => {
            return <Card image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              info={item.info}
              key={index}
              onAddtoCart={handleaddtocart}
            />

          })
        }
        </div>
        <div className='AddtoCart'>
        <Cart 
        cartItems={cartItems}
        />
        </div>
        </div>
    </>
  );
}

export default App;
