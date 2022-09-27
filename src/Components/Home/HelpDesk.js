import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const HelpDesk = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      const onSubmit = async (data) => {
        
        const update = {
            help: data.help,
            user: user.displayName,
            email: user.email,
        }
        
        const url = `http://localhost:8000/help`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(update),
        })
          .then((res) => res.json())
          .then((data) => {
             reset()
    
          });
      };
    return (
        <div className='mt-16 mb-20'>
            <h1 className='text-2xl font-bold'>Help <span className='text-rose-700'>Desk</span></h1>

            <div className=''>
                <h4 className='text-start ml-56 font-bold '>Need help??</h4>
                <p className='text-start ml-56 mb-3 '>You can post for help of any type of sudden accidents.so that,we can collect money and help the affected people.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register("help", {
                            required: {
                              value: true,
                              message: "Help is Required",
                            },
                          })}
           class="textarea ml-5 bg-green-100 textarea-accent w-2/3 " placeholder="Bio"></textarea>
          {
              user?  <button type="submit" className='btn bg-green-600 border-0 px-8 mb-5'>Submit</button>:
              <button type="submit" className='btn bg-green-600 border-0 px-8 mb-5'>
                  <Link to="/login">Submit</Link>
              </button>
          }
          </form>
            
            </div>
            
        </div>
    );
};

export default HelpDesk;