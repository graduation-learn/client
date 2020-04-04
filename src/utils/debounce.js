export default function (func, delay) {
    let timer = null;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
            timer = null;
        }, delay);
    };
};