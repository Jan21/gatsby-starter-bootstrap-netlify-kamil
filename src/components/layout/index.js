import React from 'react'
// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'


// main site style
import './index.scss'

export default ({ children }) => (
  <div className="jumbo">
  <div className="text-wrap">
        <div className='pageContent'>{children}</div>
  </div>
  <video className="jumbo-video"  playsinline autoplay poster="video_jpg.jpg" loop muted="">
  <source src="bcgr_video.mp4" type="video/mp4"></source>
</video>
</div>
) 