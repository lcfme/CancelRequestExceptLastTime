// flow
/**
 * @author Liu Chaofan 
 * @license MIT
 */
const axios = require('axios');

function CancelRequestExceptLastTime() {
    let cancelFunc: void | (() => any);
    function __request__(opts: Object) {
        opts = opts || {};
        opts.cancelToken = new axios.CancelToken((_c: Function) => {
            cancelFunc = _c;
        });
        return axios(opts);
    }
    function cancelRequest(opts) {
        typeof cancelFunc === 'function' && cancelFunc();
        return __request__(opts);
    }
    cancelRequest.post = function(url, data, opts) {
        opts = opts || {};
        opts.url = url;
        opts.method = 'POST';
        opts.data = data;
        return cancelRequest(opts);
    };
    cancelRequest.get = function(url, opts) {
        opts = opts || {};
        opts.url = url;
        opts.method = 'GET';
        return cancelRequest(opts);
    };
    return cancelRequest;
}

module.exports = CancelRequestExceptLastTime;
