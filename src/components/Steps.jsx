import React from 'react'

const Steps = () => {
  return (
    <div className='steps-section'>
      <div className="container">
        <div className="heading mb-8">
            <h2>How To Get Started With Reni</h2>
            <p>Getting started has never been this easy.</p>
        </div>
        <div className="steps mb-8">
            <div className="step">
                <h3><b>Register In Minutes</b></h3>
                <p>Sign up online with your business details and work email address.</p>
            </div>
            <div className="step">
                <h3><b>Account Activation</b></h3>
                <p>Verify your email address to activate your Reni account.</p>
            </div>
            <div className="step">
                <h3><b>Start Managing</b></h3>
                <p>Upload your business data and start managing with our easy tools.</p>
            </div>
        </div>
        <div className="button flex justify-end">
            <a href="" className="btn primary mt-8">Get Started — It's Free</a>
        </div>
      </div>
    </div>
  )
}

export default Steps
