import{useState} from 'react';

const Form = () => {
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[confirmPass,setConfirmPass] = useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name&&email&&password&&confirmPass){
            alert("Signup successfully")
            if(password === confirmPass){
                alert("Signup Successfully")
            }else{
                alert("Err:Password & confirmpassword must be same");
            }
        }else{
            alert("All fields are mandatory")
        }
    }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <p className='heading'>Sign Up</p>
            <div>
                <p className='fieldName'>Name</p>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <p className={name?"data":"noData"}>{name ? "":"Name is required"}</p>
            </div>
            <div>
                <p className='fieldName'>Email</p>
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <p className={email?"data":"noData"}>{email?"":"Email is Required"}</p>
            </div>
            <div>
                <p className='fieldName'>Password</p>
                <input type="password"onChange={(e)=>setPassword(e.target.value)}/>
                <p className={password?"data":"noData"}>{password?"":"password is Required"}</p>
            </div>
            <div>
                <p className='fieldName'>Confirm Password</p>
                <input type="password" onChange={(e)=>setConfirmPass(e.target.value)}/>
                <p className={confirmPass?"data":"noData"}>{confirmPass? "":"Confirmpassword is Required"}</p>
            </div>
            <div>
                <button>Signup</button>
            </div>
        </form>
      </div>
    </>
  );
};
export default Form;


