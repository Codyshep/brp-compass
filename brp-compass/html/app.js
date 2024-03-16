window.addEventListener("message", function (event) {
    if (event.data.action == "display") {
        type = event.data.type
        value = event.data.value

        if (type === null) {
            $(".street").hide();
            $(".compass").hide();
        } else  {
            $('.street').html(type);
            $(".street").show();
            $('.compass').html(value);
            $(".compass").show();

            if (value  !== undefined) {
                bar = document.getElementsByTagName("svg")[0];
                bar.setAttribute("viewBox", ''+ (value - 90) + ' 0 180 5');
                heading = document.getElementsByTagName("svg")[1];
                heading.setAttribute("viewBox", ''+ (value - 90) + ' 0 180 1.5');
            }
        }

        $(".ui").fadeIn();
    } else if (event.data.action == "hide") {
        $(".ui").fadeOut();
    }
});
