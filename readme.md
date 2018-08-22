# easyRequest 文档

快速点击，后一个请求会自动取消前一个请求。

```javascript
const getTest = (function() {
    var r = easyRequest();
    return function() {
        return r.get('/test');
    };
})();

var div = document.createElement('div');
div.innerText = '点击发送get请求，后一个请求会自动取消前一个请求';
div.onclick = function() {
    getTest();
};
document.body.appendChild(div);
```
