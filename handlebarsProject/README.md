* Interface : 
> 课程：http://imoocnote.calfnote.com/inter/getClasses.php?curPage=1
> 课程大纲：http://imoocnote.calfnote.com/inter/getClassChapter.php?cid=1
> 笔记内容：http://imoocnote.calfnote.com/inter/getClassNote.php?cid=1

* 因为delegate 在 jquery 3.0 以上就被废弃了， 所以用 jquery2 的最新版本[2.1.4](http://www.jq22.com/jquery-info122)
> jquery 2.1.4
> handlebars 4.0.10

https://github.com/Cuiying/Handlebars

* 技巧和注意的地方：
> 项目中经常用以下css样式来处理文字超出部分用三个点代替
.classes .title {
	text-overflow: ellipsis; // Project always use it to show three dots
	overflow: hidden; // Need overflow as hidden as well
	white-space: nowrap; // Must be nowrap
	max-width: 70%;
	display: inline-block; // Need display as block or inline-block
}
> handlebars的首字母要大写
var template = $("#class-template").html();
var functionTemplate = Handlebars.compile(template); //Handlebars H is captile
var compileContent = functionTemplate(jsonData.data);
> handlebars 有两种helper，块helper 和 内联helper
Handlebars.registerHelper('equal', function(v1, v2, option){ // 块helper
	if (v1 === v2) {
		return option.fn(this);
	} else {
		return option.inverse(this);
	}
});

=====================================================================================
# 官网
handlebars : http://handlebarsjs.com/ or http://keenwon.com/992.html
Tips: Handlebars 不仅仅处理html模板，任何文件都可以作为模板处理，比如js文件

# 传统方式：
* require the related package
> <script src="jquery.js"></script>     
> <script src="handlebars.js"></script>     

* Usage
> <script id="template-id" type="text/x-handlebars-template>     
> // Input template in here!     
> </script>     

> <script>     
> var template = $("#template-id").html();      
> var fun = Handlebars.compile(template);     
> var content = fun(data);     
> </script>  

==========================================================

# NPM方式：
* Install package
> npm install handlebars --save-dev   
> npm install handlebars-loader --save-dev   

* Usage
> import handlebars from 'handlebars';   
> import template from './template';
> const template = fs.readFileSync('tempaltepath').toString();//or use handlebars-loader to import as above
> const returnFun = handlebars.compile(template);   
> const content = returnFun(data);   
> fs.writeFileSync(destPath, content);  

* Webpack setting: 
a. Webpack need to add loaders as below.   
webpackConfig.module.rules = [    {        test: /\.hbs$/,        loader: 'handlebars-loader'    }];
b. Webpack need to add below alias.   
webpackConfig.resolve = {    modules: [],    alias: {        'handlebars': 'handlebars/dist/handlebars.js'    }};    
> refer to [how to fix require.extension](https://github.com/iscarecrow/myBlog/issues/2)  

> Tip: if make alias refer to runtime.js, after build it, it will encounter "Handlebars.compile is not a function" issue.  So need to alias to dist/handlebars.js

> Tip: if did not add this alias, it will show "WARNING in ./~/handlebars/lib/index.js
require.extensions is not supported by webpack. Use a loader instead." 

