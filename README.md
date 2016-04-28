# scaffold
This is Kokoro team scaffold  

注意：
1，添加新的scss文件需要关闭运行中的命令行重新运行一次npm run dev  
2，由于每次gulp默认任务会先清空dist文件夹，所以会有几率报错，报错关闭编辑器，再在命令行npm run dev
  
目录结构：  
│.git #git管理状态                                                                                   
│
│dist #编译以后的文件夹  
│   ├─static #根目录下放HTML文件  
│           ├─assets     #编译后的图片或者其他乱七八糟的东西  
│           ├─css        #编译后的css文件夹  
│           ├─javascript #编译后的JS文件夹  
│
│gulp #放gulp配置文件  
│   ├─config.js #gulp配置的地址  
│   ├─tasks     #放的是gulp配置  
│   ├─util      # gulp的报错处理  
│
│src  #未编译前需要编写的文件存放  
│   ├─assets     #编译前的图片或者其他乱七八糟的东西（需要自己创建一个文件夹，不然不会被编译，例如img）  
│   ├─sass       #编译前的scss文件夹  
│   ├─javascript #编译前的JS文件夹  
│
│gulpfile.js  #gulp配置文件  
│package.json #项目依赖  
