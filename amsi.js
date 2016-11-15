$(document).ready(function() {

    function Auto_Media_Sizes_Images() {

        window.AMSI_options = {
            selector: '.AMSI',
            data_selector: 'data-media-images',
            data_src: 'data-src',
            off_class: 'lazyload'
        };
        window.AMSI_arr = {};

        var AMSI_attr,
            AMSI_json,
            AMSI_set_this_size;

        var ww = $(window).width();

        function AMSI_isNoEmpty(obj) {
            for (var key in obj) {
                return true;
            }
            return false;
        }

        function AMSI_width_key_obj(obj, ww_width) {
            var set_this_img_size = '';
            for (var key in obj) {
                if (key <= ww_width) {
                    set_this_img_size = key;
                }
            }
            return set_this_img_size;
        }


        $(AMSI_options.selector).each(function(index, el) {
            AMSI_attr = $(this).attr(AMSI_options.data_selector);
            AMSI_json = AMSI_attr.replace(/[']/g, '"');
            AMSI_arr['img_' + index] = $.parseJSON(AMSI_json);

            if (AMSI_isNoEmpty(AMSI_arr['img_' + index])) {

                AMSI_set_this_size = AMSI_width_key_obj(AMSI_arr['img_' + index], ww);

                if (AMSI_set_this_size !== '') {

                    if (AMSI_arr['img_' + index][AMSI_set_this_size] === 'off') {
                        $(this).attr(AMSI_options.data_src, '');
                        $(this).attr('src', '');
                        $(this).removeClass(AMSI_options.off_class).css({
                            'display': 'none'
                        });
                    } else {
                        //console.log('set this size : '+ AMSI_arr['img_'+index][AMSI_set_this_size] );
                        $(this).attr(AMSI_options.data_src, AMSI_arr['img_' + index][AMSI_set_this_size]);
                    }
                }
            }
        });
    }

    //This start funtion, if need another time use 
    Auto_Media_Sizes_Images();

});
