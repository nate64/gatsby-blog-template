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
          alt={`Nate Estes`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          My Name is Nate Estes.  I am a Full Stack Web Developer Using ReactJS and Ruby on Rails.
          I was Born in a Log Cabin.  {' '}
          <a href="https://twitter.com/nate64">
            Find me on the Twitter.  {' '}
          </a>
          {/* and check out my github */}
        </p>
      </div>
    )
  }
}

export default Bio
