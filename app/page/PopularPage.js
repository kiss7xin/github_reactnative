import { FlatList, ActivityIndicator, Text, StyleSheet, View, RefreshControl } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';
import actions from '../action/index';
import PopularItem from '../common/PopularItem';
import NavigationBar from '../common/NavigationBar';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = '#678';

// 导航视图
const PopularStack = createNativeStackNavigator();

export default class PopularNavPage extends Component {
  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
    };
    let navigationBar = <NavigationBar 
    title={'最热'}
    statusBar={statusBar}
    style={{backgroundColor: THEME_COLOR}}
    />
    return (
      <PopularStack.Navigator initialRouteName='PopularPage'>
        <PopularStack.Screen key="PopularPage" name="PopularPage" component={PopularPage} options={{header: (props) => navigationBar}} />
      </PopularStack.Navigator>
    )
  }
}


// 顶部菜单视图
const PopTab = createMaterialTopTabNavigator();

class PopularPage extends Component {
  constructor(props) {
    super(props)
    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'Uniapp', 'Flutter']
    // this.tabNames = ['Java']
  }
  render() {
    const tabNames = this.tabNames;
    return (
      <PopTab.Navigator
        initialRouteName="Popular1"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
        }}>
        {
          tabNames.map((item) => {
            return <PopTab.Screen key={item} name={item} component={PopularTabPage} />
          })
        }
      </PopTab.Navigator>
    );
  }
}


const pageSize = 10;//设为常量，防止修改
// 单个tab视图
class PopularTab extends Component {
  constructor(props) {
    super(props);
    const { route } = this.props;
    this.storeName = route.name;
    this.isFavoriteChanged = false;
  }

  componentDidMount() {
    this.loadData();
  }

  /**
   * 获取与当前页面有关的数据
   */
  _store() {
    const { popular } = this.props;
    let store = popular[this.storeName];
    if (!store) {
      store = {
        items: [],
        isLoading: false,
        projectModels: [],//要显示的数据
        hideLoadingMore: true,//默认隐藏加载更多
      }
    }
    return store;
  }

  genFetchUrl(key) {
    return URL + key + QUERY_STR;
  }

  loadData(loadMore) {
    const { onRefreshPopular,onLoadMorePopular } = this.props;
    const store = this._store();
    const url = this.genFetchUrl(this.storeName);
    if (loadMore) { 
      onLoadMorePopular(this.storeName,++store.pageIndex,pageSize, store.items, callback => {
        // this.refs.toast.show('没有更多了');
      })
    } else {
      onRefreshPopular(this.storeName, url, pageSize);
    }
    
  }

  genIndicator() {
    return this._store().hideLoadingMore ? null :
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    style={styles.indicator}
                />
                <Text>正在加载更多</Text>
            </View>
  }

  renderItem(data) {
    const item = data.item;
    return <PopularItem
      item={item}
      onSelect={() => {

      }} />
  }

  render() {
    let store = this._store();
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={store.projectModels}
          renderItem={data => this.renderItem(data)}
          keyExtractor={item => "" + item.id}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              titleColor={THEME_COLOR}
              colors={[THEME_COLOR]}
              refreshing={store.isLoading}
              onRefresh={() => this.loadData()}
              tintColor={THEME_COLOR}
            />
          }
          ListFooterComponent={()=>this.genIndicator()}
          onEndReached={()=> {
            console.log('---onEndReached---');
            setTimeout(()=>{
              if (this.canLoadMore) {
                this.loadData(true);
                this.canLoadMore=false;
              }
            },100);
            this.loadData(true);
          }}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={()=>{
            this.canLoadMore = true;//fix初始化页面调用onEndReached多次
            console.log('---onMomentumScrollBegin---');
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  popular: state.popular
});

const mapDispatchToProps = dispatch => ({
  onRefreshPopular: (storeName, url, pageSize) => dispatch(actions.onRefreshPopular(storeName, url, pageSize)),
  onLoadMorePopular: (storeName, pageIndex, pageSize, items, favoriteDao, callBack) => dispatch(actions.onLoadMorePopular(storeName, pageIndex, pageSize, items, favoriteDao, callBack)),
});

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    // minWidth: 50 //fix minWidth会导致tabStyle初次加载时闪烁
    padding: 0
  },
  indicatorStyle: {  
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
  },
  indicatorContainer: {
    alignItems: "center"
  },
  indicator: {
    color: 'red',
    margin: 10
  }
});

