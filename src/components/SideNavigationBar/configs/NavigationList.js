import {
  dashboardIcon,
  spacesIcon,
  dealIcon,
  calendarTodayIcon,
  manageAccountsIcon,
  // creditsIcon,
  notificationsIcon,
  settingsIcon,
  accountIcon
} from '../../../constants/commonIcons/commonIcons';

export const navItemsList = [
  {
    path: '/dashboard',
    id: '1',
    icon: dashboardIcon
  },
  {
    path: '/spaces',
    id: '2',
    icon: spacesIcon
  },
  {
    path: '/lead-deal',
    id: '3',
    icon: dealIcon
  },
  {
    path: '/events-task',
    id: '4',
    icon: calendarTodayIcon
  },
  {
    path: '/all-users',
    id: '5',
    icon: manageAccountsIcon
  },
  // {
  //   path: '/credits',
  //   id: '6',
  //   icon: creditsIcon
  // },
  {
    path: '/notifications',
    id: '7',
    icon: notificationsIcon
  },
  {
    path: '/settings',
    id: '8',
    icon: settingsIcon
  },
  {
    path: '/user',
    id: '9',
    icon: accountIcon
  }
];
