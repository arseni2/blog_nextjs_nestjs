import React, {useState} from 'react';
import Header from "@/components/header/Header";
import {Box, Button, Input} from '@mui/material';
import {useDispatch} from "react-redux";
import {createArticle} from "@/store/action-creators/article";
import {useRouter} from 'next/navigation';

const ArticleCreateForm = () => {
    const { push } = useRouter()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBody(e.target.value)
    }
    const handleSubmit = () => {
        dispatch(createArticle({body, title}))
        push("/")
    }
    return (
        <>
            <Header/>
            <Box display={'flex'} flexDirection={'column'} gap={'20px'} height={'100%'} width={'100%'}
                 justifyContent={'center'} alignItems={'center'} mt={'20%'}>
                <Input onChange={onChangeTitle} placeholder={'Enter title'}/>
                <Input onChange={onChangeBody} placeholder={'Enter body'}/>
                <Button onClick={handleSubmit}>
                    Create Article
                </Button>
            </Box>

        </>
    );
};

export default ArticleCreateForm;