import {ArticleState, ArticleActionsType, articlesActionTypes} from "@/store/types/articles.types";

const initialState: ArticleState = {
    articles: [],
    article: {}
}
export const articleReducer = (state = initialState, action: ArticleActionsType): ArticleState => {
    switch (action.type) {
        case articlesActionTypes.SET_ARTICLES:
            return {...state, articles: action.payload}
        case articlesActionTypes.CREATE_ARTICLES:
            return {...state, articles: state.articles.concat(action.payload)}
        case articlesActionTypes.GET_DETAIL_ARTICLE:
            return {...state, article: action.payload}
        default:
            return state
    }
}
