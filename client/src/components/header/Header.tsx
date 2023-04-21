import React, {useState} from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from "next/link";
import LogoutModalWindow from "@/components/LogoutModalWindow/LogoutModalWindow";
import {useRouter} from 'next/router'
import {getCookie} from "cookies-next";


const Header = () => {
    const { push } = useRouter()
    const [open, setOpen] = useState(false)
    const openDialogWindow = () => setOpen(true)
    const closeDialogWindow = () => setOpen(false)
    const router = useRouter()
    const isAuth = !getCookie('connect.sid', {httpOnly: true, secure: true})
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link href={'/'}>
                            News
                        </Link>
                    </Typography>

                    {isAuth
                        ? <>
                            <Link href={'create/article'}>
                                {router.pathname === '/create/article' ? null :
                                    <Button color="inherit" style={{marginRight: 30}}>
                                        create article
                                    </Button>}
                            </Link>
                            <Box display={'flex'} alignItems={'center'} onClick={openDialogWindow}>
                                <AccountCircleIcon fontSize={'large'}/>
                                <Typography mx={2}>DEMO</Typography>
                            </Box>
                        </>
                    :
                        <Button color="inherit" onClick={() => {push("/auth/login")}}>Login</Button>
                    }
                    <LogoutModalWindow handleClose={closeDialogWindow} open={open}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;