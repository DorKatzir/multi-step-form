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
	
	function handleChangeStep(num){
	  setStep(step => step - num)
	  setStepCounter(counter => counter - num)
  }

  return (
		<>
			<div className="row">

				<div className='container'>
				<Sidebar stepCounter={stepCounter} />
				<div className='main'>
					<div className='content'>

						{ step === 1 
								? <StepOne onNextStep={handleNextStep} /> 
								: null }

						{ step === 2 
								? <StepTwo onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
								: null }

						{ step === 3 
								? <StepThree onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> 
								: null }

						{ step === 4 
								? <StepFour onNextStep={handleNextStep} onPrevStep={handlePrevStep} onChangeStep={handleChangeStep} /> 
								: null }

						{ step === 5 
								? <StepFive /> 
								: null }

					</div>
				</div>
				</div>

				<Footer />
			</div>
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
function StepOne({ onNextStep }) {

  const [user, setUser] = useState({
                                    name: localStorage.getItem('name') || '',
                                    email: localStorage.getItem('email') || '',
                                    phone: localStorage.getItem('phone') || ''
                                    }) 
  
  const [errorName, setErrorName] = useState(Boolean)
  const [errorEmail, setErrorEmail] = useState(Boolean)
  const [errorPhone, setErrorPhone] = useState(Boolean)
  
  function handleNameChange(e){
		const inputName = e.target.value
		setUser({ ...user, name: inputName })
		
		const nameFormat = '^[A-Za-z0-9 ]{3,16}$'

		if (inputName.match(nameFormat)) {
			setErrorName(false)
		} else {
			setErrorName(true)
		}	
  }

  function handleEmailChange(e) {
		const inputEmail = e.target.value
		setUser({ ...user, email: inputEmail })

		const mailformat = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'

		if (inputEmail.match(mailformat)) {
			setErrorEmail(false)
		} else {
			setErrorEmail(true)
		}

  }

function handlePhoneChange(e) {
	const inputPhone = e.target.value
	setUser({ ...user, phone: inputPhone })

	const phoneFormat = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
	

	if (inputPhone.match(phoneFormat)) {
		setErrorPhone(false)
	} else {
		setErrorPhone(true)
	}
}


  function handleSubmit(){
	
    !user.name && setErrorName(true)
    !user.email && setErrorEmail(true)
    !user.phone && setErrorPhone(true)
	
	if (user.name !== null && errorName === false && user.name !== '') {
		localStorage.setItem('name', user.name)

		if (user.email !== null && errorEmail === false && user.email !== '') {
			localStorage.setItem('email', user.email)

			if (user.phone !== null && errorPhone === false && user.phone !== '') {
				localStorage.setItem('phone', user.phone)
				onNextStep()
			}
		}
	} 
    
  }

	return (
		<>
			<div className='text'>
				<h1>Personal info</h1>
				<p>
					Please provide your name, email address, and phone number.
				</p>
			</div>

			<div className='form'>

				<div className='name'>
					<div className="label">
           			 <label>Name</label>{ errorName && <span>Name must be 3-6 characters</span>}
          			</div>
					<input className={ errorName ? 'error' : ''} type='text' placeholder='e.g. Stephen King' value={user.name} onChange={handleNameChange}/>
				</div>

				<div className='email'>
					<div className="label">
            			<label>Email Address</label>{errorEmail && <span>Please insert a valid email addres</span>}
          			</div>
					<input className={errorEmail ? 'error' : ''} type='text' placeholder='e.g. stephenking@lorem.com' value={user.email} onChange={handleEmailChange}/>
				</div>

				<div className='phone'>
					<div className="label">
            		<label>Phone Number</label>{ errorPhone && <span>Please insert a valid phone number</span>}
          		</div>
					<input className={errorPhone ? 'error' : ''} type='text' placeholder='e.g. +1 234 567 890' value={user.phone} onChange={handlePhoneChange}/>
				</div>

			</div>

			<div className="buttons">
				<div className='cta'>
					<button onClick={handleSubmit}>Next Step</button>
				</div>
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
				<h1>Select your plan</h1>
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

			<div className="buttons">
				<div className='cta'>
					<span className='back-btn'>
						<a onClick={onPrevStep}>Go Back</a>
					</span>
					<button onClick={onNextStep}>Next Step</button>
				</div>
			</div>
		</>
	)
}

// STEP 3 //////////////////////////////////////////////
function StepThree({onNextStep, onPrevStep}) {

	const plan = localStorage.getItem('plan')

	const [addOnServices, setAddOnServices] = useState(localStorage.getItem('addOn-1') || '')
	const [addOnStorage, setAddOnStorage] = useState(localStorage.getItem('addOn-2') || '')
	const [addOnProfile, setAddOnProfile] = useState(localStorage.getItem('addOn-3') || '')

	useEffect(()=>{

		addOnServices.length > 0 && localStorage.setItem('addOn-1', addOnServices)
		addOnServices.length === 0 && localStorage.removeItem('addOn-1')
		
		addOnStorage.length > 0 && localStorage.setItem('addOn-2', addOnStorage)
		addOnStorage.length === 0 && localStorage.removeItem('addOn-2')
		
		addOnProfile.length > 0 && localStorage.setItem('addOn-3', addOnProfile)
		addOnProfile.length === 0 && localStorage.removeItem('addOn-3')

	}, [addOnProfile, addOnStorage, addOnServices])

	function handleAddOnServices (e) {
		e.target.value === 'Online service' ? setAddOnServices('') : setAddOnServices('Online service')
	}
	
	function handleAddOnStorage (e) {
		e.target.value === 'Larger storage' ? setAddOnStorage('') : setAddOnStorage('Larger storage')
	}
		
	function handleAddOnProfile(e) {	 
		e.target.value === 'Customizable Profile' ? setAddOnProfile('') : setAddOnProfile('Customizable Profile')	
	}

	return (
		<>
			<div className='text'>
				<h1>Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience.</p>
			</div>

			<div className='add-ons-wrapper'>

				<div className={ addOnServices.length > 0 ? 'card active' :'card' }>
					<label className='addon-check'>
						<input type='checkbox' checked={addOnServices} value={addOnServices} onChange={handleAddOnServices} />
						<span className='checkmark'></span>
					</label>
					<div className='addon-text'>
						<h3>Online service</h3>
						<p>Access to multiplayer games</p>
					</div>
					<div className='addon-price'>{ plan === 'monthly' ? '+$1/mo' : '+$10/yr' }</div>
				</div>

				<div className={ addOnStorage.length > 0 ? 'card active' :'card' }>
					<label className='addon-check'>
						<input type='checkbox' checked={addOnStorage} value={addOnStorage} onChange={handleAddOnStorage} />
						<span className='checkmark'></span>
					</label>
					<div className='addon-text'>
            			<h3>Larger storage</h3>
						<p>Extra 1TB of cloud save</p>
					</div>
					<div className='addon-price'>{ plan === 'monthly' ? '+$2/mo' : '+$20/yr' }</div>
				</div>

				<div className={ addOnProfile.length > 0 ? 'card active' :'card' }>
					<label className='addon-check'>
						<input type='checkbox' checked={addOnProfile} value={addOnProfile} onChange={handleAddOnProfile} />
						<span className='checkmark'></span>
					</label>
					<div className='addon-text'>
            			<h3>Customizable Profile</h3>
            			<p>Custom theme on your profile</p>
					</div>
					<div className='addon-price'>{ plan === 'monthly' ? '+$2/mo' : '+$20/yr' }</div>
				</div>

			</div>

			<div className="buttons">
				<div className='cta'>
					<span className='back-btn'>
						<a onClick={onPrevStep}>Go Back</a>
					</span>
					<button onClick={onNextStep}>Next Step</button>
				</div>
			</div>
		</>
	)
}

// STEP 4 //////////////////////////////////////////////
function StepFour({ onNextStep, onPrevStep, onChangeStep }) {
	const [price, setPrice] = useState(0)
	const [servicePrice, setServicePrice] = useState(0)
	const [storagePrice, setStoragePrice] = useState(0)
	const [profilePrice, setProfilePrice] = useState(0)

	const plan = localStorage.getItem('plan') || 'none' // yearly, monthly
	const type = localStorage.getItem('type') || 'none' // arcade, advanced, pro

	const service = localStorage.getItem('addOn-1') || ''
	const storage = localStorage.getItem('addOn-2') || ''
	const profile = localStorage.getItem('addOn-3') || ''

	const totalPrice = price + servicePrice + storagePrice + profilePrice

	useEffect(() => {
		const monthly = {
			arcade: 9,
			advanced: 12,
			pro: 15,
		}

		const yearly = {
			arcade: 90,
			advanced: 120,
			pro: 150,
		}

		if (service.length > 0 && plan === 'yearly') {
			setServicePrice(10)
		}
		if (storage.length > 0 && plan === 'yearly') {
			setStoragePrice(20)
		}
		if (profile.length > 0 && plan === 'yearly') {
			setProfilePrice(20)
		}

		if (service.length > 0 && plan === 'monthly') {
			setServicePrice(1)
		}
		if (storage.length > 0 && plan === 'monthly') {
			setStoragePrice(2)
		}
		if (profile.length > 0 && plan === 'monthly') {
			setProfilePrice(2)
		}

		if (type === 'arcade' && plan === 'yearly') {
			setPrice(yearly.arcade)
		}
		if (type === 'advanced' && plan === 'yearly') {
			setPrice(yearly.advanced)
		}
		if (type === 'pro' && plan === 'yearly') {
			setPrice(yearly.pro)
		}

		if (type === 'arcade' && plan === 'monthly') {
			setPrice(monthly.arcade)
		}
		if (type === 'advanced' && plan === 'monthly') {
			setPrice(monthly.advanced)
		}
		if (type === 'pro' && plan === 'monthly') {
			setPrice(monthly.pro)
		}
	}, [price, plan, type, service, storage, profile])

	return (
		<>
			<div className='text'>
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>
			</div>

			<div className='summary-wrapper'>
				<div className='summary-content'>
					<div className='summary-plan'>
						<h4 className='plan first-letter'>
							{type ? type : 'no type'} ({plan ? plan : 'no plan'}
							) <br /> <span onClick={()=>onChangeStep(2)}>change</span>
						</h4>
						<span className='price'>
							${price}/{plan === 'monthly' ? 'mo' : 'yr'}
						</span>
					</div>
					<hr />
					<div className='summary-details'>
						{service && (
							<div className='service'>
								<span>Online service</span>
								<span className='service-price'>
									+${servicePrice}/
									{plan === 'monthly' ? 'mo' : 'yr'}
								</span>
							</div>
						)}

						{storage && (
							<div className='storage'>
								<span>Large storage</span>
								<span className='storage-price'>
									+${storagePrice}/
									{plan === 'monthly' ? 'mo' : 'yr'}
								</span>
							</div>
						)}

						{profile && (
							<div className='profile'>
								<span>Customizable Profile</span>
								<span className='profile-price'>
									+${profilePrice}/
									{plan === 'monthly' ? 'mo' : 'yr'}
								</span>
							</div>
						)}
					</div>
				</div>

				<div className='summary-total'>
					<span className='total-text'>
						Total{' '}
						{plan === 'monthly' ? '(per month)' : '(per year)'}{' '}
					</span>
					<span className='total-price'>
						${totalPrice}/{plan === 'monthly' ? 'mo' : 'yr'}
					</span>
				</div>
			</div>

			<div className="buttons">
				<div className='cta'>
					<span className='back-btn'>
						<a onClick={onPrevStep}>Go Back</a>
					</span>
					<button onClick={onNextStep} className='confirm-btn'>
						Confirm
					</button>
				</div>
			</div>
		</>
	)
}

// STEP 5 //////////////////////////////////////////////
function StepFive() {

	useEffect(()=>{
		localStorage.removeItem('email')
		localStorage.removeItem('name')
		localStorage.removeItem('phone')
		localStorage.removeItem('plan')
		localStorage.removeItem('type')
		localStorage.removeItem('addOn-1')
		localStorage.removeItem('addOn-2')
		localStorage.removeItem('addOn-3')
	})

	return (
		<>
			<div className='thank-you-wrapper'>
        <div className="thank-you-icon">
				  <img src={iconThankYou} alt='icon-thank-you'/>
        </div>

				<h1>Thank you!</h1>
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
	<footer>
    <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
        &nbsp; Coded by <a href="#">Dror Katzir</a>.
		<div className="white-bg"></div>
      </div>
	</footer>
  )
}
