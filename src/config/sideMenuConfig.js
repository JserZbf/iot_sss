import pathConfig from 'config/pathConfig';

const SideMenuConfig = [
  {
    name: pathConfig.basics.name,
    path: pathConfig.basics.path,
    id: pathConfig.basics.path,
    icon: pathConfig.basics.icon,
    children: [
      {
        name: pathConfig.ruleDetails.name,
        path: pathConfig.ruleDetails.path,
        id: pathConfig.ruleDetails.path,
      },
    ],
  },
];

export default SideMenuConfig;
