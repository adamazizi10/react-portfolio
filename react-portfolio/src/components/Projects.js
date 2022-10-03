import React from 'react'
import data from '../data.js'
import Project from './Project.js'
import { Player } from '@lottiefiles/react-lottie-player'

const Projects = () => {
  return (
    <div>
      <div className='container-fluid mainHome'>
                <div className='d-sm-flex align-items-center justify-content-between'>
                    <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
                        <h1 className='fw-bold custom-font'>Check out the Projects I have worked on</h1>

                    </div>

                    <div>
                        <Player
                            src='https://assets2.lottiefiles.com/packages/lf20_vnikrcia.json'
                            className="player"
                            loop
                            autoplay
                            style={{ maxHeight: '700px', maxWidth: '700px' }}
                        />
                    </div>
                </div>
            </div>
    <div className="container-fluid bg-light p-5 min-vh-100 ">
      <div className="row">
        {data.ProjectsData.map((project) => {
          return(
            <div className="col-12 d-flex justify-content-center" key={project.id}>
                <Project id={project.id}
                  image={project.img}
                  image2={project.img2}
                  name={project.name}
                  stack={project.stack}
                  live={project.live}
                  source={project.source}
                  Tech={project.Tech}
                  date={project.date}
                  desc1={project.description1}
                  desc2={project.description2}
                  desc3={project.description3}
                  desc4={project.description4}
                  desc5={project.description5}
                  desc6={project.description6}
                />
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Projects