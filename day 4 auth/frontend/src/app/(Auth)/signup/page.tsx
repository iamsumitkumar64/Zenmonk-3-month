"use client";

import {
    Box,
    Button,
    Checkbox,
    TextField,
    Typography
} from "@mui/material";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupInterface, SignUpSchema } from "@/types/sign-up";
import { ApiCall } from "@/services/http";
import { PasswordValidatorComp } from "@/component/valid-string/pass-comp";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import '../auth.css';
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [doRemeber, setDoRemember] = useState<boolean>(false);
    const router = useRouter();

    const {
        control,
        handleSubmit,
        watch,
        setError,
        clearErrors,
        formState: { errors, isSubmitting }
    } = useForm<SignupInterface>(
        {
            resolver: zodResolver(SignUpSchema),
            defaultValues: { name: "", email: "", password: "" },
        }
    );

    const username = watch("name");
    const email = watch("email");
    const password = watch("password");

    useEffect(() => {
        if (!username) return;

        const delayDebounceFn = setTimeout(async () => {
            const res = await ApiCall(`${process.env.NEXT_PUBLIC_BACKEND_URL}/fetch_by_username/${username}`, 'GET');
            if (res?.users?.length > 0) {
                setError("name", { type: "manual", message: "Username already exists" });
            } else {
                clearErrors("name");
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [username, setError, clearErrors]);

    const onSubmit = async (data: SignupInterface) => {
        const response = await ApiCall(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
            'POST',
            undefined,
            JSON.stringify({ username: data.name, email: data.email, password: data.password })
        );

        if (response.access_token) {
            enqueueSnackbar('User Created Successfully', { variant: 'success' });
            if (doRemeber) {
                localStorage.setItem("token", response.access_token)
            } else {
                sessionStorage.setItem('token', response.access_token);
            }
            Cookies.set("token", JSON.stringify(response.access_token), { expires: 1, path: '/' });
            router.replace('/');
        } else {
            const errorMsg = Array.isArray(response?.message) ? response.message[0] : (response?.message || 'Something Went Wrong');
            enqueueSnackbar(errorMsg, { variant: 'error' });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Box className="heading-section">
                <Typography variant="h4" className="title">Register Your Account</Typography>
                <Typography className="description">Let's Build Something Together</Typography>
            </Box>

            <Box className="body-section">
                <Box className="fields-section">
                    <Controller name="name" control={control} render={({ field }) => (
                        <TextField {...field} label="Username" error={!!errors.name} helperText={errors.name?.message} fullWidth />
                    )} />

                    <Controller name="email" control={control} render={({ field }) => (
                        <TextField {...field} label="Email" error={!!errors.email} helperText={errors.email?.message} fullWidth />
                    )} />

                    <Controller name="password" control={control} render={({ field }) => (
                        <TextField {...field} type="password" label="Password" error={!!errors.password} helperText={errors.password?.message} fullWidth />
                    )} />
                </Box>

                <PasswordValidatorComp text={password || ""} sendDataToParent={setIsPasswordValid} />

                <Box className="button-section">
                    <Box onClick={() => setDoRemember(!doRemeber)} className="remeber-me">
                        <Checkbox checked={doRemeber} /> Remember Me
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!isPasswordValid || !username || !email || !password}
                        fullWidth
                    >
                        {isSubmitting ? "Registering..." : "Sign Up"}
                    </Button>

                    <Typography className="redirection">
                        Already have an account? <Link href="/login">Login</Link>
                    </Typography>
                </Box>
            </Box>
        </form>
    );
}
