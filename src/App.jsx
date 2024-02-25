/* eslint-disable react/prop-types */
import { useState } from 'react'
import iconArcade from './assets/images/icon-arcade.svg'
import iconAdvanced from './assets/images/icon-advanced.svg'
import iconPro from './assets/images/icon-pro.svg'


export default function App() {
  // const [userInfo, setUserInfo] = useState({
  //                                   name: 'dror',
  //                                   email: 'dror@gmail.com',
  //                                   phone: '123456',
  //                                   }) 

  const [step, setStep] = useState(1)
  const [stepCounter, setStepCounter] = useState(1)

  function handleNextStep(){
    setStep(step => step + 1)
    setStepCounter(counter => counter + 1)
  }

  function handlePrevStep(){
    setStep(step => step - 1)
    setStepCounter(counter => counter - 1)
  }


  return (
		<>
			<div className='container'>
				<Sidebar stepCounter={stepCounter} />
				<div className='main'>
					<div className='content'>

						{ step === 1 ? 
                <StepOne onNextStep={handleNextStep}/> 
              : null }

						{ step === 2 ? 
                <StepTwo onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
              : null }

						{ step === 3 ? 
                <StepThree onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
              : null }

						{ step === 4 ? 
              <StepFour onPrevStep={handlePrevStep} /> 
              : null }

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
function StepOne({ onNextStep }) {
	return (
		<>
			<div className='text'>
				<h2>Personal info</h2>
				<p>
					Please provide your name, email address, and phone number.
				</p>
			</div>

			<div className='form'>
				<div className='name'>
					<label>Name</label>
					<input
						type='text'
						name=''
						id=''
						placeholder='e.g. Stephen King'
					/>
				</div>

				<div className='email'>
					<label>Email Address</label>
					<input
						type='text'
						name=''
						id=''
						placeholder='e.g. stephenking@lorem.com'
					/>
				</div>

				<div className='phone'>
					<label>Phone Number</label>
					<input
						type='text'
						name=''
						id=''
						placeholder='e.g. +1 234 567 890'
					/>
				</div>
			</div>

			<div className='cta'>
				<button onClick={onNextStep}>Next Step</button>
			</div>
		</>
	)
}

// STEP 2 //////////////////////////////////////////////
function StepTwo({onNextStep, onPrevStep}) {

	return (
		<>
			<div className='text'>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>

			<div className='plan-wrapper'>
				<div className='plan-cards'>
					<div className='card'>
						<div className='icon'>
							<img src={iconArcade} alt='icon arcade' />
						</div>
						<div className='text'>Arcade</div>
						<div className='price'>$9/mo</div>
					</div>
					<div className='card'>
						<div className='icon'>
							<img src={iconAdvanced} alt='icon advanced' />
						</div>
						<div className='text'>Advanced</div>
						<div className='price'>$12/mo</div>
					</div>
					<div className='card'>
						<div className='icon'>
							<img src={iconPro} alt='icon pro' />
						</div>
						<div className='text'>Pro</div>
						<div className='price'>$15/mo</div>
					</div>
				</div>
				<div className='plan'>
					<span className='blue'>Monthly</span>
					<span>
						<label className='switch'>
							<input type='checkbox' />
							<span className='slider round'></span>
						</label>
					</span>
					<span className=''>Yearly</span>
				</div>
			</div>

			<div className='cta'>
				<span className='back-btn'>
					<a onClick={onPrevStep}>Go Back</a>
				</span>
				<button onClick={onNextStep}>Next Step</button>
			</div>
		</>
	)
}

// STEP 3 //////////////////////////////////////////////
function StepThree({onNextStep, onPrevStep}) {

	return (
		<>
			<div className='text'>
				<h2>Pick add-ons</h2>
				<p>Add-ons help enhance your gaming experience.</p>
			</div>

			<div className='add-ons-wrapper'>
				<div className='card'>
					<label className=''>
						<input type='checkbox' checked='checked' />
						<span className='checkmark'></span>
					</label>
					<div className='text'>
						Online service <br />
						Access to multiplayer games
					</div>
					<div className='price'>+$1/mo</div>
				</div>

				<div className='card'>
					<label className=''>
						<input type='checkbox' checked='checked' />
						<span className='checkmark'></span>
					</label>
					<div className='text'>
						Larger storage
						<br />
						Extra 1TB of cloud save
					</div>
					<div className='price'>+$2/mo</div>
				</div>

				<div className='card'>
					<label className=''>
						<input type='checkbox' checked='checked' />
						<span className='checkmark'></span>
					</label>
					<div className='text'>
						Customizable Profile <br />
						Custom theme on your profile
					</div>
					<div className='price'>+$2/mo</div>
				</div>
			</div>

			<div className='cta'>
				<span className='back-btn'>
					<a onClick={onPrevStep}>Go Back</a>
				</span>
				<button onClick={onNextStep}>Next Step</button>
			</div>
		</>
	)
}


// STEP 4 //////////////////////////////////////////////
function StepFour({onPrevStep}) {

	return (
		<>
			<div className='text'>
				<h2>Finishing up</h2>
				<p>Double-check everything looks OK before confirming.</p>
			</div>

			<div className='form'>
				<div className='name'>{/*  */}</div>

				<div className='email'>{/*  */}</div>

				<div className='phone'>{/*  */}</div>
			</div>

			<div className='cta'>
				<span className='back-btn'>
					<a onClick={onPrevStep}>Go Back</a>
				</span>
				<button>Submit</button>
			</div>
		</>
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
