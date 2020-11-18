import React from 'react'
import { Icon } from 'semantic-ui-react'

import './github-button.css';

const GithubButton = () => (
  <div>
      <a href="https://www.github.com/PrathmeshSadake/unsplashy" target="_blank" rel="noreferrer noopener">
         <Icon  className="github" name='github' size='huge'/>
      </a>
  </div>
)

export default GithubButton;