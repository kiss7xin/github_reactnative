import { act } from "react-test-renderer";
import Types from "../../action/types";
const defaultState = {};

export default function onAction(state=defaultState,action) {
    switch (action.type) {
        case Types.TRENDING_REFRESH_SUCCESS://下拉刷新成功 
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    items: action.items,
                    projectModels: action.projectModels,
                    isLoading: false,
                    hideLoadingMore: false,
                    pageIndex: action.pageIndex
                }
            };
        case Types.TRENDING_REFRESH://下拉刷新
            return {
                ...state,  
                [action.storeName]: {
                    ...state[action.storeName],
                    items: action.items,
                    isLoading: true,
                    hideLoadingMore: true,
                }
            };
        case Types.TRENDING_REFRESH_FAIL://下拉刷新失败
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false
                }
            }
        case Types.TRENDING_LOAD_MORE_SUCCESS://上拉加载更多成功
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    projectModels: action.projectModels,
                    hideLoadingMore: false,
                    pageIndex: action.pageIndex,
                }
            }
        case Types.TRENDING_LOAD_MORE_FAIL://上拉加载更多失败
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    hideLoadingMore: true,
                    pageIndex: action.pageIndex,
                }
            }
        default:
            return state;
    }
}