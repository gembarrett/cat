templates.warning = function(data){
  var content = '<div class="mob-overlay"><button>X</button><p>'+data.mobile.content+'</p>';
    content += '<button>'+data.mobile.buttons[0]+'</button>';
    content += '<button>'+data.mobile.buttons[1]+'</button></div>';
    return content;
};

