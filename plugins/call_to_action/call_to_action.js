CKEDITOR.dialog.add('callToActionDialog', function(editor) {
  return {
    title: 'Call to action button',
    minWidth: 400,
    minHeight: 200,

    contents: [
      {
        id: 'tab-basic',
        label: 'Basic',
        elements: [
          {
            type: 'text',
            id: 'title',
            label: 'Title',
            validate: CKEDITOR.dialog.validate.notEmpty("Title field cannot be empty.")
          },
          {
            type: 'text',
            id: 'url',
            label: 'URL',
            validate: CKEDITOR.dialog.validate.notEmpty("URL field cannot be empty.")
          }
        ]
      }
    ],
    onOk: function() {
      var dialog = this;

      var callToActionButton = editor.document.createElement('a');
      callToActionButton.setAttribute('href', dialog.getValueOf('tab-basic', 'url'));
      callToActionButton.setAttribute('class', 'call-to-action Button');
      callToActionButton.setText(dialog.getValueOf('tab-basic', 'title' ));

      editor.insertElement(callToActionButton);
    }
  };
});