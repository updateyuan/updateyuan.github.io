var posts=["2024/04/05/HCIA/","2024/04/05/HCIP/","2024/02/01/Hexo写文章基本操作/","2024/04/05/RHCSA/","2022/06/27/文章/","2024/02/01/浏览器页面切换快捷键/","2024/03/30/SQL基础/","2021/08/28/Android逆向/1.Android体系结构/","2021/09/04/Android逆向/2.Apk的基本结构/","2022/02/14/C/C语言/","2021/09/01/JAVA/JAVA程序设计/","2021/09/03/JAVA/JAVA程序设计2/","2021/09/08/JAVA/JAVA程序设计3/","2021/09/01/Linux网络操作系统/Linux网络操作系统1/","2021/09/02/Linux网络操作系统/Linux网络操作系统2/","2021/09/08/Linux网络操作系统/Linux网络操作系统3/","2021/09/01/MarkDown语法教程/MarkDown语法教程/","2021/09/05/PS/PS/","2021/08/30/SQL数据库基础/SQL数据库设计（基础）/","2021/09/10/SQL数据库基础/SQL数据库2/","2021/08/12/VMware-Workstation-的-MacOS-解锁补丁/VMware-Workstation-的-MacOS-解锁补丁/","2024/03/25/Web技术/Web基础/","2021/05/29/hello-world/hello-world/","2022/03/07/hexo美化/hexo加载动画修改/","2022/01/04/hexo美化/hexo增加原生JS实现页脚计时器/","2022/03/07/hexo美化/hexo增加小客服功能/","2022/01/02/hexo美化/hexo增加搜索功能/","2022/03/07/hexo美化/hexo增加日历插件/","2022/03/07/hexo美化/hexo增加樱花飘落背景/","2022/03/06/hexo美化/hexo增加浏览器恶搞/","2022/03/07/hexo美化/hexo增加看板娘/","2022/03/07/hexo美化/hexo增加访客地图/","2022/01/03/hexo美化/hexo增加音乐插件/","2022/03/07/hexo美化/hexo增加页脚跳动的♥/","2022/03/07/hexo美化/hexo引入样式文件/","2022/03/13/hexo美化/hexo添加徽标/","2024/03/24/python程序设计/python/","2021/09/06/办公自动化/办公自动化/","2021/12/11/华为1+X/1.华为1+X-TCP&IP/","2021/12/13/华为1+X/2.华为1+X-网络交换技术/","2021/12/14/华为1+X/3.华为1+X-路由技术/","2021/12/15/华为1+X/4.华为1+X-网络可靠性/","2021/12/16/华为1+X/5.华为1+X-广域网技术/","2021/12/17/华为1+X/6.华为1+X-网络安全技术/","2021/12/18/华为1+X/7.华为1+X-IPV6协议/","2021/12/19/华为1+X/8.华为1+X-WLAN技术/","2021/08/29/基于网鼎杯对于计算机的学习/基于网鼎杯对于计算机的学习/","2021/08/31/局域网组建与维护/局域网组建与维护/","2021/09/07/局域网组建与维护/局域网组建与维护2/","2021/09/01/应用密码技术/应用密码技术2/","2021/09/06/应用密码技术/应用密码技术3/","2021/08/30/应用密码技术/应用密码技术（基础）/","2021/08/31/思科CCNA网络基础/思科CCNA网络基础入门-OSI-TCP分层/","2021/08/31/思科CCNA网络基础/思科CCNA网络基础入门-计算机网络基础/","2021/08/16/数据恢复/1、为什么要学手工恢复数据/","2021/08/17/数据恢复/2、数据恢复环境搭建之虚拟磁盘/","2021/08/18/数据恢复/3、WinHex介绍/","2021/08/18/数据恢复/4、通用的数据恢复方法/","2021/08/18/数据恢复/5、数据的存储形态/","2021/08/22/数据恢复/6、FAT32文件系统结构/","2021/08/24/数据恢复/7、fsinfo扇区数据结构/","2022/02/14/数据恢复山鸡/1.数据恢复之MBR/","2022/02/28/数据恢复山鸡/2.数据恢复之FAT16/","2022/02/28/数据恢复山鸡/3.数据恢复之FAT32/","2022/02/28/数据恢复山鸡/4.数据恢复之NTFS/","2022/02/28/数据恢复山鸡/5.数据恢复之ExFAT/","2022/03/08/数据恢复山鸡/R-studio数据恢复软件使用教程/","2022/03/04/杂记/杂记/","2021/08/26/硬件工程师基础/硬件工程师基础-基础元器件和电阻/","2022/02/14/Python/Python技术/Python/","2021/09/02/Python/Python爬虫/爬虫1/","2022/02/17/Python/Python爬虫/爬虫10/","2021/09/10/Python/Python爬虫/爬虫2/","2021/09/10/Python/Python爬虫/爬虫3/","2021/09/17/Python/Python爬虫/爬虫4/","2021/09/18/Python/Python爬虫/爬虫5/","2022/02/16/Python/Python爬虫/爬虫6/","2022/02/17/Python/Python爬虫/爬虫7/","2022/02/17/Python/Python爬虫/爬虫9/","2022/02/17/Python/Python爬虫/爬虫8/","2021/08/31/专升本/专升本数学/专升本数学1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };