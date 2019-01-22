require.config({
    shim: {
        'moment-tc': ['moment']
        'chart-js': ['moment-tc']
    },
    paths: {
        'chart-js': '//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min',
        'moment': 'assets/plugins/fullcalendar/js/moment.min',
        'moment-tc': '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/locale/zh-hk.js'
    }
});
