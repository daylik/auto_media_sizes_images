$(document).ready(function() {

function media_images(){

    window.MImages = {
      selector: '.media-images',
      data_selector: 'data-media-images'
    };
    window.MImages_arr = {};

    var MImgages_attr,
        MImgages_json,
        MImgages_set_this_size;

    var ww = $(window).width();

    function MImgages_isNoEmpty(obj) {
      for (var key in obj) {
        return true;
      }
      return false;
    }

    function MImgages_max_key_obj(obj, ww_width) {
      var set_this_img_size = '';
      for (var key in obj) {
        if( key <= ww_width ){
          set_this_img_size = key;
        }
      }
      return set_this_img_size;
    }


    $(MImages.selector).each(function(index, el) {
        MImgages_attr = $(this).attr(MImages.data_selector);
        MImgages_json = MImgages_attr.replace(/[']/g, '"');
        MImages_arr['img_' + index] = $.parseJSON(MImgages_json);

        if( MImgages_isNoEmpty(MImages_arr['img_'+index]) ){
         
          MImgages_set_this_size = MImgages_max_key_obj(MImages_arr['img_'+index], ww);
          if(MImgages_set_this_size !== ''){
            //console.log('set this size : '+ MImages_arr['img_'+index][MImgages_set_this_size] );
            $(this).attr('data-src', MImages_arr['img_'+index][MImgages_set_this_size] );
          }
        }
    });
}

//This start funtion, if need another time use 
media_images();

});
