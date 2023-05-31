import React from 'react'

const OrderForm = ({orderDone}) => {

    // const {orderDone} = MakeOrderFn
    

    function onSubmitForm(e){ 
        e.preventDefault()
        
        //Form Values
        const firstNameForm = document.getElementById("userFirstNameInput").value
        const lastNameForm = document.getElementById("userLastNameInput").value
        const emailForm = document.getElementById("userEmailInput").value

        orderDone(firstNameForm, lastNameForm, emailForm)
        
    }

    
  return (
    <div className="formContainer">
    <div className="formArea">
    <form onSubmit={onSubmitForm}>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">First Name</label>
  <input required type="text"  placeholder='enter your name' className="form-control" id="userFirstNameInput" aria-describedby="emailHelp" />
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Last Name</label>
  <input required type="text" placeholder='enter your last name'className="form-control" id="userLastNameInput" />
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Email</label>
  <input required type="email" placeholder='enter your email' className="form-control" id="userEmailInput" />
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input required type="password" placeholder='enter your password' className="form-control" id="userPasswordInput" />
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">credit cart code</label>
  <input required type="password" placeholder='cart code' className="form-control" id="userCartCodeInput" />
</div>


<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  </div>
  )
}

export default OrderForm