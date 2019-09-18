import React from 'react'
// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'


// main site style
import './index.scss'

export default ({ children }) => (
  <div className="bg">
        <div className='pageContent'>{children}</div>
  </div>
) 