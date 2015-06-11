window.onload = function() {
  var mg1 = document.getElementById('rotating-menu-group');
  var mg2 = document.getElementById('icon-switcher-menu-group');
  var md = document.getElementById('modal-dialog');

  function toggleMenuGroup(mg) {
    if (mg.classList.contains('closed')) {
      mg.open();
    } else {
      mg.close();
    }
  }

  document.getElementById('open-button1').addEventListener('click', function() {
    toggleMenuGroup(mg1);
  });

  document.getElementById('open-button2').addEventListener('click', function() {
    toggleMenuGroup(mg2);
  });

  mg1.addEventListener('click', function(e) {
    if (e.target === mg1) {
      toggleMenuGroup(mg1);
    }
  });

  mg2.addEventListener('click', function(e) {
    if (e.target.dataset.targetIcon) {
      mg2.changeIcon(e.target.dataset.targetIcon);
    } else if (e.target === mg2) {
      toggleMenuGroup(mg2);
    }
  });

  md.addEventListener('click', function() {
    var dialog = new SmartModalDialog();
    dialog.open({
      message: {
        textRaw: 'How are you today?'
      },
      buttonSettings: [
        {
          textRaw: 'Bad',
          onClick: function() {
            alert('I feel bad today!');
          }
        },
        {
          icon: 'style/browser.png',
          textRaw: 'Good',
          class: 'good',
          defaultFocus: true,
          onClick: function() {
            alert('I feel good today!');
          }
        },
        {
          textRaw: 'Excellent',
          class: 'danger',
          onClick: function() {
            alert('I feel excellent today!');
          }
        }
      ],
      onCancel: function() {
        alert('cancel');
      }
    });
  });
};