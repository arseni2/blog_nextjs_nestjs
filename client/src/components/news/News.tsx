import React from 'react';
import {Box, Typography} from "@mui/material";
import style from './News.module.scss'
import {ArticleType} from "@/store/types/articles.types";
import {useRouter} from "next/navigation";

type propsType = {
    article: ArticleType
}
const News = ({article}: propsType) => {
    const router = useRouter()
    return (
        <article className={style.article} onClick={() => {router.push(`${article.id}`)}}>
            <Box className={style.article_meta_info}>
                <Typography className={style.article_meta_info_author}>
                    {article.author}
                </Typography>
                <Typography className={style.article_meta_info_create_at}>
                    15 минут назад
                </Typography>
            </Box>
            <Typography className={style.article_title}>
                {article.title}
            </Typography>
            <Typography>
                {article.body}
            </Typography>
        </article>
    );
};
export default News;