import React from 'react'
import fleche from './Assets/fleche.png'
import math from './Assets/math.png'
import physi from './Assets/physique.png'
import chimie from './Assets/chimie.png'
import sn from './Assets/sn.png'
import geo from './Assets/geo.png'
import his from './Assets/histoire.png'
import { Link } from 'react-router-dom'


export default function Bienvenu() {
  return (
    <div className='m-3 text-sm'>
      {/* div du header */}
      <div className='flex'>
        <span className=''>School</span>
        <Link to='/bienvenu' className='ml-auto mr-9 text-blue-900' >diciplines</Link>
        <span>Orientation</span>
        <img className='w-3 h-2 mt-2 ml-1' src={fleche} alt="" />
      </div>
      <h1 className='mt-4 text-center mb-2'>Bienvenu</h1>
      <p className='text-center text-xs mb-2' >Voici la liste des matieres pour lesquelles vous serez evaluer, veuillez choisir
      une matiere pour acceder aux cours, exercices et video lui concernant </p>


      <div className="flex">
      {/* premiere ranger */}
      <div className='block mt-8 m-auto text-center'>
        <div className='flex border-b border-r shadow-lg w-60 rounded-3xl h-10'>
          <div className=' border-4 border-slate-400  rounded-full w-10 h-10 bg-blue-900 '>
            <img className='w-4 m-auto mt-1' src={math} alt="" />
          </div>
          <h2 className='mt-2 ml-2' >Mathematiques</h2>
        </div>

        <div className='flex mt-4 m-auto border-b border-r shadow-lg   w-60 rounded-3xl h-10'>
          <div className=' border-4 border-slate-400 rounded-full w-10 h-10 bg-blue-900 '>
            <img className='w-5 m-auto mt-1' src={chimie  } alt="" />
          </div>
          <h2 className='mt-2 ml-2'>Chimie</h2>
        </div>

        <div className='flex mt-4 m-auto border-b border-r shadow-lg   w-60 rounded-3xl h-10'>
          <div className=' border-4 border-slate-400 rounded-full w-10 h-10 bg-blue-900 '>
            <img className='w-6 m-auto mt-1' src={geo} alt="" />
          </div>
          <h2 className='mt-2 ml-2'>Geographie</h2>
        </div>

      </div>

      {/* deuxieme ranger */}
      <div className='block mt-8 ml-0 m-auto text-center'>
        <div className='flex border-b border-r shadow-lg w-60 rounded-3xl h-10'>
          <div className=' border-4 border-slate-400  rounded-full w-10 h-10 bg-blue-900 '>
            <img className='w-4 m-auto mt-2' src={physi} alt="" />
          </div>
          <h2 className='mt-2 ml-2' >Physique</h2>
        </div>

        <div className='flex mt-4 m-auto border-b border-r shadow-lg   w-60 rounded-3xl h-10'>
          <div className=' border-4 border-slate-400 rounded-full w-10 h-10 bg-blue-900 '>
            <img className='w-5 m-auto mt-1' src={sn} alt="" />
          </div>
          <h2 className='mt-2 ml-2'>Science Naturelle</h2>
        </div>

        <div className='flex mt-4 m-auto border-b border-r shadow-lg   w-60 rounded-3xl h-10'>
          <div className=' border-4 border-slate-400 rounded-full w-10 h-10 bg-blue-900 '>
            <img className='w-5 m-auto mt-1' src={his} alt="" />
          </div>
          <h2 className='mt-2 ml-2'>Histoire</h2>
        </div>

      </div>


      </div>




    </div>
  )
}
