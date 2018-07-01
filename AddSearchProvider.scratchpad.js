/*
 * 这是一张 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从“执行”菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Ctrl+R)；
 * 2. 查看 对返回值使用对象查看器 (Ctrl+I)；
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Ctrl+L)
 */

/*

"https://raw.githubusercontent.com/zephyrer/opensearch/master/AMO.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/amzcn.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/AppleCommunities.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/codeguru.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/CodeProject.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/ghacks.net.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/GoogleIcon.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/GoogleImage.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/jd.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/onedrivesearch.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/tmall.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/txtnovel.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/Wiktionary_en.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/Wiktionary_zh.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/xiami.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/Youtube.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/zdic.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/zzznan.xml",

*/

var seUrls = [
"https://raw.githubusercontent.com/zephyrer/opensearch/master/AMO.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/amzcn.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/AppleCommunities.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/codeguru.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/CodeProject.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/ghacks.net.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/GoogleIcon.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/GoogleImage.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/jd.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/onedrivesearch.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/tmall.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/txtnovel.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/Wiktionary_en.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/Wiktionary_zh.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/xiami.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/Youtube.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/zdic.xml",
"https://raw.githubusercontent.com/zephyrer/opensearch/master/zzznan.xml"
];
if(typeof(window.external)=='object'){
  try{
    seUrls.forEach((x) => window.external.AddSearchProvider(x));
  }catch(e){
    alert('Your browser does not support OpenSearch!');
  }
}