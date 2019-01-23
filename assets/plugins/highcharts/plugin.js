require.config({   
    paths: {
        'jquery': 'https://code.jquery.com/jquery-3.3.1.slim.min',

        'highcharts-base': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/highcharts',
        'highcharts': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/highcharts-more.src',
        'highcharts-exporting': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/exporting',
        'highcharts-wordcloud': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/wordcloud',
        'highcharts-sunburst': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/sunburst',
        'highcharts-annotations': 'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/annotations',
        'highcharts-streamgraph':  'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/streamgraph',
        'highcharts-serieslabel':  'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/series-label',
        'highcharts-data':  'https://cglearn.codelight.eu/js/lib/highcharts/highcharts-6.1.1/modules/data',

    },
    "shim": {
        'highcharts': {
            'exports': 'Highcharts',
            'deps': ['jquery', 'highcharts-base', 'highcharts-exporting', 'highcharts-wordcloud', 'highcharts-sunburst', 'highcharts-annotations', 'highcharts-data', 'highcharts-streamgraph', 'highcharts-serieslabel']
        },
        'highcharts-base': {
            deps: ['jquery']
        },
        'highcharts-exporting': {
            'deps': ['highcharts-base']
        },
        'highcharts-wordcloud': {
            'deps': ['highcharts-base']
        },
        'highcharts-sunburst': {
            'deps': ['highcharts-base']
        },
        'highcharts-annotations': {
            'deps': ['highcharts-base']
        },
        'highcharts-streamgraph': {
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
