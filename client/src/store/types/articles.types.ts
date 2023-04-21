export enum articlesActionTypes {
    SET_ARTICLES = "SET_ARTICLES",
    CREATE_ARTICLES = "CREATE_ARTICLES",
    GET_DETAIL_ARTICLE = "GET_DETAIL_ARTICLE"
}

export interface ArticleType {
    id: number,
    title: string,
    body: string,
    author: any
}

interface setArticleAction {
    type: articlesActionTypes.SET_ARTICLES,
    payload: ArticleType[]
}
interface createArticleAction {
    type: articlesActionTypes.CREATE_ARTICLES,
    payload: ArticleType
}
interface getDetailArticleAction {
    type: articlesActionTypes.GET_DETAIL_ARTICLE,
    payload: ArticleType
}
export type ArticleActionsType = createArticleAction | setArticleAction | getDetailArticleAction

export type ArticleState = {
    articles: Array<ArticleType>
    article: ArticleType | {}
}