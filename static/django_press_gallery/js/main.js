// Generated by CoffeeScript 1.6.2
(function() {
  var get_url_parameter;

  get_url_parameter = function(name) {
    return decodeURIComponent((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [null, null])[1]);
  };

  $(function() {
    $(".media_group").colorbox({
      rel: 'media_group',
      maxWidth: '700px',
      maxHeight: '700px'
    });
    $('#login_form').on('submit', function(e) {
      var $form, data, url;

      e.preventDefault();
      $form = $(this);
      url = location.pathname;
      data = $form.serialize();
      return $.post(url, data, function(res) {
        var next;

        next = get_url_parameter('next');
        if (next === 'null') {
          next = '/pressphotos';
        }
        return window.location.replace(next);
      }).error(function(xhr, textStatus, errorThrown) {
        if (xhr.status === 400) {
          return $form.find('.error_message').show();
        }
      });
    });
    $('#download_all_version_type_btn').on('click', function(e) {
      $('#overlay').show();
      return $('#download_all_version_type').show();
    });
    return $('#overlay, #download_all_version_type a').on('click', function(e) {
      $('#overlay').hide();
      return $('#download_all_version_type').hide();
    });
  });

}).call(this);
