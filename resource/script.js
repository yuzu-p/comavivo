function throwdice() {
    var firstdice;
    var seconddice;
    var message = "";

    var ch1 = $('#characterone').val();
    var ch2 = $('#charactertwo').val();

    if (ch1 == '' || ch2 == '') {
        alert('이름을 입력하세요');
        return;
    }

    var returnmessage = $('#result').val();

    if (returnmessage != '') {
        return;
    }

    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    let seconds = today.getSeconds();  // 초
    let milliseconds = today.getMilliseconds();

    var dice1 = Math.floor( 1 + Math.random() * 100 );
    var dice2 = Math.floor( 1 + Math.random() * 100 );

    var op1 = $('#option-one option:selected').val();
    var op2 = $('#option-two option:selected').val();

    if (op1 == 'strong') {
        firstdice = dice1 + 40
    } else if (op1 == 'weak') {
        firstdice = dice1 - 40
    } else {
        firstdice = dice1
    }

    if (op2 == 'strong') {
        seconddice = dice2 + 40
    } else if (op2 == 'weak') {
        seconddice = dice2 - 40
    } else {
        seconddice = dice2
    }

    if (firstdice > seconddice) {
        message += ch1 + ' [' + firstdice + '], ' + ch2 + '[' + seconddice + ']';
        message += '\n'
        message += ch1 + '의 승리'
        message += '\n\n'
        message += year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ':' + seconds + 
        ':' + milliseconds
    } else if (seconddice > firstdice) {

        message += ch1 + ' [' + firstdice + '], ' + ch2 + '[' + seconddice + ']';
        message += '\n'
        message += ch2 + '의 승리'
        message += '\n\n'
        message += year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ':' + seconds + 
        ':' + milliseconds
    } else {
        message += ch1 + ' [' + firstdice + '], ' + ch2 + '[' + seconddice + ']';
        message += '\n'
        message += '무승부'
        message += '\n\n'
        message += year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ':' + seconds + 
        ':' + milliseconds
    }

    $('#result').val(message);
}

function copytext() {
    const textArea = document.getElementById("result");
    textArea.select();
    document.execCommand('copy');
}