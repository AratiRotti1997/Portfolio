import './index.scss'
import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import './Cloud tag.js'
import { TagCloud } from '@frank-mayer/react-tag-cloud'
import TextShpere from './Cloud tag.js'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            <p>
              I have completed my Computer Science Engineering on August 2021,
              with 6.5 GPA. I worked for Svasti Innovations PVT LTD as Full
              Stack Developer Intern on same year from March 2021 to August 2021
              . while i was intern i developed Library application for College
              website. We used DJango application with AJAX and JavaScript.
              Library website had list of books catagorised, these books would
              be borrowed by Students and Teachers and all have deadlines to
              return. And those who return late had to give fine. this was all
              managed in Excel sheet which was downloadable. This helped me
              understand packages and API's and the urge to learn more and
              develope my skills.
            </p>
            <p>
              When i was learning Engineering, we had a subject called Bitcoin
              and which introduced me to CyberSecurity and Data management, I
              was interested to know more about it. Same time i got an offering
              in Capgemini as Cyber Security analyst on September 2021 this
              helped me understand more on Data management and Security. I
              worked on Sailpoint application which is used to manage user data
              and Access requests. I worked in Support and this helped me
              connect directly to users and understand the concenpt Data
              management closly.
            </p>
            <p>
              My main moto is "always keep Learningt". This website is small
              attemt to put all my skills together, sorry for any mistakes.
              Please download my Resume for detailed information. And do contact me :).
            </p>
          </p>
        </div>
      </div>
      <TextShpere></TextShpere>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
