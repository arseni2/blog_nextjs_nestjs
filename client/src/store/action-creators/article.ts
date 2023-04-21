import axios from "axios";
import {Dispatch} from "react";
import {ArticleActionsType, articlesActionTypes, ArticleType} from "@/store/types/articles.types";

export const fetchArticles = () => {
    return async (dispatch: Dispatch<ArticleActionsType>) => {
        try {
            const response = await axios.get<ArticleType[]>('http://localhost:8000/article/all')
            dispatch({type: articlesActionTypes.SET_ARTICLES, payload: response.data})
        } catch (e) {
            console.log('error')
        }
    }
}
type CreateArticlePayload = {
    title: string
    body: string
}
export const createArticle = (payload: CreateArticlePayload) => {
    return async (dispatch: Dispatch<ArticleActionsType>) => {
        try {
            const response = await axios.post<ArticleType>('http://localhost:8000/article/create', payload, {withCredentials: true})
            dispatch({type: articlesActionTypes.CREATE_ARTICLES, payload: response.data})
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}
export const getArticleDetail = (id: number) => {
    return async (dispatch: Dispatch<ArticleActionsType>) => {
        try {
            const response = await axios.get<ArticleType>(`http://localhost:8000/article/${id}`,  {withCredentials: true})
            dispatch({type: articlesActionTypes.GET_DETAIL_ARTICLE, payload: response.data})
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}

