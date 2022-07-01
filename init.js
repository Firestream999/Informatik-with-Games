
    (function () {
        var options = {
            link: "https://www.chatroom2000.de/", 
            link_color: "#E74339", 
            call_to_action: "Schreibt euch", 
            button_color: "#FF6550", 
            position: "right", 
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

