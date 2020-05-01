import React from 'react';
import ProceedButton from '../Styles/ProceedButton'

const Upload = () => {
  return (
    <React.Fragment>
      <h1>Upload Your Video Course</h1>
      <input
        accept="video/*"        
        style={{ display: 'none' }}
        id="uploadFile"
        multiple
        type="file"
      />
      <label htmlFor="uploadFile">
        <ProceedButton variant="raised" component="span">
          Upload Course
        </ProceedButton>
      </label>
    </React.Fragment>
  )
}

export default Upload;
