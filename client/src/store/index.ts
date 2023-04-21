import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer, rootReducer} from "@/store/reducers";

export type RootState = ReturnType<typeof rootReducer>
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const makeStore = () => store
// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>