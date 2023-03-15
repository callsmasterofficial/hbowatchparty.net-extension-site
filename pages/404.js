import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"HBO Watch Party - Watch HBO Max Together with Friends Online",
        description:"HBO Watch Party allows you to watch HBO Max together with friends Online. Install the extension for playback sync and a chatbox.",
        keywords:"HBO Watch Party, Watch Party HBO Max, HBO Go Watch Party, HBO Max Watch Party, HBO Party, HBO Max Party",
        pageUrl:"https://hbowatchparty.net/",
        featuredImage:"/logo.png"
      }
    }
  }
}
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error