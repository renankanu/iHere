import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#50007f'
            },
            headerTintColor: '#FFF'
        }
    });
