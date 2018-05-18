import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import RealtimeDatabaseTab from '../tabs/RealtimeDatabase';
import StorageTab from '../tabs/Storage';
// import InputTab from '../tabs/input';
// import FontsTab from '../tabs/fonts';

const Components = TabNavigator(
    {
        Database: {
            screen: RealtimeDatabaseTab,
            path: '/database',
            navigationOptions: {
                tabBarLabel: 'Database',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
                        size={30}
                        type="material-community"
                        color={tintColor}
                    />
                ),
            },
        },
        Storage: {
            screen: StorageTab,
            path: '/storage',
            navigationOptions: {
                tabBarLabel: 'Storage',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon name="list" size={30} type="entypo" color={tintColor} />
                ),
            },
        },

    },
    {
        initialRouteName: 'Database',
        animationEnabled: false,
        swipeEnabled: true,
        // Android's default option displays tabBars on top, but iOS is bottom
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#e91e63',
            // Android's default showing of icons is false whereas iOS is true
            showIcon: true,
        },
    }
);

Components.navigationOptions = {
    drawerLabel: 'Components',
    drawerIcon: ({ tintColor }) => (
        <Icon
            name="settings"
            size={30}
            iconStyle={{
                width: 30,
                height: 30
            }}
            type="material"
            color={tintColor}
        />
    ),
};

// Workaround to avoid crashing when you come back on Components screen
// and you were not on the Buttons tab
export default StackNavigator(
    {
        ComponentsTabs: { screen: Components },
    },
    {
        headerMode: 'none',
    }
);
