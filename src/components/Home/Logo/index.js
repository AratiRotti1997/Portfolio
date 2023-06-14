import './index.scss'
import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/dev.JPG'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import { gsap } from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
  }, [])

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="AR" />
    </div>
  )
}

export default Logo
