import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {articleReducer} from "@/store/reducers/article.reducer";


export const rootReducer = combineReducers({
    article: articleReducer
})

export const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
    } else {
        return rootReducer(state, action)
    }
}