import React from 'react';
import {Box, Button, Input} from "@mui/material";
import Header from "@/components/header/Header";
import axios from "axios";
import {useRouter} from "next/navigation";

const Login = () => {
    const { push } = useRouter();
    const handleClick = async () => {
        try {
            let response = await axios.post('http://localhost:8000/auth/login', {username: "DEMO", password: "DEMO"}, {withCredentials: true})
            console.log('clicked')
            push("/")
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Header/>
            <Box mt={'30px'} display={'flex'} gap={'10px'}>
                <Input placeholder={'Enter name'} value={'DEMO'}/>
                <Input placeholder={'Enter pass'} value={'DEMO'}/>
                <Button onClick={handleClick}>
                    Login
                </Button>
            </Box>

        </>
    );
};

export default Login;