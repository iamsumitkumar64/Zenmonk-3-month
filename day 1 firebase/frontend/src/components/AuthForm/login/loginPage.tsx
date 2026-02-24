import ApiCallService from '@/services/http';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import './loginPage.css'

export default function LoginComp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async (data: any) => {
        console.log('Login Form Data =>', data);
        const response = await ApiCallService(`http://localhost:9000/login`, 'POST', '', data);
        console.log('Login Response =>', response);
        if (response) {
            localStorage.setItem('token', response.access_token)
            enqueueSnackbar('Login Success');
        }
        else {
            enqueueSnackbar(response.error);
        }
    }

    return (
        <div className='main'>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                {/* Username Field*/}
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        {...register("username", {
                            required: "Username is required."
                        })}
                    />
                    {errors.username && (<p>{errors.root?.message}</p>)}
                </div>
                {/* Email Field*/}
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid."
                            }
                        })}
                    />
                    {errors.email && (<p>{errors.root?.message}</p>)}
                </div>
                {/* Password Field*/}
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 6,
                                message: "Password should be at least 6 characters."
                            }
                        })}
                    />
                    {errors.password && (<p>{errors.root?.message}</p>)}
                </div>
                {/* Submit Button*/}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}