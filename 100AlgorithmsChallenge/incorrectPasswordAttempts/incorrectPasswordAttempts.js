function incorrectPasscodeAttempts(passcode, attempts) {
    var count = 0;
    for (var i = 0; i < attempts.length; i++) {
        if (count >= 10) {
            return true;
        }
        if (passcode === attempts[i]) {
            count = 0;
        }
        count++;
    }
    return false;
}
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
//true
