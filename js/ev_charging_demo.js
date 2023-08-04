$(function () {
    // home
    let stopExecution = false;

    // home
    const refreshPage = () => {
        stopExecution = true; // 設定變數為 true 來終止事件的執行
        location.reload();
    };

    const refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', refreshPage);
    //------------------------------------------------------------- back_to_page1
    const backToPage01 = () => {
        // 隱藏其他頁面
        $('#page_02, #page_03, #page_04, #page_05, #page_06, #page_07, #page_08, #page_09').addClass('hidden');
        // 顯示 page_01
        $('#page_01').stop().show().removeClass('hidden');

        // 初始化 wow.js 動畫
        new WOW().init();
    };

    // 點擊返回按鈕觸發事件
    $('#back_to_page01').click(function (e) {
        e.preventDefault();
        backToPage01();
    });
    // 初始化 wow.js 動畫
    // new WOW().init();
    //------------------------------------------------------------- back_to_page2
    const backToPage02 = () => {
        // 隱藏其他頁面
        $('#page_01, #page_03, #page_04, #page_05, #page_06, #page_07, #page_08, #page_09').addClass('hidden');
        // 顯示 page_01
        $('#page_02').stop().show().removeClass('hidden');

        // 初始化 wow.js 動畫
        new WOW().init();
    };

    // 點擊返回按鈕觸發事件
    $('#back_to_page02').click(function (e) {
        e.preventDefault();
        backToPage02();
    });
    // 初始化 wow.js 動畫
    // new WOW().init();

    //page_01
    $('#p1_button').click(function (e) {
        $('#page_01').stop().fadeOut();
        $('#page_02').removeClass('hidden').show();
        e.preventDefault();
    });
    // page_02
    $('#p2_button_1').click(function (e) {
        $('#page_02').stop().fadeOut();
        $('#page_03').removeClass('hidden').show();
        // 設定 5 秒後的延遲操作
        setTimeout(function () {
            // 將 page_03 隱藏（淡出），同時將 page_04 顯示（淡入）
            $('#page_03').stop().fadeOut();
            $('#page_04').removeClass('hidden').show();
            setTimeout(function () {
                // 將 page_03 隱藏（淡出），同時將 page_04 顯示（淡入）
                $('#page_04').stop().fadeOut();
                $('#page_05').removeClass('hidden').show();
            }, 5000);
        }, 5000);
        e.preventDefault();
    });
    $('#p2_button_2').click(function (e) {
        $('#page_02').stop().fadeOut();
        $('#page_03').removeClass('hidden').show();
        // 設定 5 秒後的延遲操作
        setTimeout(function () {
            // 將 page_03 隱藏（淡出），同時將 page_04 顯示（淡入）
            $('#page_03').stop().fadeOut();
            $('#page_04').removeClass('hidden').show();
            setTimeout(function () {
                // 將 page_03 隱藏（淡出），同時將 page_04 顯示（淡入）
                $('#page_04').stop().fadeOut();
                $('#page_05').removeClass('hidden').show();
            }, 5000);
        }, 5000);
        e.preventDefault();
    });
    function charging() {
        var cnt = document.getElementById('count');
        var water = document.getElementById('water');
        var percent = cnt.innerText;
        var interval;
        interval = setInterval(function () {
            percent++;
            cnt.innerHTML = percent;
            water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';
            if (percent == 90) {
                clearInterval(interval);
            }
        }, 70);
    }
    // page_05
    $('#p5_button_1').click(function (e) {
        $('#page_05').stop().fadeOut();
        $('#page_06').removeClass('hidden').show();
        // 設定 5 秒後的延遲操作
        setTimeout(function () {
            $('#page_06').stop().fadeOut();
            $('#page_07').stop().fadeIn();
            charging();
        }, 5000);
        e.preventDefault();
    });
    $('#p5_button_2').click(function (e) {
        $('#page_05').stop().fadeOut();
        $('#page_06').removeClass('hidden').show();
        // 設定 5 秒後的延遲操作
        setTimeout(function () {
            $('#page_06').stop().fadeOut();
            $('#page_07').stop().fadeIn();
            charging();
        }, 5000);
        e.preventDefault();
    });
    // page_07
    $('#p7_button').click(function (e) {
        $('#page_07').find('.charging_info').stop().fadeOut();
        $('#page_07').find('.not_yet').stop().fadeIn();
        // 設定 5 秒後的延遲操作
        setTimeout(function () {
            $('#page_07').stop().fadeOut();
            $('#page_08').removeClass('hidden').show();
            setTimeout(function () {
                $('#page_08').stop().fadeOut();
                $('#page_09').removeClass('hidden').show();
            }, 5000);
        }, 5000);
        e.preventDefault();
    });
    // 秒數
    // 使用箭頭函式取得現在秒數
    const updateSeconds = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDisplay = document.getElementById('secondsDisplay');
        secondsDisplay.textContent = seconds;
    };

    // 每秒呼叫一次updateSeconds函式
    setInterval(updateSeconds, 1000);
});
