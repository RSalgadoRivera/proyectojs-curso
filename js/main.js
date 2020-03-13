$(document).ready(function () {
    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            auto: true,
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1200,
            randomStart: true,
            captions: false,
            adaptiveHeight: true,
            pager: false,
            controls: false
        });

        //posts

        var posts = [
            {
                title: 'prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Praesent id tincidunt ipsum. Duis id finibus urna. Nullam euismod suscipit metus, at tempor leo. Morbi condimentum, mi feugiat ornare condimentum, nisi ligula ultricies ligula, non elementum tellus nulla vel nulla. Aliquam lorem sem, egestas sed nulla ut, eleifend rutrum ante. Maecenas lobortis mauris ultrices dictum interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu purus, mattis sed lobortis nec, venenatis eget purus. Proin faucibus, quam sed venenatis condimentum, ipsum tortor suscipit mi, vel egestas velit urna ac ante. Vivamus ut dapibus ipsum. Curabitur auctor quam a fermentum varius. Sed malesuada, tortor nec laoreet facilisis, ligula neque auctor felis, ac sagittis quam augue id lacus. Nunc in fermentum dolor. Nunc vel lorem eu velit placerat ornare. '
            },
            {
                title: 'prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Morbi non venenatis massa. Donec aliquam, mi sit amet egestas semper, urna sem tincidunt leo, at scelerisque nulla mi quis lacus. Sed sollicitudin, sem in pretium convallis, augue neque placerat dolor, eget blandit velit est pulvinar ante. Phasellus at lorem mauris. Nunc sit amet lorem ut lectus gravida congue. Suspendisse nec diam nec magna faucibus posuere. Morbi aliquet dolor sit amet commodo efficitur. Fusce fermentum leo in commodo hendrerit. Donec fermentum justo molestie lorem eleifend convallis. Mauris mattis tempor semper. '
            },
            {
                title: 'prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'In vulputate, magna in ornare pharetra, diam massa convallis eros, condimentum rutrum magna est id lacus. Pellentesque in leo mi. Duis arcu turpis, porta nec erat non, tempor ultrices elit. In sed erat in lectus ullamcorper lacinia in nec massa. Morbi in erat ut augue bibendum vehicula nec nec felis. Vestibulum ut rutrum risus, ac dictum purus. Vestibulum id ligula ut orci tincidunt maximus. Fusce et aliquam ipsum. Donec volutpat ultrices gravida. In dolor arcu, iaculis a dolor non, hendrerit sollicitudin arcu. Donec elementum, elit eu semper dignissim, lorem augue commodo mi, sit amet vehicula nibh nibh vitae neque. Mauris accumsan congue risus, sit amet facilisis ipsum auctor a. '
            },
            {
                title: 'prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Fusce ut est rutrum, condimentum nulla ac, egestas quam. Etiam nisl felis, ornare ut cursus eget, eleifend ac nunc. Integer in neque vitae tortor sodales pellentesque. Nunc cursus tortor vitae lacus porttitor iaculis. Vivamus vitae ante gravida mi ullamcorper fringilla. Praesent eget faucibus dolor. Pellentesque sed ligula lectus. Fusce eu nulla vitae turpis egestas venenatis non a augue. Mauris iaculis elit magna, facilisis dapibus libero suscipit ut. Pellentesque non diam nisi. Mauris euismod tortor at nulla congue tincidunt. Etiam eget velit dapibus, blandit metus sed, volutpat ipsum. '
            },
            {
                title: 'prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Aenean mattis viverra neque in consequat. Aenean sed malesuada risus, sit amet condimentum eros. Aliquam consequat imperdiet viverra. In pulvinar, augue a ornare elementum, elit elit ullamcorper nulla, id mattis arcu sapien sed sem. Ut consectetur, leo sit amet semper hendrerit, metus purus efficitur tortor, quis malesuada lectus arcu sed lectus. Cras dignissim lacus eu tellus auctor, id tincidunt felis cursus. Suspendisse aliquet nunc ac sagittis sagittis. Proin non efficitur tellus. Duis elementum dictum erat at aliquam. Nullam pretium augue odio, eu aliquet ante efficitur at. Aliquam pharetra nunc nec quam consequat, vel varius eros placerat. Sed auctor pharetra quam, in vehicula arcu rutrum sit amet. Phasellus semper magna id ligula auctor, in tincidunt enim mattis. '
            }
        ];

        posts.forEach((item) => {
            let post = `
    <article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>
    ${item.content} 
    </p>
    <a href="#">Leer Más</a>
    <div class="clearfix"></div>
    <hr>
    </article>
    `
            $('#posts').append(post);
        });
    }
    var theme = $("#theme");
    //selectode tema
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });
    //scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //login falso
    $("#login form").submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
        location.reload();
    });
    if (localStorage.getItem("form_name") != null) {
        var about = $("#about p");
        about.html("<br><hr><br><strong>Bienvenido, " + localStorage.getItem("form_name") + "</strong>");
        about.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();
    }
    $("#logout").click(function () {
        console.log("se dio click");
        localStorage.clear();
        console.log(localStorage.getItem("form_name"));
        location.reload();
    });
    //acordeon
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }
    //reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }
    //validacion
    if (window.location.href.indexOf('contacto') > -1) {
           $(function () {
           $("#fecha").datepicker();
           });
        
        $("form input[name='b_date']").datepicker({
            dateFormat:'dd-mm-yy',
            changeMonth:true,
            changeYear:true,
            yearRange:"c-100:c"
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});