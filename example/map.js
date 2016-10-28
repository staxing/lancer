var libPathRoot = '/libs/';
var toolPathRoot = '/dist/0.0.1/';
requirejs.config({
    baseUrl: '',
    paths: {
        jquery: libPathRoot+'jquery/jquery-2.1.4.min',
        echarts: libPathRoot+'echarts/echarts.min',
        G: toolPathRoot+'util/G',
        url: toolPathRoot+'util/G-url',
        gThird: toolPathRoot+'util/G-third',
        gUser: toolPathRoot+'util/G-user',
        gValidate: toolPathRoot+'util/G-validate',
        gDialog: toolPathRoot+'dialog/dialog',
        GVerification: toolPathRoot+'verification/verification',
        gFixedTop: toolPathRoot+'block/fixed-top',
        gTab: toolPathRoot+'block/tab',
        gLineChart: toolPathRoot+'charts/line',
        jsencrypt: toolPathRoot+'cipher/jsencrypt',
        GModal: toolPathRoot+'dialog/modal',
        gInput: toolPathRoot+'input/input',
        GFilterTable: toolPathRoot+'list/filter-table',
        GPagination: toolPathRoot+'list/pagination',
        GLoadMore: toolPathRoot+'load-more/load-more',
        GNav: toolPathRoot+'nav/nav',
        GNavVer: toolPathRoot+'nav/vertical-nav',
        GDatepicker: toolPathRoot+'popup/datepicker',
        gProvinceCity: toolPathRoot+'province-city/province-city',
        GPutupFollow: toolPathRoot+'putup-follow/putup-follow',
        gSuspensionBox: toolPathRoot+'suspension-box/suspension-box',
        GSwiper: toolPathRoot+'swiper/swiper',
        GAjaxValidate: toolPathRoot+'verification/ajax-validate',
    }
});
