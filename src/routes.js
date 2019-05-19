import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Camera from './pages/camera';

export default createStackNavigator({
    Main,
    Camera
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#50007f'
            },
            headerTintColor: '#FFF'
        }
    });
