import { useState } from 'react'
import Carousel from "./components/Carousel"
import { Heart } from "react-feather"
import { getImage, getImages } from './helpers/metadata/image'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const address = "0x4838B...D5f97"
  //const image = JSON.stringify(getImage(), null, 2)
  const ipfsPrefix: string = "https://ipfs.io/ipfs/";
  const ipfsUrisToArray = () => {
    const ipfs: string[] = []

    ipfs.push(`${ipfsPrefix}bafybeia4yhooxoom6se6s43j4hp6ocq7zfi7bbo7au53rc4sr3igti74zq/0.png`)
    ipfs.push(`${ipfsPrefix}bafybeia4yhooxoom6se6s43j4hp6ocq7zfi7bbo7au53rc4sr3igti74zq/1.png`)
    ipfs.push(`${ipfsPrefix}bafybeia4yhooxoom6se6s43j4hp6ocq7zfi7bbo7au53rc4sr3igti74zq/2.png`)
    ipfs.push(`${ipfsPrefix}bafybeia4yhooxoom6se6s43j4hp6ocq7zfi7bbo7au53rc4sr3igti74zq/3.png`)

    return ipfs;
  }

  const addUrisToObject = () => {
    let image = getImages()
    const ipfs = ipfsUrisToArray()
    image.images = ipfs
    image.description = "This is a description of the image"
    //return JSON.stringify(image, null, 2)
    return image
  }

  const images = addUrisToObject()

  return (
    <>
      <div className='bg-black rounded-lg'>
        <div className='py-2.5 px-2 flex items-center gap-2'>
          <img className="w-10 h-10 rounded-full bg-gray-300" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>
          <p className='text-left text-sm font-bold'>{address}</p>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <p className='text-gray-500'>1d</p>
        </div>
        <Carousel>
          {images.images.map((image, index) => (
            <img key={index} src={image} className='' />
          ))}
        </Carousel>
        <div className='py-2.5 px-2 flex flex-col items-start gap-2'>
          <Heart className='' size={20} />
          <div className='flex items-center gap-2'>
            <img className="w-4 h-4 rounded-full bg-gray-300" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>
            <p className='text-left text-sm font-bold'>1,083 Likes</p>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='text-left text-md font-bold'>Username</p>
            {<p className='text-md'>{images.description}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;




