import React from 'react'
import {useState} from 'react'

export default function Notes(props) {
 const [select,setSelect] = useState(false)

  const selected = () => {
    setSelect(!select)
  }
  
  return (
    <div className='border-t border-1 border-blue-900 mb-6 mx-10  ' >
      <h2 className='text-center mt-2 mb-2 ' >Quelle est votre note en {props.matiere} </h2> 
      <div className='flex m-auto justify-center  text-center mx-3' >
        <span onClick={selected} style={ {background: select && 'violet'}} className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>1</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>2</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>3</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>4</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>5</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>6</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>7</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>8</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>9</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>10</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>11</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>12</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>13</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>14</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>15</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>16</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>17</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>18</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>19</span>
        <span className='w-5 h-5 flex rounded-sm hover:text-white hover:bg-blue-900 text-center border-r border-b border-blue-900 border-1 mx-1'>20</span>
      </div>

    </div>
  )
}
