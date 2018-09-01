import React from 'react'
import './Form.css'
const Form=({onInputChange})=>{
	return(
		<div>
			<p className='f3 center'>
				{'User Details'}
			</p>
			<div class="login-page">
  <div class="form">
 
    <form class="login-form">
      <input type="text" placeholder="First Name"/>
      <input type="text" placeholder="Last Name"/>
      <input type="text" placeholder="Age"/>
      <input type="text" placeholder="Email"/>
      <button>Submit</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
			</div>
				
		</div>
	</div>
		)
}
export default Form;