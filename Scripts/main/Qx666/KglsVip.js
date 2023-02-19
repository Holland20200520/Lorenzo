
/******************************
⚠️如果放远程，请把kglingsheng.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:酷狗铃声
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^http?:\/\/ringtone\.kugou\.com\/v1\/vip\/get_info|http?:\/\/api\.ring\.kugou\.com\/user\/heartbeat|http?:\/\/api\.ring\.kugou\.com\/user\/main_page|http?:\/\/api\.ring\.kugou\.com\/ring\/get_ring_owninfo_ios|http?:\/\/api\.ring\.kugou\.com\/user\/ring\/detail.*? url script-request-header https://raw.githubusercontent.com/Holland20200520/Lorenzo/main/Scripts/main/Qx666/KglsVip.js

^http?:\/\/ringtone\.kugou\.com\/v1\/vip\/get_info|http?:\/\/api\.ring\.kugou\.com\/user\/heartbeat|http?:\/\/api\.ring\.kugou\.com\/user\/main_page|http?:\/\/api\.ring\.kugou\.com\/ring\/get_ring_owninfo_ios|http?:\/\/api\.ring\.kugou\.com\/user\/ring\/detail*? url script-response-body https://raw.githubusercontent.com/Holland20200520/Lorenzo/main/Scripts/main/Qx666/KglsVip.js


[mitm]
hostname = ringtone.kugou.com,api.ring.kugou.com,api.ring.kugou.com,api.ring.kugou.com,api.ring.kugou.com
%¥
*******************************/

var Url = $request.url;
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};


console.log(Url);
$done({ url:Url });

//
var body=$response.body;
body = body.replace(/"vip\":\d+/g,'"vip":3');
body = body.replace(/"expire_time\":\d+/g,'"expire_time":1947410000');
body = body.replace(/"own_type\":\d+/g,'"own_type":3');
body = body.replace(/"subtype\":\d+/g,'"subtype":3');
$done(body);
