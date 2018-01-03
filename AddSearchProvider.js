/*
Run this script into the page where you want to make the plugin available.
Using ScratchPad and so on.
*/
var seUrl = "https://raw.githubusercontent.com/zephyrer/opensearch/master/GoogleImage.xml";
if(typeof(window.external)=='object'){
  try{
    window.external.AddSearchProvider(seUrl);
  }catch(e){
    alert('Your browser does not support OpenSearch!');
  }
}
