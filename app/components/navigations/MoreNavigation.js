import { createStackNavigator } from 'react-navigation';
import More from '../screens/more/More';

const MoreNavigation = createStackNavigator({
    More: {
        screen: More,
        navigationOptions: {
            title: 'Dashboard'
        },
    }
});

export default MoreNavigation;