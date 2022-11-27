import React from 'react'
import fleche from './Assets/fleche.png'
import {Link} from 'react-router-dom'


export default function Cours() {
    return (
        <div className='flex' >

            <div className='w-1/4 block bg-blue-900 border rounded-xl text-white relative'>
                <h1 className='text-xl text-center'>SCHOOL</h1>
                <h2 className='lg:text-lg text-center mt-12 sm:text-sm sm:ml-0 '>Mathematiques</h2>
                <Link to='/cours' >
                <div className='flex m-auto  border border-white w-3/4 rounded-3xl bg-sky-800 h-6 mt-10'>
                    <div className='ml-1 border-4 border-white  rounded-full w-6 h-6 bg-white '>
                    </div>
                    <span className='text-sm lg:ml-5 text-center text-white sm:ml-0 '>Cours</span>
                </div>
                </Link>
                <Link to='/exercice' >
                <div className='flex m-auto border-b border-r w-3/4 rounded-3xl h-6 bg-white mt-6'>
                    <div className='ml-1 border-4 border-slate-400  rounded-full w-6 h-6 bg-blue-900 '>
                    </div>
                    <span className='text-sm lg:ml-5 text-center text-black sm:ml-0 '>Exercice</span>

                </div>
                </Link>
                
                <Link to='/video' >
                <div className='flex m-auto border-b border-r w-3/4 rounded-3xl h-6 bg-white mt-6 mb-28'>
                    <div className='ml-1 border-4 border-slate-400  rounded-full w-6 h-6 bg-blue-900 '>
                    </div>
                    <span className='text-sm ml-5 text-center text-black '>Video</span>

                </div>
                </Link>
            </div>


            <div className='m-3 block text-sm w-3/4 relative'>
                {/* div du header */}
                <div className='flex'>
                <Link to='/bienvenu' className='ml-auto mr-9 text-blue-900' >diciplines</Link>
                    <span className='text-blue-900'>Orientation</span>
                    <img className='w-3 h-2 mt-2 ml-1' src={fleche} alt="" />
                </div>

                <div className='flex mt-10 w-3/4 m-auto '>
                    <div className=' bg-blue-900 text-white w-24 h-32  border rounded-xl  mr-7  '><img className='w-10 m-auto mt-2' src='' alt="" /> <h2 className='mt-4 text-center text-lg'>Cour 1 </h2></div>
                    <div className=' bg-blue-900 text-white w-24 h-32  border rounded-xl  mr-7  '><img className='w-10 m-auto mt-2' src='' alt="" /> <h2 className='mt-4 text-center text-lg'>Cour 2 </h2></div>
                    <div className=' bg-blue-900 text-white w-24 h-32 border rounded-xl   '><img className='w-10 m-auto mt-2' src='' alt="" /> <h2 className='mt-4   text-center text-lg'>Cour 3 </h2></div>

                </div>
                <div className='flex mt-3 w-3/4 m-auto '>
                    <div className=' bg-blue-900 text-white w-24 h-32  border rounded-xl  mr-7  '><img className='w-10 m-auto mt-2' src='' alt="" /> <h2 className='mt-4 text-center text-lg'>Cour 1 </h2></div>
                    <div className=' bg-blue-900 text-white w-24 h-32  border rounded-xl  mr-7  '><img className='w-10 m-auto mt-2' src='' alt="" /> <h2 className='mt-4 text-center text-lg'>Cour 2 </h2></div>
                    <div className=' bg-blue-900 text-white w-24 h-32 border rounded-xl   '><img className='w-10 m-auto mt-2' src='' alt="" /> <h2 className='mt-4   text-center text-lg'>Cour 3 </h2></div>

                </div>
            </div>



        </div>





    )
}
