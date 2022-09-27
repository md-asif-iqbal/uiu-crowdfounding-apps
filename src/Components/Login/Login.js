import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import Loading from "../Loading/Loading";
import useToken from "../../Hooks/useToken";
const Login = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
  
    let signInError;
	const [token] = useToken(user || gUser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
      if(token) {
        navigate(from, { replace: true });
    
    }
       
    }, [user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }
	const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);
    }

    if(error || gError){
        signInError= <p className='text-red-600'><small>{error?.message || gError?.message }</small></p>
    }
  return (
    <div >
     <div class="w-full lg:ml-96 bg-gray-100 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 class="text-2xl font-bold text-center">Login</h1>
	<form novalidate="" onSubmit={handleSubmit(onSubmit)} action="" class="space-y-6 ng-untouched ng-pristine ng-valid">
		<div class="space-y-1 text-sm">
			<label for="username" class="block dark:text-gray-400">Email</label>
			<input
			{...register("email", {
				required: {
					value: true,
					message: 'Email is Required'
				},
				pattern: {
					value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
					message: 'Provide a valid Email'
				}
			})}
type="text" name="username" id="username" placeholder="Enter your Email" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"/>
 <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
		</div>
		<div class="space-y-1 text-sm">
			<label for="password" class="block dark:text-gray-400">Password</label>
			<input type="password" 
			{...register("password", {
				required: {
					value: true,
					message: 'Password is Required'
				},
				minLength: {
					value: 6,
					message: 'Must be 6 characters or longer'
				}
			})}
			 name="password" id="password" placeholder="Password" class="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"/>
			  <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
			<div class="flex justify-end text-xs dark:text-gray-400">

			</div>
		</div>
		<button class="block w-full p-3 text-center rounded-sm text-gray-100 font-bold bg-violet-400 ">Sign in</button>
	</form>
	<div class="flex items-center pt-4 space-x-1">
		<div class="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p class="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div class="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div class="flex justify-center space-x-4">
		<button aria-label="Log in with Google" onClick={() => signInWithGoogle()} class="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
	</div>
	<p class="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
		<Link to="/signUp" rel="noopener noreferrer" class="underline text-rose-600 dark:text-gray-100">Sign up</Link>
	</p>
</div>
    </div>
  );
};

export default Login;
