const equationElement = document.getElementById('equation');
const mathJaxElement = document.getElementById('MathJax-script');

mathJaxElement.addEventListener('load', function() {
    updateTime();
    setInterval(updateTime, 1000);
})

let lastHour = null;
let lastMinute = null;

function updateTime()
{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours === lastHour && minutes === lastMinute) return;
    lastHour = hours;
    lastMinute = minutes;

    const B = minutes - hours;
    const C = -minutes * hours;

    let tex = '$$x^2';

    if (B > 1) tex += ` + ${B}x`;
    else if (B === 1) tex += ` + x`;
    else if (B === -1) tex += ` - x`;
    else if (B < -1) tex += ` - ${-B}x`;

    if (C > 0) tex += ` + ${C}`;
    else if (C < 0) tex += ` - ${-C}`;

    tex += ' = 0$$';

    equationElement.textContent = tex;
    MathJax.typeset();
}
