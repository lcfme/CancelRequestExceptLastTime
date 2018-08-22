import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
declare module 'easyrequest' {
    interface cancelRequest {
        (opts: AxiosRequestConfig): AxiosPromise<any>;
        get(url: string, opts?: AxiosRequestConfig): AxiosPromise<{}>;
        post(
            url: string,
            data?: any,
            opts?: AxiosRequestConfig
        ): AxiosPromise<{}>;
    }
    function CancelRequestExceptLastTime(): cancelRequest;
    export = CancelRequestExceptLastTime;
}
