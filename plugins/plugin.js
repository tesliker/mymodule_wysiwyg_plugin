(function($) {


  CKEDITOR.plugins.add('mymodule_plugin', {
    init: function(editor) {
      /**
       * UGP Link Button
       */
      editor.addCommand('call_to_action', new CKEDITOR.dialogCommand('callToActionDialog'));

      editor.ui.addButton('mymodule_call_to_action', {
        label: 'Insert call to action button',
        toolbar: 'insert',
        command: 'call_to_action',
        icon: this.path + 'call_to_action/call_to_action.png'
      });

      CKEDITOR.dialog.add('callToActionDialog', this.path + 'call_to_action/call_to_action.js');

    }
  });
})(jQuery);
