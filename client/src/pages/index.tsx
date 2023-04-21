import Head from 'next/head'
import Header from "@/components/header/Header";
import News from "@/components/news/News";
import {RootState, wrapper} from "@/store";
import {fetchArticles} from "@/store/action-creators/article";
import {useSelector} from "react-redux";


export default function Home() {
    const articles = useSelector((state: RootState) => state.article.articles)
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header/>
            {articles.map((article, i) => {
               return <News article={article} key={i} />
            })}
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (req) => {
            await store.dispatch(fetchArticles());
        }
);