import React,{useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is",email );
    console.log("password is",password );

    setEmail("")
    setPassword("")
  }
  
  
  
  
    return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 p-20  border-emerald-600'>
            <form className='flex flex-col items-center justify-center' 
             onSubmit={(e)=>{ 
                submitHandler(e);
                   
           }}
           >
           
                <input  
                value={email}
                onChange={(e)=>{ 
                    setEmail(e.target.value)
                 }}
                required className='border-2 bg-transparent outline-none placeholder:text-grey-400 border-emerald-600 text-white text-xl py-2 px-3 rounded-full' type="email" placeholder='Enter Your Email' />
                <input 
                value={password}
                onChange={(e)=>{ 
                    setPassword(e.target.value)
                }}
                required className='border-2 bg-transparent  mt-4 outline-none placeholder:text-grey-400 border-emerald-600 text-white text-xl py-2 px-3 rounded-full' type="Password" placeholder='Password' />
                <button className='border-2 border-none  mt-8 w-full outline-none placeholder:text-white bg-emerald-600 text-white text-xl py-2 px-3 rounded-full' >Login </button>
            </form>
        </div>
       
    </div>
  )
}

export default Login