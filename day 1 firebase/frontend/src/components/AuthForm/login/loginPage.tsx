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
        const response = await ApiCallService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, 'POST', {}, data);
        if (response.access_token) {
            localStorage.setItem('token', response.access_token)
            enqueueSnackbar('Login Success');
        }
        else {
            enqueueSnackbar(response.message);
        }
    }

    return (
        <div className='main'>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
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
                                value: 8,
                                message: "Password should be at least 8 characters."
                            }
                        })}
                    />
                    {errors.root?.message}
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