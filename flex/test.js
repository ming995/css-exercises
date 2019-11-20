$(function(){
    //marked插件的基本配置
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code,lang) {
            //使用 highlight 插件解析文档中代码部分
            return hljs.highlightAuto(code,[lang]).value;
        }
    });

    $.ajax({
        type:"get",
        url : "flex.md",
        async : false,
        dataType:"text",
        success : function(response,status,request) {
            console.log('response', response);
            document.getElementById('md-content').innerHTML = marked(response);
            //渲染文档中代码部分
            hljs.initHighlighting();
        }
    });
});