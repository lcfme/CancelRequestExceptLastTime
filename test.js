import easyRequest from './index';

const getTest = (function() {
    var r = easyRequest();
    return function() {
        return r.get('/test');
    };
})();

const postTest = (function() {
    var r = easyRequest();
    return function() {
        return r.post(
            '/test',
            {
                a: 1,
                b: 2
            },
            {
                'Content-Type': 'application/json'
            }
        );
    };
})();

var div = document.createElement('div');
div.innerText = '点击发送get请求，后一个请求会自动取消前一个请求';
div.onclick = function() {
    getTest();
};
document.body.appendChild(div);

var div2 = document.createElement('div');
div2.innerText = '点击发送POST请求，后一个请求会自动取消前一个请求';
div2.onclick = function() {
    postTest();
};
document.body.appendChild(div2);
