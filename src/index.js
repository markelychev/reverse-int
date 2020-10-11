module.exports = function reverse(n) {
    //const sign = n < 0 ? "-" : "";
    return Math.abs(n).toString().split("").reverse().join("");
};
