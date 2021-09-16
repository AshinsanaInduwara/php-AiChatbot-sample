function get() {
    var Gettext = document.getElementById("getText").value;


    var form = new FormData();

    form.append("text", Gettext);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {

            var text = r.responseText;
            document.getElementById("data").innerHTML = text;

        }

    }

    r.open("POST", "ai-chatbot_proc.php", true);
    r.send(form);

};