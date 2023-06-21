import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <div class="box">
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
      </div>
      <Sidebar />
      
      <div className="page">
        <span className="tags top-tags">
          &lt;html&gt;
          <br />
        </span>
        <span className="tags top-tag-html">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
        </span>
        <span className="tags bottom-tag-html">&lt;/html&gt;</span>
      </div>
      
    </div>
  )
}

export default Layout
