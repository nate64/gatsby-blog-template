import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Nathan Estes`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Content by Nathan Estes.  Wherein I Keep my Skills Sharp
          by Blogging. I was Born in a Log Cabin.  {' '}
          <a href="https://twitter.com/nate64">
            Find me on the Twitter.  {' '}
          </a>
          <a href="https://www.linkedin.com/in/estesnathan/">
            Or, check out my LinkedIn.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
