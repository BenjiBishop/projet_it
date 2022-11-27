import React from 'react'
import fleche from './Assets/fleche.png'
import { Link } from 'react-router-dom'
import Notes from './Notes.js'

export default function Questions() {
    return (
        <div className='m-3 text-sm'>
            {/* div du header */}
            <div className='flex'>
                <span className=''>School</span>
                <Link to='/bienvenu' className='ml-auto mr-9 text-blue-900' >diciplines</Link>

                <span>Orientation</span>
                <img className='w-3 h-2 mt-2 ml-1' src={fleche} alt="" />
            </div>
            <h1 className='text-center mt-5 mb-3' >Reponder aux questions suivantes</h1>

            <p className='text-center m-3 '>
                Veuillez fournir vos notes habituelles pour chacune des matieres suivantes,ces notes nous permettront 
                d'evaluer votre niveau
            </p>
            <Notes matiere='Mathematique' ></Notes>
            <Notes matiere='Physique' ></Notes>
            <Notes matiere='Chimie' ></Notes>
            <Notes matiere='Science naturelle' ></Notes>
            <Notes matiere='Histoire' ></Notes>
            <Notes matiere='Geographie' ></Notes>
            <div className="border-t border-1 border-blue-900 text-center mx-10 "  >
            <button className='hover:bg-white mt-8 m-auto hover:text-blue-900 hover:border-blue-900 ml-auto w-20 h-0 bg-blue-900
             border rounded-md text-white text-center pb-6 pt-0  ' ><Link to="/choixniveau">Valider</Link></button>

            </div>

            
        </div>
    )
}
