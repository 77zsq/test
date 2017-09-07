require.config({
    // 配置所有路径的基础路径
    baseUrl: './js/',
    paths: {
        a: './a',
        b: './b'
    }
});

define(['a', 'b'], function(info, info2) {
    console.log(info);
    console.log(info2);
});
