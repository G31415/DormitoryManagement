高校学生宿舍管理系统

#技术栈说明
后端：SpringBoot
前端：vue+element等
开发工具：IDEA
数据库：MySQL
JDK版本：jdk1.8
B/S模型-浏览器服务器模型


#登录说明
管理员登录 admin 密码 123456

其余可以登录管理员后去查看相关密码，目前默认密码都是123456



基于springboot+Vue的学生宿舍管理系统（Java毕业设计）

2023年4月1日22:27:22
辰兮更新 解决首页控制台报错问题


1.项目框架介绍
后端：SpringBoot
前端：vue+element等
B/S模型-浏览器服务器模型

基于SpringBoot+vue的项目
后端框架 SpringBoot 底层就是SSM,就是Java语言
前端框架 vue +element 底层Javascript HTML； HTML就是我们说的CSS, Javascript就是我们说的Js


2.项目是如何开发的
需求->设计->开发->测试
文字层面

3.项目阅读的目录结构

为什么要用SpringBoot项目  SpringBoot 底层就是SSM

SpringBoot框架一般分为Controller层、Service层、Mapper层、entity。
代码阅读顺序性：
controller控制层 ->service业务逻辑层 -> dao(mapper)层

entity实体类

功能就是 增删改查

SSM  mybatis ->  mybatisplus
select 
insert


4.前端开发的小技巧
参考官网学习
https://element.eleme.cn/#/zh-CN/component/installation


2023年5月5日21:31:43
补充讲解
如何找具体的代码

核心代码在哪里?
controller控制层 ->service业务逻辑层 -> dao(mapper)层
controller层：负责接收客户端的请求并调用业务逻辑层的代码。
service层：处理具体的业务逻辑，调用数据访问层的代码获取数据。
dao(mapper)层：负责对数据库进行操作，如增删改查等。

后端如何区分代码
方法1:根据名称去区分具体的代码具体是做什么业务的
案例:
StudentController和学生相关的代码在此
VisitorController和公告相关的代码
RepairController和报修相关的
所有的业务代码都在此大家点进去具体的controller里面可以看到
进入具体的controller层后再根据名称去区分是什么操作,所有的命名都很规范

方法2:登录页面用程序员方法找代码 -> 慢一点 ->准确

浏览器右上角->更多工具开发者工具->找到network
看请求->根据请求的路径去定位

关于network请求更详细的说明可以百度


前端代码如何找?
根据页面的名称去找和定位

建议:主要是分享思路,不要复制代码到论文中,因为写代码就和写汉字一样，复制大量的代码毫无意义且非常简单,画更多的时间介绍和描述即可