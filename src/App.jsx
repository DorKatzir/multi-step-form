/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import iconArcade from './assets/images/icon-arcade.svg'
import iconAdvanced from './assets/images/icon-advanced.svg'
import iconPro from './assets/images/icon-pro.svg'
import iconThankYou from './assets/images/icon-thank-you.svg'

// PARENT APP ////////////////////////////////////////////
export default function App() {

  const [step, setStep] = useState(1)
  const [stepCounter, setStepCounter] = useState(1)

  function handleNextStep() {
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

						{ step === 1 
								? <StepOne onNextStep={handleNextStep}/> 
								: null }

						{ step === 2 
								? <StepTwo onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
              					: null }

						{ step === 3 
								? <StepThree onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
              					: null }

						{ step === 4 
								? <StepFour onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
              					: null }

						{ step === 5 
								? <StepFive /> 
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
				<span className={ (stepCounter === 4 || stepCounter === 5) ? 'step_number active' : 'step_number' }>4</span>
				<span className='step_box'>
					<span className='title'>Step 4</span>
					<span className='text'>Summary</span>
				</span>
			</div>

		</div>
  )
}

// STEP 1  //////////////////////////////////////////////
function StepOne({ onNextStep}) {

  const [user, setUser] = useState({
                                    name: localStorage.getItem('name'),
                                    email: localStorage.getItem('email'),
                                    phone: localStorage.getItem('phone'),
                                    }) 
  
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  
  function handleNameChange(e){
		const newName = e.target.value.trim()

		// eslint-disable-next-line no-useless-escape
		const nameFormat = /^[A-Za-z]+$/

		if (newName.match(nameFormat)) {
			setErrorName(false)
		} else {
			setErrorName(true)
		}

		setUser({ ...user, name: newName })
		localStorage.setItem('name', newName)
  }

  function handleEmailChange(e){
    const newEmail = e.target.value.trim()
    // eslint-disable-next-line no-useless-escape
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(newEmail.match(mailformat)) {
      setErrorEmail(false)
    } else { 
     setErrorEmail(true)
    }

    setUser({ ...user, email:newEmail })
    localStorage.setItem('email', newEmail)
  }

  function handlePhoneChange(e){

    const newPhone = e.target.value.trim()

    // eslint-disable-next-line no-useless-escape
    const phoneFormat = /^\d{10}$/

    if(newPhone.match(phoneFormat)) {
      setErrorPhone(false)
    } else { 
     setErrorPhone(true)
    }

    setUser({ ...user, phone:newPhone })
    localStorage.setItem('phone', newPhone)

  }

  function handleSubmit(){

    if (!user.name) {
      setErrorName(true)
    } else if (!user.email){
      setErrorEmail(true)
    } else if (!user.phone){
      setErrorPhone(true)
    } else {
      onNextStep()
    }
   
    
  }

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
					<div className="label">
            <label>Name</label>{ errorName && <span>This Field is required</span>}
          </div>
					<input className={ errorName ? 'error' : ''} type='text' placeholder='e.g. Stephen King' value={user.name} onChange={handleNameChange}/>
				</div>

				<div className='email'>
					<div className="label">
            <label>Email Address</label>{errorEmail && <span>This Field is required</span>}
          </div>
					<input className={errorEmail ? 'error' : ''} type='text' placeholder='e.g. stephenking@lorem.com' value={user.email} onChange={handleEmailChange}/>
				</div>

				<div className='phone'>
					<div className="label">
            <label>Phone Number</label>{ errorPhone && <span>This Field is required</span>}
          </div>
					<input className={errorPhone ? 'error' : ''} type='text' placeholder='e.g. +1 234 567 890' value={user.phone} onChange={handlePhoneChange}/>
				</div>

			</div>

			<div className='cta'>
				<button onClick={handleSubmit}>Next Step</button>
			</div>
		</>
	)
}

// STEP 2 //////////////////////////////////////////////
function StepTwo({onNextStep, onPrevStep}) {
  
	const monthly = {
				arcade: '$9/mo',
				advanced: '$12/mo',
				pro: '$15/mo'
			} 

	const yearly ={
				arcade: '$90/yr',
				advanced: '$120/yr',
				pro: '$150/yr',
				bonus: '2 months free'
			}

	const p = localStorage.getItem('plan') ? localStorage.getItem('plan') : 'monthly'
  	const [plan, setPlan] = useState(p)

	const type = !localStorage.getItem('type') ? 'arcade' : localStorage.getItem('type')
	const [arcade, setArcade] = useState(type === 'arcade')
	const [advanced, setAdvanced] = useState(type === 'advanced')
	const [pro, setPro] = useState(type === 'pro')

	useEffect(()=>{
		if (arcade) {
			localStorage.setItem('plan', plan)
			localStorage.setItem('type', 'arcade')
		} else if (advanced) {
			localStorage.setItem('plan', plan)
			localStorage.setItem('type', 'advanced')
		} else if (pro) {
			localStorage.setItem('plan', plan)
			localStorage.setItem('type', 'pro')
		}
	}, [arcade,advanced,pro, plan])
	

  ////////////////////////////////////////////////
	function handleArcade(){
		setArcade(true)
		setAdvanced(false)
		setPro(false)
	}

	function handleAdvanced(){
		setArcade(false)
		setAdvanced(true)
		setPro(false)
	}

	function handlePro(){
		setArcade(false)
		setAdvanced(false)
		setPro(true)
	}

	function handlePlan(){
		plan !== 'monthly' ? setPlan('monthly') : setPlan('yearly')
	}

  //////////////////////////////////////////////
	return (
		<>
			<div className='text'>
				<h2>Select your plan</h2>
				<p>You have the option of monthly or yearly billing.</p>
			</div>

			<div className='plan-wrapper'>
				<div className='plan-cards'>
					<div className={arcade ? 'card active' : 'card'} onClick={handleArcade}>
						<div className='icon'>
							<img src={iconArcade} alt='icon arcade' />
						</div>
						<div className='text'>Arcade</div>

						<div className='price'>{plan === 'monthly' ? monthly.arcade : yearly.arcade}</div>
						{ plan === 'yearly' && <span className='bonus'> {yearly.bonus} </span> }

					</div>
					<div className={advanced ? 'card active' : 'card'} onClick={handleAdvanced}>
						<div className='icon'>
							<img src={iconAdvanced} alt='icon advanced' />
						</div>
						<div className='text'>Advanced</div>
						
						<div className='price'>{plan === 'monthly' ? monthly.advanced : yearly.advanced}</div>
            { plan === 'yearly' && <span className='bonus'> {yearly.bonus} </span> }

					</div>
					<div className={pro ? 'card active' : 'card'} onClick={handlePro}>
						<div className='icon'>
							<img src={iconPro} alt='icon pro' />
						</div>
						<div className='text'>Pro</div>
            
						<div className='price'>{plan === 'monthly' ? monthly.pro : yearly.pro}</div>
            { plan === 'yearly' && <span className='bonus'> {yearly.bonus} </span> }

					</div>
				</div>
				<div className='plan'>
					<span className={plan === 'monthly' ? 'blue' : ''}>Monthly</span>
					<span>
						<label className='switch'>
							<input type='checkbox' checked={plan === 'yearly' ? 'checked' : ''} onChange={handlePlan} />
							<span className='slider round'></span>
						</label>
					</span>
					<span className={plan === 'yearly' ? 'blue' : ''}>Yearly</span>
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
					<label className='addon-check'>
						<input type='checkbox' />
						<span className='checkmark'></span>
					</label>
					<div className='addon-text'>
						<h3>Online service</h3>
						<p>Access to multiplayer games</p>
					</div>
					<div className='addon-price'>+$1/mo</div>
				</div>

				<div className='card'>
					<label className='addon-check'>
						<input type='checkbox' />
						<span className='checkmark'></span>
					</label>
					<div className='addon-text'>
            <h3>Larger storage</h3>
						<p>Extra 1TB of cloud save</p>
					</div>
					<div className='addon-price'>+$2/mo</div>
				</div>

				<div className='card'>
					<label className='addon-check'>
						<input type='checkbox' />
						<span className='checkmark'></span>
					</label>
					<div className='addon-text'>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
					</div>
					<div className='addon-price'>+$2/mo</div>
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
function StepFour({onNextStep, onPrevStep}) {

	return (
		<>
			<div className='text'>
				<h2>Finishing up</h2>
				<p>Double-check everything looks OK before confirming.</p>
			</div>

			<div className='summary-wrapper'>
				<div className='summary-content'>
					<div className='summary-plan'>
						<h4 className='plan'>
							Arcade(Yearly) <br /> <span>change</span>
						</h4>
						<span className='price'>$90/yr</span>
					</div>
					<hr />
					<div className='summary-details'>
						<div className='service'>
							<span>Online service</span>
							<span className='service-price'>+$10/yr</span>
						</div>
						<div className='storage'>
							<span>Large storage</span>
							<span className='storage-price'>+$20/yr</span>
						</div>
					</div>
				</div>

				<div className='summary-total'>
					<span className='total-text'>Total (per year)</span>
					<span className='total-price'>$120/yr</span>
				</div>
			</div>

			<div className='cta'>
				<span className='back-btn'>
					<a onClick={onPrevStep}>Go Back</a>
				</span>
				<button onClick={onNextStep} className='confirm-btn'>Confirm</button>
			</div>
		</>
	)
}

// STEP 5 //////////////////////////////////////////////
function StepFive() {

	return (
		<>
			<div className='thank-you-wrapper'>
        <div className="thank-you-icon">
				  <img src={iconThankYou} alt='icon-thank-you'/>
        </div>

				<h2>Thank you!</h2>
				<p>
					Thanks for confirming your subscription! We hope you have
					fun using our platform. If you ever need support, please
					feel free to email us at support@loremgaming.com.
				</p>
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
