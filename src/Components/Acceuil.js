import React from 'react'
import { Link } from 'react-router-dom'
import eleve from './Assets/eleve.png'

export default function Acceuil() {
  return (
    <div className=' w-auto m-3 text-sm'>
      <p className='flex'>
        <span className='mt-0 ml-0 mr-auto w-5' >School</span>
        <Link to='/choixniveau' >
        <button className='ml-auto w-20 h-0 bg-blue-900 border rounded-md text-white text-center pb-6 pt-0  ' >Decouvrir </button>
        </Link>
      </p>

      <div className='flex'>
        {/* div du bloc  */}
        <div className=' m-auto mr-2 w-60 text-center' >
          <h1 className='text-3xl'>SCHOOL</h1>
          <h3>project</h3>
          <p className='mt-7'>
            Lorem ipsum dolor,consectetur.expedita voluptates
            dolorem doloremque earum.dolor sit. Quae fugit
            natus aut od
            <div className='flex mt-9' >
              <button className=' hover:bg-blue-900 hover:text-white  w-20 h-0 bg-white border border-blue-900 rounded-md text-blue-900 text-center pb-6 pt-0  ' ><Link to="/choixniveau"> En savoir</Link></button>
              <button className='hover:bg-white hover:text-blue-900 hover:border-blue-900 ml-auto w-20 h-0 bg-blue-900 border rounded-md text-white text-center pb-6 pt-0  ' ><Link to="/choixniveau"> Decouvrir</Link></button>
            </div>
          </p>
        </div>
        {/* div de l'image */}
        <div className=' m-auto w-60 ml-2 ' >
          <img src={eleve} alt="" className='ml-4' />
        </div>
      </div>
    </div>
  )
}
