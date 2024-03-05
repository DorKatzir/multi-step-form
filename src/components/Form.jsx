import { useState } from "react"
import './form.css'


export default function Form() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')

	function handleNameChange(e) {
		setName(e.target.value)
	}
	function handleEmailChange(e) {
		setEmail(e.target.value)
	}
	function handlePhoneChange(e) {
		setPhone(e.target.value)
	}

	return (
		<>
			<form className='form'>

                    <div className="field">
						<label>Name</label>
                        <input type='text' placeholder='e.g. Stephen King' pattern='^[A-Za-z0-9 ]{3,16}$' value={name} onChange={handleNameChange} required/>
                        <span>This Field is required</span>
                    </div>

                    <div className="field">
						<label>Email Address</label>
                        <input type='email' placeholder='e.g. stephenking@lorem.com' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' value={email} onChange={handleEmailChange} required/>
                        <span>This Field is required</span>
                    </div>

                    <div className="field">
						<label>Phone Number</label>
                        <input type='tel' placeholder='e.g. +1 234 567 890' pattern='^\+(?:[0-9] ?){6,14}[0-9]$' value={phone} onChange={handlePhoneChange} required/>
                        <span>This Field is required</span>
                    </div>

			</form>

			{/* <div className='buttons'>
				<div className='cta'>
					<button>Next Step</button>
				</div>
			</div> */}
		</>
	)
}


