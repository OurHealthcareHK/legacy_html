require.config({    
    shim: {
        'highcharts': {
            'exports': 'Highcharts',
            'deps': ['highcharts-base']
        },
        'highcharts-data': ['highcharts']
    },
    paths: {
        'highcharts-base': '//cdnjs.cloudflare.com/ajax/libs/highcharts/7.0.1/highcharts',        
        'highcharts': '//cdnjs.cloudflare.com/ajax/libs/highcharts/7.0.1/highcharts-more',
        'highcharts-data': '//cdnjs.cloudflare.com/ajax/libs/highcharts/7.0.1/modules/data.src'    
    }
});
