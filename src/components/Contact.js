import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const {register,handleSubmit,formState}=useForm()

  const collectFormData=(allFormdata)=>{
    console.log(allFormdata);
    
  }

  return (
    <div className='container border border-dark mt-3'>
      <h1>Contact Form</h1>
    <div className=' mt-4 b-1'style={{"border":2+"px"+"solid"+"black"}}>
      <form onSubmit={handleSubmit(collectFormData)}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name :</label>
    <input type="text" className="form-control" id="name"
    {...register('name',{required:true,minLength:3,maxLength:15})} />
    <div  className="form-text text-danger">
      {formState.errors && formState.errors.name && formState.errors.name.type=="required" &&"Name is required"}
      {formState.errors && formState.errors.name && formState.errors.name.type=="minLength" && "minimum 3 character required"}
      {formState.errors && formState.errors.name && formState.errors.name.type=="maxLength" && "maximum characters must be 15"}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">age :</label>
    <input type="number" className="form-control" id="age"
    {...register('age',{required:true,min:18,max:40})} />  
    <div  className="form-text text-danger">
      {formState.errors && formState.errors.age && formState.errors.age.type=="required" && "age is required"}
      {formState.errors && formState.errors.age && formState.errors.age.type=="min" && "age must be greater than or equal to 18"}
      {formState.errors && formState.errors.age && formState.errors.age.type=="max" && "maximum age limit is 40"}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">E-mail id :</label>
    <input type="email" className="form-control" id="email"
    {...register('email',{required:true,minLength:5,maxLength:40})} />  
    <div  className="form-text text-danger">
      {formState.errors && formState.errors.email && formState.errors.email.type=="required" && "email is required"}
      {formState.errors && formState.errors.email && formState.errors.email.type=="minLength" && "email must have atleast 5 characters"}
      {formState.errors && formState.errors.email && formState.errors.email.type=="maxLength" && "maximum email limit is 40"}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="contact" className="form-label">contact no :</label>
    <input type="number" className="form-control" id="contact"
    {...register('age',{required:true,min:10,max:10})} />  
    <div  className="form-text text-danger">
      {formState.errors && formState.errors.contact && formState.errors.contact.type=="required" && "contact no is required"}
      {formState.errors && formState.errors.contact && formState.errors.contact.type=="min" && "contact must be 10 digits"}
      {formState.errors && formState.errors.contact && formState.errors.contact.type=="max" && "contact must be 10 digits"}
    </div>
  </div>
  
  
  
  <button type="submit" className="btn btn-dark w-100 mb-4 ">Submit</button>
</form>
    </div> 
    </div>
  )
}
