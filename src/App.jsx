
export default function App() {
  

  return (
    <>
      <div className="container"> 
        <Sidebar/>
        <div className="main">
          <div className="content">

            <StepOne/>

          </div>
        </div>

      </div>

      <Footer/>
    </>
  )
}

function Sidebar() {
  return (
		<div className='sidebar'>

			<div className='step'>
				<span className='step_number active'>1</span>
				<span className='step_box'>
					<span className='title'>Step 1</span>
					<span className='text'>Your info</span>
				</span>
			</div>

			<div className='step'>
				<span className='step_number'>2</span>
				<span className='step_box'>
					<span className='title'>Step 2</span>
					<span className='text'>Select plan</span>
				</span>
			</div>

			<div className='step'>
				<span className='step_number'>3</span>
				<span className='step_box'>
					<span className='title'>Step 3</span>
					<span className='text'>Add-ons</span>
				</span>
			</div>

			<div className='step'>
				<span className='step_number'>4</span>
				<span className='step_box'>
					<span className='title'>Step 4</span>
					<span className='text'>Summary</span>
				</span>
			</div>

		</div>
  )
}

function StepOne() {
  return (
		<>

      <div className="text">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <form className="form">

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

      </form>

      <div className="cta">
        <button>Next Step</button>
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
