import ApiCallService from '@/services/http';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import './registerPage'

export default function RegisterComp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async (data: any) => {
        console.log('Register Form Data =>', data);
        const response = await ApiCallService(`http://localhost:9000/register`, 'POST', {}, data);
        console.log('Register Response =>', response);
        enqueueSnackbar(response.message);
    }

    return (
        <div className='main'>
            <h1>Register Form</h1>
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
                    {errors.email && <p>{errors.root?.message}</p>}
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
                {/* Submit Button */}
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}