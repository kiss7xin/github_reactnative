import React, { Component } from 'react'
import MyPage from '../page/MyPage';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationUtil from './NavigaionUtil';
import { connect } from 'react-redux';

const icons = {
  Popular: 'all-inclusive',
  Trending: 'trending-up',
  Favorite: 'stars',
  My: 'perm-identity',
};

const TabArray = [
  {
      component: PopularPage,
      title: "Popular",
      icon: "all-inclusive",
      headerTitle: "最热",
  },
  {
      component: TrendingPage,
      title: "Trending",
      icon: "trending-up",
      headerTitle: "趋势",
  },
  {
      component: FavoritePage,
      title: "Favorite",
      icon: "starse",
      headerTitle: "喜欢",
  },
  {
      component: MyPage,
      title: "My",
      icon: "perm-identity",
      headerTitle: "我的",
  }
]

const BottomTab = createBottomTabNavigator();

class TabScreen extends Component {

  constructor(props) {
    super(props)
    NavigationUtil.navigation = props.navigation;
  }

  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    }

    const list = TabArray.map((item)=>{
        return <BottomTab.Screen 
        key={item.title}
        name={item.title}
        component={item.component}
        options={{headerTitle: item.headerTitle,}} 
        />
      });

    return this.Tabs = (
      <BottomTab.Navigator
      initialRouteName="Popular"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: this.props.theme,
        tabBarInactiveTintColor: "#ccc",
        tabBarIcon: ({focused, color, size}) => {
          const iconName = icons[route.name];
          return <Icon name={iconName} size={25} color={color} />
        },
        BottomTabBar: props => {
          return <TabBarComponent theme={this.props.theme} {...props}/>
        },
      })}
      >
        { list }
      </BottomTab.Navigator>
    );
  }

  render() {
    const tabNav = this._tabNavigator();
    return (
      tabNav
    );
  }
}

class TabBarComponent extends Component {
    constructor(props) {
        super(props);
        this.theme = {
          tintColor: props.activeTintColor,
          updateTime: new Date().getTime(),
      }
    };

    render() {
        return <BottomTabBar 
        {...this.props}
        activeTintColor={this.props.theme}
        />
    }
}

const mapStateToProps = state=>({
  theme: state.theme.theme,
});
// 连接组件
export default connect(mapStateToProps)(TabScreen);