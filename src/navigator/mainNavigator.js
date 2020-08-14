import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps90438Navigator from '../features/Maps90438/navigator';
import Add-Item90437Navigator from '../features/Add-Item90437/navigator';
import Maps90433Navigator from '../features/Maps90433/navigator';
import UserProfile90429Navigator from '../features/UserProfile90429/navigator';
import BlankScreen1790406Navigator from '../features/BlankScreen1790406/navigator';
import Settings90391Navigator from '../features/Settings90391/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps90438: { screen: Maps90438Navigator },
Add-Item90437: { screen: Add-Item90437Navigator },
Maps90433: { screen: Maps90433Navigator },
UserProfile90429: { screen: UserProfile90429Navigator },
BlankScreen1790406: { screen: BlankScreen1790406Navigator },
Settings90391: { screen: Settings90391Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
