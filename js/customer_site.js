const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },

    // ===== 第一组资源 =====
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '红牛资源',
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子资源',
    },
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '开放电影',
    },
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    y39: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影视',
    },
    tiantang: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
    },
    lehuo: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    tangrenjie: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
    },
    kudian1: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源1',
    },
    wolong: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    kudian2: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源2',
    },
    tangrenjie2: {
        api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',
        name: '唐人街2',
    },
    senlin: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
    },
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
    },
    kuaiche: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
    },
    tantan: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
    },
    shandian1: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '闪电资源1',
    },
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
    },
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
    },
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集',
    },
    uku1: {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源1',
    },
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    yinghua1: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网1',
    },
    shandian2: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源2',
    },
    feisu1: {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源1',
    },
    kuaibo: {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源',
    },
    baidu1: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源1',
    },
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
    },
    piaohua1: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影1',
    },
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
    },
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
    },
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空资源',
    },
    haiwaikan1: {
        api: 'http://haiwaikan.com/api.php/provide/vod',
        name: '海外看资源1',
    },

    // ===== 第二组资源 =====
    haiwaikan2: {
        api: 'https://haiwaikan.com/api.php/provide/vod/',
        name: '海外看资源2',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360资源',
    },
    heimuer: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳资源',
    },
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod/',
        name: '刺桐资源',
    },
    guanwang: {
        api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
        name: '官网资源',
    },
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
        name: '业余资源',
    },
    huawei: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧资源',
    },
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
        name: '小黄人资源',
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/',
        name: '牛牛资源',
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/',
        name: '丫丫资源',
    },
    uku2: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: 'U酷资源2',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九资源',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼资源',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun资源',
    },
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡资源',
    },
    liangzi2: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源2',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风资源',
    },
    hongniu2: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
        name: '红牛资源2',
    },
    feisu2: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
        name: '飞速资源2',
    },
    kuaikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
        name: '快看资源',
    },
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌资源',
    },
    kuaiche2: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
        name: '快车资源2',
    },
    shandian3: {
        api: 'http://sdzyapi.com/api.php/provide/vod/',
        name: '闪电资源3',
    },
    yinghua2: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/',
        name: '樱花资源2',
    },
    wolong2: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
        name: '卧龙资源2',
    },
    piaohua2: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花电影2',
    },
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼资源',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '虎牙资源',
    },
    baidu2: {
        api: 'https://api.apibdzy.com/api.php/provide/vod/',
        name: '百度资源2',
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod/',
        name: '飘零资源',
    },
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod/',
        name: '无尽资源',
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod/',
        name: '速博资源',
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod/',
        name: '魔都资源',
    },
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod/',
        name: '最大资源',
    },
    qihu: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
        name: '奇虎资源',
    },
    huohu: {
        api: 'https://hhzyapi.com/api.php/provide/vod/',
        name: '火狐资源',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '新浪资源',
    },
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云资源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
