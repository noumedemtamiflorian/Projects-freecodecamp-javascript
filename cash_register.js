function checkCashRegister(price, cash, cid) {
    var change = [];
    var needed = cash - price;
    var each = cid.map(value => value[1]);
    var total = each.reduce(function (a, b) {
        return a + b;
    });
    if (needed > total) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    if (needed == total) {
        return { status: "CLOSED", change: cid }
    }
    // hundred
    if (needed > 100) {
        let times = parseInt(needed / 100);
        if (times > parseInt(cid[8][1] / 100)) {
            times = parseInt(cid[8][1] / 100);
        }
        cid[8][1] = cid[8][1] - (100 * times);
        change.push(["ONE HUNDRED", 100 * times]);
        needed -= 100 * times;
        needed = needed.toFixed(2);
    }
    // twenty
    if (needed > 20) {
        let times = parseInt(needed / 20);
        if (times > parseInt(cid[7][1] / 20)) {
            times = parseInt(cid[7][1] / 20);
        }
        cid[7][1] = cid[7][1] - (20 * times);
        change.push(["TWENTY", 20 * times]);
        needed -= 20 * times;
        needed = needed.toFixed(2);

    }
    // ten
    if (needed > 10) {
        let times = parseInt(needed / 10);
        if (times > parseInt(cid[6][1] / 10)) {
            times = parseInt(cid[6][1] / 10);
        }
        cid[6][1] = cid[6][1] - (10 * times);
        change.push(["TEN", 10 * times]);
        needed -= 10 * times;
        needed = needed.toFixed(2);
    }
    // five
    if (needed > 5) {
        let times = parseInt(needed / 5);
        if (times > parseInt(cid[5][1] / 5)) {
            times = parseInt(cid[5][1] / 5);
        }
        cid[5][1] = cid[5][1] - (5 * times);
        change.push(["FIVE", 5 * times]);
        needed -= 5 * times;
        needed = needed.toFixed(2);
    }
    // one
    if (needed > 1) {
        let times = parseInt(needed / 1);
        if (times > parseInt(cid[4][1] / 1)) {
            times = parseInt(cid[4][1] / 1);
        }
        cid[4][1] = cid[4][1] - (1 * times);
        change.push(["ONE", 1 * times]);
        needed -= 1 * times;
        needed = needed.toFixed(2);
    }
    // quarter
    if (needed > 0.25) {
        let times = parseInt(needed / 0.25);
        if (times > parseInt(cid[3][1] / 0.25)) {
            times = parseInt(cid[3][1] / 0.25);
        }
        cid[3][1] = cid[3][1] - (0.25 * times);
        change.push(["QUARTER", 0.25 * times]);
        needed -= 0.25 * times;
        needed = needed.toFixed(2);
    }
    // dime
    if (needed > 0.1) {
        let times = parseInt(needed / 0.1);
        if (times > parseInt(cid[2][1] / 0.1)) {
            times = parseInt(cid[2][1] / 0.1);
        }
        cid[2][1] = cid[2][1] - (0.1 * times);
        change.push(["DIME", 0.1 * times]);
        needed -= 0.1 * times;
        needed = needed.toFixed(2);
    }
    // nickel
    if (needed > 0.05) {
        let times = parseInt(needed / 0.05);
        if (times > parseInt(cid[1][1] / 0.05)) {
            times = parseInt(cid[1][1] / 0.05);
        }
        cid[1][1] = cid[1][1] - (0.05 * times);
        change.push(["NICKEL", 0.05 * times]);
        needed -= 0.05 * times;
        needed = needed.toFixed(2);
    }
    // penny
    if (needed > 0.01) {
        let times = parseInt(needed / 0.01);
        if (times > parseInt(cid[0][1] / 0.01)) {
            times = parseInt(cid[0][1] / 0.01);
        }
        cid[0][1] = cid[0][1] - (0.01 * times);
        change.push(["PENNY", 0.01 * times]);
        needed -= 0.01 * times;
        needed = needed.toFixed(2);
    }
    if (needed == 0) {
        return { status: "OPEN", change: change }
    }
    return { status: "INSUFFICIENT_FUNDS", change: [] };
}
const result = checkCashRegister(200, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(result);