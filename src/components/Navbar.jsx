import React from 'react'
import{Link} from 'react-router-dom'

 export const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand active active text-white" to="#">NEWS Yap</Link>
      <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
        <span class="navbar-toggler-icon bg-white"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active text-white"  to="/" >Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/general" >General</Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/business">Business</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/entertainment">Entertainment</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/health">Health</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/science">Science</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/sports">Sports</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-white" to="/technology">Technology</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
export default Navbar
