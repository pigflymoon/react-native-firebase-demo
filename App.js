import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import Components from './src/drawer/Components';
import Settings from './src/drawer/Settings';
const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
    <View style={{ flex: 1, backgroundColor: '#43484d' }}>
        <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>

        </View>
        <View style={{ marginLeft: 10 }}>
            <DrawerItems {...props} />
        </View>
    </View>
);
const MainRoot = DrawerNavigator({
    Components: {
        path: '/components',
        screen: Components,
    },
    Settings: {
        path: '/settings',
        screen: Settings,
    }
}, {
    initialRouteName: 'Components',
    contentOptions: {
        activeTintColor: '#548ff7',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#ffffff',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
            fontSize: 15,
            marginLeft: 0,
        },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})


export default class App extends React.Component {
    render() {
        return (
            <MainRoot/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
