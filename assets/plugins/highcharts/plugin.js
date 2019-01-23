require.config({   
    paths: {
        'jquery': 'https://code.jquery.com/jquery-3.3.1.slim.min',

        'highcharts-base': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/highcharts',
        'highcharts': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/highcharts-more.src',
        'highcharts-exporting': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/exporting',
        'highcharts-serieslabel':  'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/series-label',
        'highcharts-data':  'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/data',

    },
    "shim": {
        'highcharts': {
            'exports': 'Highcharts',
            'deps': ['jquery', 'highcharts-base', 'highcharts-exporting', 'highcharts-data', 'highcharts-serieslabel']
        },
        'highcharts-base': {
            deps: ['jquery']
        },
        'highcharts-exporting': {
            'deps': ['highcharts-base']
        },
        'highcharts-serieslabel': {
            'deps': ['highcharts-base']
        },
        'highcharts-data': {
            'deps': ['highcharts-base']
        }
    }
});
