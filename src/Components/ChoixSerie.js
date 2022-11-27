import React from 'react'
import seconde from './Assets/seconde.png'
import premiere from './Assets/premiere.png'
import terminale from './Assets/terminale.png'
import {Link} from 'react-router-dom'

export default function ChoixSerie() {
  return (
    <div className=' w-auto m-3 text-sm'>
      <p className='flex'>
        <span className='mt-0 ml-0 mr-auto w-5' >School</span>
        <Link to='/bienvenu' >
        <button className='ml-auto w-20 h-0 bg-blue-900 border rounded-md text-white text-center pb-6 pt-0  ' >suivant </button>
        </Link>
      </p>
      <h1 className='mt-7 text-center text-lg'>Selectionner votre serie</h1>
       {/* div des images */}
       <div className='flex mt-10 w-2/4 m-auto '>
        <div className=' bg-violet-800 text-white w-28 h-32  border rounded-xl m-auto hover:w-32  '><img className='w-10 m-auto mt-2' src={seconde} alt="" /> <h2 className='mt-4 text-center text-lg'>S1 </h2></div>
        <div className=' bg-blue-900 text-white w-28 h-32  border rounded-xl m-auto hover:w-32 '><img className='w-10 m-auto mt-2' src={premiere} alt="" /> <h2 className='mt-4 text-center text-lg'>S2</h2></div>
        <div className=' bg-violet-800 text-white w-28 h-32 border rounded-xl m-auto  hover:w-32  '><img className='w-10 m-auto mt-2' src={terminale} alt="" /> <h2 className='mt-4   text-center text-lg'>S3 </h2></div>

      </div>
    </div>
  )
}
