import Carousel from 'react-bootstrap/Carousel';
import image1 from "./image1.webp"
import image2 from "./image2.jpg"
 import image3 from "./image3.avif"
import "./home.css"
function Home() {
  return(
    <div>
      <Carousel>
      <Carousel.Item>
        <img src={image1} height={650} width="100%"></img>
        <Carousel.Caption>
          <div className='home1'>
          <h1>Higher Coding Language</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} height={550} width="100%"></img>
        <Carousel.Caption>
        <div className='home1'>
          <h1>Higher Coding Language</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} height={550} width="100%"></img>
        <Carousel.Caption>
        <div className='home1'>
          <h1>Higher Coding Language</h1>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    {/* <div className='div2'>
    <h1>Get your favourite for less, at Fashion Factory</h1>
    </div> */}
    </div>  
  )
  
}

export default Home