import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const About = () => {
  return (
    <div className='container-fluid'>
      <div className='d-sm-flex align-items-center justify-content-between'>
        <div>
          <Player
            src='https://assets6.lottiefiles.com/packages/lf20_tno6cg2w.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
          <h1 className='custom-font'>Skills, Languages, and Technologies</h1>
        </div>
      </div>
      <br /><br /><br /><br />
      {/* Front-End */}
      <div className='d-sm-flex align-items-center justify-content-between'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
        <h1 className='pt-5 pb-2 custom-color centerTheDiv'>Front-End</h1>
        <p className='lead'>
          <img className='me-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="45" height="55" />
          <img className='m-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="45" height="55" />
          <img className='m-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="45" height="55" />
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="45" height="55"/>
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vuejs" width="45" height="55" />
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="angularjs" width="45" height="55" />
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="45" height="55" />
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="45" height="55" />
        </p>
        </div>
        <div>
          <Player
            src='https://assets10.lottiefiles.com/packages/lf20_tsdnk8ut.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '600px', maxWidth: '600px' }}
          />
        </div>
      </div>
      <br /><br /><br /><br />
      {/* Back-End */}
      <div className='d-sm-flex align-items-center justify-content-between'>
      <div>
          <Player
            src='https://assets6.lottiefiles.com/private_files/lf30_uodzuczg.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
        <h1 className='pt-5 pb-2 custom-color centerTheDiv'>Back-End</h1>
        <p className='lead'>
          <img className='m-3 skillsStyleNE' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" />
          <img className='m-3 skillsStyleNE' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"/>
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="csharp" width="45" height="55"/>
        <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="dotnetcore" width="45" height="55" />
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="gijavat" width="45" height="55" />
          <img className='m-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="kotlin" width="45" height="55" />
        </p>
        </div>
      </div>
      <br /><br /><br />
      {/* Databases and tech */}
      <div className='d-sm-flex align-items-center justify-content-between'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
        <h1 className='pt-5 pb-2 custom-color'>Technologies and Databases</h1>
        <p className='lead'>
          <img className='me-3 skillsStyleNE2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" alt="git"  />
          <img className='m-3 skillsStyleNE2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" />
          <img className='m-3 skillsStyleNE2' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" />
          <img className='m-3 skillsStyleNE2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />

        </p>
        </div>
        <div>
          <Player
            src='https://assets3.lottiefiles.com/private_files/lf30_bc7loyfm.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '500px', maxWidth: '500px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default About