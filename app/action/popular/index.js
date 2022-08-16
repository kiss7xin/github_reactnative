import Types from "../types";
import DataStore from "../../expend/dao/DataStore";


export function onRefreshPopular(storeName, url, pageSize) {
    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, storeName: storeName})
        let dataStore = new DataStore();
        dataStore.fetchData(url)
        .then(data => {
            handleData(dispatch,storeName,data,pageSize)
        }).catch(error => {
            console.error(error);
            dispatch({
                type: Types.POPULAR_REFRESH_FAIL,
                storeName,
                error
            });
        })
    }
}

export function onLoadMorePopular(storeName, pageIndex, pageSize, dataArray=[], callBack) {
    return dispatch => {
        setTimeout(()=>{//模拟网络请求
            if ((pageIndex-1)*pageSize >= dataArray.length) {
                if (typeof callBack === 'function') {
                    callBack('no more')
                }
                dispatch({
                    type: Types.POPULAR_LOAD_MORE_FAIL,
                    error: 'no more',
                    storeName: storeName,
                    pageIndex: --pageIndex,
                    projectModels: dataArray, 
                })
            } else {
                let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
                dispatch({
                    type: Types.POPULAR_LOAD_MORE_SUCCESS,
                    storeName,
                    pageIndex,
                    projectModels: dataArray.slice(0,max),
                });
            }
        },500);
    }
}


function handleData(dispatch, storeName, data, pageSize) {
    let fixItems = [];
    if (data && data.data) {
        if (Array.isArray(data.data)) {
            fixItems = data.data;
        } else if (Array.isArray(data.data.items)) {
            fixItems = data.data.items;
        }
    }
    //第一次要加载的数据
    let showItems = pageSize > fixItems.length ? fixItems : fixItems.slice(0,pageSize)
    dispatch({
        type: Types.POPULAR_REFRESH_SUCCESS,
        items: fixItems,
        projectModels: showItems,
        storeName,
        pageIndex: 1,
    })
}