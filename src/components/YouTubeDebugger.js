// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      handleBirate = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
      }

      handleResolution = () => {
        this.setState({
            video: {
                ...this.state.video, 
                resolution: '720p' 
            }
        })
      }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBirate}>bitrate</button>
                <button className='resolution' onClick={this.handleResolution}>resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger