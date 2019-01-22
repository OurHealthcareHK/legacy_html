require.config({
    shim: {
        'chart-js': ['moment', 'moment-tc']
    },
    paths: {
        'chart-js': '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min',
        'moment-tc': '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/locale/zh-hk',
        'moment': '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.23.0/moment.min'
    }
});
