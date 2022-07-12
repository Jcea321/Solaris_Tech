
    function form_show(buttonValue) {
      document.getElementById('form-c').style.display = 'block';
    var select = document.getElementById("selection");
    var length = select.options.length;
    for (var i = length-1; i >= 0; i--) {
      select.options[i] = null;
    }
      for(var i = 0;i<5;i++)
      document.getElementsByClassName("txtbox")[i].value = null;
    location.href = "#about";
    document.getElementById('form').style.display = 'inline';
    document.getElementById('form').style.zIndex = '3';
    document.body.classList.add("stop-scrolling");
    var selectElement = document.getElementById('selection');
        var packages = ["1KW Solar PV System ",
                        "2KW Solar PV System ",
                        "3KW Solar PV System ",
                        "5KW Solar PV System "];
        var arrangePackages;
        var pcount=0;
        for(var i = 0;i<5;i++)
            document.getElementsByClassName("txtbox")[i].style.borderColor = 'black';
        for(var i = 0;i<4;i++) {
            if(i==0)
                arrangePackages = packages[buttonValue-1];
            else
            {
                if(pcount==buttonValue-1)
                    pcount++;
                arrangePackages = packages[pcount] + pcount;
                pcount++;
            }
            selectElement.add(new Option(arrangePackages));
        }
    }
    function form_hide() {
    document.getElementById('form').style.display = 'none';
    document.body.classList.remove("stop-scrolling");
    }
    function form1_hide() {
    for(var i = 0;i<5;i++)
        document.getElementsByClassName("txtbox")[i].style.borderColor = 'black';
    var bool = "true";
    var error = "";
    for(var i = 0;i<5;i++)
        {
            if (document.getElementsByClassName("txtbox")[i].value.trim() == "") {
                if(i==0)
                {
                    error ="First name "
                    bool="false"
                    document.getElementsByClassName("txtbox")[i].style.borderColor = 'red';
                }
                else if(i == 1)
                {
                    error="Last name"
                    bool = "false";
                    document.getElementsByClassName("txtbox")[i].style.borderColor = 'red';
                }
                else if(i == 2)
                {
                    error="Address" 
                    bool = "false";
                    document.getElementsByClassName("txtbox")[i].style.borderColor = 'red';
                }
                else if(i == 3)
                {
                    error="Email address"
                    bool = "false";
                    document.getElementsByClassName("txtbox")[i].style.borderColor = 'red';
                }
                else if(i == 4)
                {
                    error="Contact number"
                    bool = "false";
                    document.getElementsByClassName("txtbox")[i].style.borderColor = 'red';
                }
            }
        }
    if(bool == "true")
    {
        sendMailClient();
        sendMailServer();
      document.body.classList.remove("stop-scrolling");
      document.getElementById('form-c').style.display = 'none';
      document.getElementById('bye').style.display = 'inline';
      setTimeout(() => {
      document.getElementById('form').style.display = 'none';
      document.getElementById('form-c').style.display = 'inline';
      document.getElementById('bye').style.display = 'none';
      var select = document.getElementById("selection");
      var length = select.options.length;
      for (i = length-1; i >= 0; i--) {
          select.options[i] = null;
      }
      document.body.classList.remove("stop-scrolling");
      }, 3000);
    }
    else
    {
      alert("Missing field: "+error);
      return false;
    }
    }
     function sendMailClient(params) {
      var tempParams= {
                last_name: document.getElementById('Lname').value,
                smail:document.getElementById('email').value,
                mail: document.getElementById('email').value,
                com_name: (document.getElementById('Lname').value +", " + document.getElementById('Fname').value ), 
                com_add: document.getElementById('Add').value,
                com_con: document.getElementById('contact').value,
                cpackage:document.getElementById('selection').value,
            }
        emailjs.send('service_jd1dokr','template_nbzeg23', tempParams)
        .then(function(res){
            console.log("Sucess", res.status)
        })
    }
    function sendMailServer(params) {
        var tempParams= {
                  smail:document.getElementById('senderMail').value,
                  mail: document.getElementById('email').value,
                  com_name: (document.getElementById('Lname').value +", " + document.getElementById('Fname').value ), 
                  com_add: document.getElementById('Add').value,
                  com_con: document.getElementById('contact').value,
                  cpackage:document.getElementById('selection').value,
              }
          emailjs.send('service_jd1dokr','template_b5nccf4', tempParams)
          .then(function(res){
              console.log("Sucess", res.status)
          })
      }