import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Header from "@/components/header/Header";
import News from "@/components/news/News";
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {RootState, wrapper} from "@/store";
import {fetchArticles, getArticleDetail} from "@/store/action-creators/article";
import {useSelector} from "react-redux";

const ArticleDetail = () => {
    const article = useSelector((state: RootState) => state.article.article)
    return (
        <>
            <>
                <Head>
                    <title>Blog</title>
                </Head>
                <Header/>
                <News article={article}/>
            </>
        </>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (req) => {
            await store.dispatch(getArticleDetail(req.query.id));
        }
);
export default ArticleDetail;