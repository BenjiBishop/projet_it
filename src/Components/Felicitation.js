import React from 'react'
import fleche from './Assets/fleche.png'
import { Link } from 'react-router-dom'
import reussite from './Assets/reussite.png'
import tools from './Assets/Tools.png'

export default function Felicitation() {
    return (
        <div className='m-3 text-sm'>
            {/* div du header */}
            <div className='flex'>
                <span className=''>School</span>
                <Link to='/bienvenu' className='ml-auto mr-9 text-blue-900' >diciplines</Link>

                <span>Orientation</span>
                <img className='w-3 h-2 mt-2 ml-1' src={fleche} alt="" />
            </div>
            <div className='flex mt-4'>
        {/* div du bloc  */}
        <div className=' m-auto mr-2 w-60 text-center' >
          <h1 className='text-3xl'>felicitation !!</h1>
          <p className='mt-7'>
            <img className='w-8 flex m-auto' src={tools} />
            Lorem ipsum dolor,consectetur.expedita voluptates
            dolorem doloremque earum.dolor sit. Quae fugit
            natus aut od
          </p>
              <button className='hover:bg-white mt-8 m-auto hover:text-blue-900 hover:border-blue-900 ml-auto w-20 h-0 bg-blue-900 border rounded-md text-white text-center pb-6 pt-0  ' ><Link to="/choixniveau">Refaire</Link></button>
        </div>
        {/* div de l'image */}
        <div className=' m-auto w-60 ml-2 ' >
          <img src={reussite} alt="" className='ml-4' />
        </div>
      </div>
        </div>
    )
}
