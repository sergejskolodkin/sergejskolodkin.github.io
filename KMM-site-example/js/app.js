(function($){
    $(window).on("load",function(){
        $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
        $.mCustomScrollbar.defaults.axis="yx"; //enable 2 axis scrollbars by default
        $("#content-ltk").mCustomScrollbar({theme:"light-thick"});
        $("#content-ltk-big").mCustomScrollbar({theme:"light-thick"});
    });
})(jQuery);

$(document).ready(function(){
    // Добавление элемента ко всем параграфам после загрузки документа
    $(".sortirovka-img").after('<ul class="sort-menu"><li>Сортировка по возростанию</li><li>Сортировка по убыванию</li><li>Сортировка по ----</li></ul>');
    $(".sortirovka").click(function(){
        $('.sort-menu', this).slideToggle();
    });

     // добавление кнопки resize
     $("#content-ltk").after('<div  class="resize"></div>');
     $("#content-ltk-big").after('<div class="resize resize-big"></div>');
    //тестовая функция  в app.js
    for(let i = 0; i<1000; i++ )
    {
        $('#tbody').append("<tr class='table-row'><td class='td-body'>1</td><td class='td-body'>2</td><td class='td-body'>3</td><td class='td-body'>4</td><td class='td-body'>5</td><td class='td-body'>6</td><td class='td-body'>7</td><td class='td-body'>8</td></tr>");
    }


    for(let i = 0; i<1000; i++ )
    {
        $('#tbody-big').append("<tr class='table-row'><td class='td-body'>Двести тысяч</td><td class='td-body'>2</td><td class='td-body'>3</td><td class='td-body'>4</td><td class='td-body'>5</td><td class='td-body'>6</td><td class='td-body'>7</td><td class='td-body'>8</td><td class='td-body'>1</td><td class='td-body'>2</td><td class='td-body'>3</td><td class='td-body'>4</td><td class='td-body'>5</td><td class='td-body'>6</td><td class='td-body'>7</td></tr>");
        console.log("привет")
    }

    $('.resize').click(function(){
        $('.resize').toggleClass('resize-activate');
        $(".scroll-table-body-big").toggleClass("table-body-none");
        $("#content-ltk").toggleClass("content-height");
      
    });

    function FixTable(table) {
        var inst = this;
        this.table  = table;
     
        $('tr > th',$(this.table)).each(function(index) {
            var div_fixed = $('<div/>').addClass('fixtable-fixed');
            var div_relat = $('<div/>').addClass('fixtable-relative');
            div_fixed.html($(this).html());
            div_relat.html($(this).html());
            $(this).html('').append(div_fixed).append(div_relat);
            $(div_fixed).hide();
        });
     
        this.StyleColumns();
        this.FixColumns();
     
        $(window).scroll(function(){
            inst.FixColumns()
        }).resize(function(){
            inst.StyleColumns()
        });
    }
     
    FixTable.prototype.StyleColumns = function() {
        var inst = this;
        $('tr > th', $(this.table)).each(function(){
            var div_relat = $('div.fixtable-relative', $(this));
            var th = $(div_relat).parent('th');
            $('div.fixtable-fixed', $(this)).css({
                'width': $(th).outerWidth(true) - parseInt($(th).css('border-left-width')) + 'px',
                'height': $(th).outerHeight(true) + 'px',
                'left': $(div_relat).offset().left - parseInt($(th).css('padding-left')) + 'px',
                'padding-top': $(div_relat).offset().top - $(inst.table).offset().top + 'px',
                'padding-left': $(th).css('padding-left'),
                'padding-right': $(th).css('padding-right')
            });
        });
    }
     
    FixTable.prototype.FixColumns = function() {
        var inst = this;
        var show = false;
        var s_top = $(window).scrollTop();
        var h_top = $(inst.table).offset().top;
     
        if (s_top < (h_top + $(inst.table).height() - $(inst.table).find('.fixtable-fixed').outerHeight()) && s_top > h_top) {
            show = true;
        }
     
        $('tr > th > div.fixtable-fixed', $(this.table)).each(function(){
            show ? $(this).show() : $(this).hide()
        });
    }
     
    $(document).ready(function(){
        $('.fixtable').each(function() {
            new FixTable(this);
        });
    });
   

    $('.resize-big').click(function(){
        $('.resize .resize-big').toggleClass('resize-activate');
        $(".scroll-table-body").toggleClass("table-body-none");
        $(".krafik").toggleClass("krafik-none");
        $(".content").toggleClass("content-height");

    });
  });






