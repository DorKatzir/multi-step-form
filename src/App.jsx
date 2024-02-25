/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

export default function App() {
  const [userInfo, setUserInfo] = useState({
                                    name: 'dror',
                                    email: 'dror@gmail.com',
                                    phone: '123456',
                                    }) 

  const [step, setStep] = useState(1)
  const [stepCounter, setStepCounter] = useState(1)


  return (
		<>
			<div className='container'>
				<Sidebar stepCounter={stepCounter} />
				<div className='main'>
					<div className='content'>

						{ step === 1 ? <StepOne onSetStep={setStep} onStepCounter={setStepCounter}/> : null }
						{ step === 2 ? <StepTwo onSetStep={setStep}/> : null }
						{ step === 3 ? <StepThree onSetStep={setStep}/> : null }
						{ step === 4 ? <StepFour onSetStep={setStep}/> : null }

					</div>
				</div>
			</div>

			<Footer />
		</>
  )
}

// SIDEBAR ///////////////////////////////////////////////
function Sidebar({stepCounter}) {
  return (
		<div className='sidebar'>

			<div className='step'>
				<span className={ (stepCounter === 1) ? 'step_number active' : 'step_number' }>1</span>
				<span className='step_box'>
					<span className='title'>Step 1</span>
					<span className='text'>Your info</span>
				</span>
			</div>

			<div className='step'>
				<span className={ (stepCounter === 2) ? 'step_number active' : 'step_number' }>2</span>
				<span className='step_box'>
					<span className='title'>Step 2</span>
					<span className='text'>Select plan</span>
				</span>
			</div>

			<div className='step'>
				<span className={ (stepCounter === 3) ? 'step_number active' : 'step_number' }>3</span>
				<span className='step_box'>
					<span className='title'>Step 3</span>
					<span className='text'>Add-ons</span>
				</span>
			</div>

			<div className='step'>
				<span className={ (stepCounter === 4) ? 'step_number active' : 'step_number' }>4</span>
				<span className='step_box'>
					<span className='title'>Step 4</span>
					<span className='text'>Summary</span>
				</span>
			</div>

		</div>
  )
}

// STEP 1  //////////////////////////////////////////////
function StepOne({onSetStep, onStepCounter}) {

  function handleNextStep(){
    onSetStep(step => step + 1)
    onStepCounter(counter => counter + 1)
  }

  return (
		<>

      <div className="text">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <div className="form">

        <div className="name">
          <label>Name</label>
          <input type="text" name="" id="" placeholder="e.g. Stephen King"/>
        </div>

        <div className="email">
          <label>Email Address</label>
          <input type="text" name="" id="" placeholder="e.g. stephenking@lorem.com"/>
        </div>

        <div className="phone">
          <label>Phone Number</label>
          <input type="text" name="" id="" placeholder="e.g. +1 234 567 890"/>
        </div>

      </div>

      <div className="cta">
        <button onClick={handleNextStep} >Next Step</button>
      </div>

		</>
  )
}

// STEP 2 //////////////////////////////////////////////
function StepTwo() {

	return (
		<>
			<div className='text'>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>

			<div className='form'>
				<div className='name'>
					{/*  */}
				</div>

				<div className='email'>
					{/*  */}
				</div>

				<div className='phone'>
					{/*  */}
				</div>
			</div>

			<div className='cta'>
        <a href="./">Go Back</a>
				<button onClick=''>Next Step</button>
			</div>
		</>
	)
}











function StepThree() {
  return (
    <div>
      Step 3 - Add-ons
    </div>
  )
}
function StepFour() {
  return (
    <div>
      Step 4 - Summry
    </div>
  )
}



function Footer() {
  return (
    <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
        Coded by <a href="#">Dror Katzir</a>.
      </div>
  )
}
