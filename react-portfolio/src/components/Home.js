import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
const Home = () => {

  return (
    <section id='home' className="bg-light p-5 min-vh-100">
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className=''>Hey! I'm Adam Azizi</h1>
            <h1 id='AboutMe' className='fw-bold custom-font'>Full Stack Developer</h1>
          </div>

          <div>
            <Player
              src='https://assets8.lottiefiles.com/packages/lf20_0yfsb3a1.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '700px', maxWidth: '700px' }}
            />
          </div>
        </div>
      </div>
      <hr /><br />
      <div className='displayFlexT'>
          <div>
            <Player
              src='https://assets3.lottiefiles.com/packages/lf20_ngzwzxib.json'
              className="player spLottie"
              loop
              autoplay
              style={{ maxHeight: '700px', maxWidth: '700px' }}
            />
          </div>
          <div>
            <h1 className='fw-bold custom-font DescMe DescMe2'>About me</h1>
            <p className='DescMe'>I love all areas of software and my personal favourite is web development. I usually work with Reactjs for the Front-End and Node.js as well as Express.js for the Back-End. However, I adapt to different technologies very quickly and love learning and discovering new pathways.<br /><br />
            A little about me:<br />
            -I love soccer and watch EPL, LaLiga, UCL and etc<br /> 
            -I also play soccer with friends, usually on holidays<br /> 
            -I play video games, mostly League of Legends and Valorant<br /> 
            -I work on side projects for fun<br />
            -I have two cats<br />
            -and...I love Iced Caps :D<br /><br />
            Please do not hesitate to contact me by email, on discord, or even for a coffee chat<br />
            Discord: Azizi#9780 <br />
            Email: adamazizi101@gmail.com
              </p>
          </div>
      </div>

      <br /><hr id='skills' /><br /><br /><br />
      <About />
      <hr id='experience' />
      <Experiences />
      <hr id='projects' />
      <Projects />
      <hr id='contact' />
      <Contact />
    </section>
  )
}

export default Home