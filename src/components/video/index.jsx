import React from 'react'
import { CustomVideo } from '../../style/video'

const Video = () => {
  return (
    <>
   <CustomVideo
        muted
        autoPlay
        loop
      >
        <source src="/images/video5.mp4" type="video/mp4" />
      </CustomVideo>
    </>
  )
}

export default Video