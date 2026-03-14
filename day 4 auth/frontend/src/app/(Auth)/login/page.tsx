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
import { ApiCall } from "@/services/http";
import '../auth.css';
import { LoginInterface, LoginSchema } from "@/types/login";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [doRemeber, setDoRemember] = useState<boolean>(false);
    const router = useRouter();

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<LoginInterface>(
        {
            resolver: zodResolver(LoginSchema),
            defaultValues: { text: "", password: "" },
        }
    );
    const text = watch("text");
    const password = watch("password");

    const onSubmit = async (data: LoginInterface) => {
        const response = await ApiCall(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
            'POST',
            undefined,
            JSON.stringify({ text: data.text, password: data.password })
        );

        if (response.access_token) {
            enqueueSnackbar('Logged In Success', { variant: 'success' });
            if (doRemeber) {
                localStorage.setItem("token", response.access_token)
            } else {
                sessionStorage.setItem('token', response.access_token);
            }
            Cookies.set("token", JSON.stringify(response.access_token));
            router.replace('/');
        } else {
            const errorMsg = Array.isArray(response?.message) ? response.message[0] : (response?.message || 'Something Went Wrong');
            enqueueSnackbar(errorMsg, { variant: 'error' });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form" >
            <Box className="heading-section">
                <Typography variant="h4" className="title">Login  Your Account</Typography>
                <Typography className="description">Let's Build Something Together</Typography>
            </Box>

            <Box className="body-section">
                <Box className="fields-section">
                    <Controller name="text" control={control} render={({ field }) => (
                        <TextField {...field} label="username/email" error={!!errors.text} helperText={errors.text?.message} />
                    )} />

                    <Controller name="password" control={control} render={({ field }) => (
                        <TextField {...field} type="password" label="Password" error={!!errors.password} helperText={errors.password?.message} />
                    )} />
                </Box>

                <Box className="button-section">
                    <Box onClick={() => setDoRemember(!doRemeber)} className="remeber-me">
                        <Checkbox checked={doRemeber} /> Remember Me
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!text || !password}
                    >
                        {isSubmitting ? "Processing..." : "Log In"}
                    </Button>
                    <Typography className="redirection">
                        Create new account? <Link href="/signup">SignUp</Link>
                    </Typography>
                </Box>
            </Box>
        </form>
    );
}