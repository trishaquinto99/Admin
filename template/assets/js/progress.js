$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar")
  .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
  return false;
  })
  
  });


 

//checklist

var checks = document.getElementsByName('checkme');
var checkBoxList = document.getElementById('checkBoxList');
var sendbtn = document.getElementById('sendNewSms');

function allTrue(nodeList) {
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].checked === false) return false;
  }
  return true;
}

checkBoxList.addEventListener('click', function(event) {
  sendbtn.disabled = true;
  if (allTrue(checks)) sendbtn.disabled = false;
});

//rate page show hide 1st applicant
$(document).ready(function(){
    $(".hide1").click(function(){
        $(".form1").hide();
    });
    $(".show1").click(function(){
        $(".form1").css('display', 'flex');
    });
});

//rate page show hide 2nd applicant 

$(document).ready(function(){
    $(".hide2").click(function(){
        $(".form2").hide();
    });
    $(".show2").click(function(){
        $(".form2").css('display', 'flex');
    });
});

//rate page show hide 3rd applicant 

$(document).ready(function(){
    $(".hide3").click(function(){
        $(".form3").hide();
    });
    $(".show3").click(function(){
        $(".form3").css('display', 'flex');
    });
});

//rate page show hide 4th applicant 

$(document).ready(function(){
    $(".hide4").click(function(){
        $(".form4").hide();
    });
    $(".show4").click(function(){
        $(".form4").css('display', 'flex');
    });
});

//Only 1 check on checkbox
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check1')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}

