import React from 'react'

 
const Navbar = () => {
  return (
    <nav className="navStuff bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
        </div>
        <div>
          <a href='#home' className="link nav-phone">Home</a>
          <a href='#AboutMe' className="link nav-phone">About Me</a>
          <a href='#skills' className="link nav-phone">Skills</a>
          <a href='#experience' className="link nav-phone">Experience</a>
          <a href='#projects' className="link nav-phone ">Projects</a>
          <a href='#contact' className="link nav-phone navSpPhone">Contact</a>
        </div>
        
        <div className=''>


        </div>

       </div>
  </nav>
  )
}

export default Navbar