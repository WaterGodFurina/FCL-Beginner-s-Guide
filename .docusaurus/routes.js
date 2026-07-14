import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c0b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e3a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '553'),
            routes: [
              {
                path: '/docs/FCL 基础教程/FCL 按键布局(基础)',
                component: ComponentCreator('/docs/FCL 基础教程/FCL 按键布局(基础)', '28a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/FCL 设置/全局游戏设置',
                component: ComponentCreator('/docs/FCL 基础教程/FCL 设置/全局游戏设置', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/FCL 设置/启动器设置',
                component: ComponentCreator('/docs/FCL 基础教程/FCL 设置/启动器设置', 'c37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/FCL 设置/帮助和关于',
                component: ComponentCreator('/docs/FCL 基础教程/FCL 设置/帮助和关于', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/Minecraft 新手引导/多人游戏/如何加入服务器',
                component: ComponentCreator('/docs/FCL 基础教程/Minecraft 新手引导/多人游戏/如何加入服务器', 'dd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/Minecraft 新手引导/多人游戏/进入服务器的报错',
                component: ComponentCreator('/docs/FCL 基础教程/Minecraft 新手引导/多人游戏/进入服务器的报错', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/其它/长按主页按钮',
                component: ComponentCreator('/docs/FCL 基础教程/其它/长按主页按钮', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/其它/长按返回键',
                component: ComponentCreator('/docs/FCL 基础教程/其它/长按返回键', 'f1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/内置联机/联机原理',
                component: ComponentCreator('/docs/FCL 基础教程/内置联机/联机原理', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/内置联机/联机操作',
                component: ComponentCreator('/docs/FCL 基础教程/内置联机/联机操作', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/按键布局下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/按键布局下载', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/版本下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/版本下载', 'dc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/资源下载/光影下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/资源下载/光影下载', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/资源下载/存档(世界)下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/资源下载/存档(世界)下载', '3e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/资源下载/整合包下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/资源下载/整合包下载', '3e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/资源下载/材质包(资源包)下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/资源下载/材质包(资源包)下载', '790'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/游戏下载/资源下载/模组下载',
                component: ComponentCreator('/docs/FCL 基础教程/游戏下载/资源下载/模组下载', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/版本管理/世界和数据包',
                component: ComponentCreator('/docs/FCL 基础教程/版本管理/世界和数据包', '8ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/版本管理/游戏设置',
                component: ComponentCreator('/docs/FCL 基础教程/版本管理/游戏设置', '446'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/版本管理/管理模组',
                component: ComponentCreator('/docs/FCL 基础教程/版本管理/管理模组', '6ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/版本管理/管理版本',
                component: ComponentCreator('/docs/FCL 基础教程/版本管理/管理版本', 'bd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/版本管理/自动安装',
                component: ComponentCreator('/docs/FCL 基础教程/版本管理/自动安装', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/账号登录/正版登录',
                component: ComponentCreator('/docs/FCL 基础教程/账号登录/正版登录', 'a76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/账号登录/离线登录',
                component: ComponentCreator('/docs/FCL 基础教程/账号登录/离线登录', '87a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/账号登录/认证服务器登录',
                component: ComponentCreator('/docs/FCL 基础教程/账号登录/认证服务器登录', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 基础教程/首次使用',
                component: ComponentCreator('/docs/FCL 基础教程/首次使用', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 的下载与安装/FCL 下载/foldcraftlauncher.cn 下载',
                component: ComponentCreator('/docs/FCL 的下载与安装/FCL 下载/foldcraftlauncher.cn 下载', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 的下载与安装/FCL 下载/Github 下载',
                component: ComponentCreator('/docs/FCL 的下载与安装/FCL 下载/Github 下载', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 的下载与安装/FCL 下载/柠枺镜像下载',
                component: ComponentCreator('/docs/FCL 的下载与安装/FCL 下载/柠枺镜像下载', '259'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 的下载与安装/FCL 安装',
                component: ComponentCreator('/docs/FCL 的下载与安装/FCL 安装', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/其它联机途径/公网地址连接',
                component: ComponentCreator('/docs/FCL 高阶教程/其它联机途径/公网地址连接', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/其它联机途径/内网穿透连接',
                component: ComponentCreator('/docs/FCL 高阶教程/其它联机途径/内网穿透连接', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/其它联机途径/局域网连接',
                component: ComponentCreator('/docs/FCL 高阶教程/其它联机途径/局域网连接', '414'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/云服务器开服',
                component: ComponentCreator('/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/云服务器开服', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/手机termux开服',
                component: ComponentCreator('/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/手机termux开服', 'd0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/电脑Linux开服',
                component: ComponentCreator('/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/电脑Linux开服', 'a99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/电脑Windows开服',
                component: ComponentCreator('/docs/FCL 高阶教程/开一个属于自己的服务器/开服操作/电脑Windows开服', 'e0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/开一个属于自己的服务器/笨蛋MC链接',
                component: ComponentCreator('/docs/FCL 高阶教程/开一个属于自己的服务器/笨蛋MC链接', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/开一个属于自己的服务器/认识服务器核心',
                component: ComponentCreator('/docs/FCL 高阶教程/开一个属于自己的服务器/认识服务器核心', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/光影错误',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/光影错误', '5c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/存档错误',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/存档错误', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/模组不兼容 或 缺少前置模组',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/模组不兼容 或 缺少前置模组', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/游戏加载错误',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/游戏加载错误', '143'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/错误日志/crash报错',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/错误日志/crash报错', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/错误日志/Java虚拟机报错',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/错误日志/Java虚拟机报错', '158'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/错误日志/Vulkan报错',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/错误日志/Vulkan报错', '289'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/错误日志/模组不兼容',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/错误日志/模组不兼容', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/错误日志/渲染器选择错误',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/错误日志/渲染器选择错误', 'e76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FCL 高阶教程/报错解决/闪退至主界面',
                component: ComponentCreator('/docs/FCL 高阶教程/报错解决/闪退至主界面', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/technical-term/intro',
                component: ComponentCreator('/docs/technical-term/intro', 'd27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/technical-term/SPU',
                component: ComponentCreator('/docs/technical-term/SPU', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/technical-term/TrustZone',
                component: ComponentCreator('/docs/technical-term/TrustZone', 'b77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/test',
                component: ComponentCreator('/docs/test', '0fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/关于本站',
                component: ComponentCreator('/docs/关于本站', '4ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/data文件夹访问限制',
                component: ComponentCreator('/docs/手机小白必看/data文件夹访问限制', '1d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/intro',
                component: ComponentCreator('/docs/手机小白必看/intro', 'df0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/minecraft移植到手机',
                component: ComponentCreator('/docs/手机小白必看/minecraft移植到手机', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/mt管理器的使用/mt管理器文件操作',
                component: ComponentCreator('/docs/手机小白必看/mt管理器的使用/mt管理器文件操作', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/mt管理器的使用/系统文件管理局限性',
                component: ComponentCreator('/docs/手机小白必看/mt管理器的使用/系统文件管理局限性', 'de3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/下载和安装apk/adb安装',
                component: ComponentCreator('/docs/手机小白必看/下载和安装apk/adb安装', '6b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/下载和安装apk/qq下载',
                component: ComponentCreator('/docs/手机小白必看/下载和安装apk/qq下载', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/下载和安装apk/应用商店',
                component: ComponentCreator('/docs/手机小白必看/下载和安装apk/应用商店', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/下载和安装apk/浏览器下载',
                component: ComponentCreator('/docs/手机小白必看/下载和安装apk/浏览器下载', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/什么是java',
                component: ComponentCreator('/docs/手机小白必看/什么是java', 'ba0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/什么是minecraft',
                component: ComponentCreator('/docs/手机小白必看/什么是minecraft', '958'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/什么是图形api',
                component: ComponentCreator('/docs/手机小白必看/什么是图形api', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/什么是图形渲染器',
                component: ComponentCreator('/docs/手机小白必看/什么是图形渲染器', '353'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机云控介绍',
                component: ComponentCreator('/docs/手机小白必看/手机云控介绍', 'd35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机权限',
                component: ComponentCreator('/docs/手机小白必看/手机权限', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/cpu',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/cpu', '112'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/gpu',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/gpu', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/soc介绍',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/soc介绍', '83e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/其他SoC部分',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/其他SoC部分', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/内部存储空间介绍',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/内部存储空间介绍', 'a57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/如何查看手机配置',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/如何查看手机配置', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/安卓版本',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/安卓版本', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/运行内存与内部存储对比',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/运行内存与内部存储对比', '427'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/手机配置讲解/运行内存介绍',
                component: ComponentCreator('/docs/手机小白必看/手机配置讲解/运行内存介绍', '9ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/文件后缀名介绍/后缀名列举',
                component: ComponentCreator('/docs/手机小白必看/文件后缀名介绍/后缀名列举', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/手机小白必看/文件后缀名介绍/安装包后缀名区分',
                component: ComponentCreator('/docs/手机小白必看/文件后缀名介绍/安装包后缀名区分', '9ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
