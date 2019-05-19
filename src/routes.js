import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import CameraRoute from './pages/cameraRoute';

export default createStackNavigator({
    Main,
    CameraRoute
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#50007f'
        },
        headerTintColor: '#FFF'
    }
});
