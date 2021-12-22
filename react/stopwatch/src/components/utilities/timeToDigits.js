function timeToDigits(time) {
    if (time < 4) return ({ hr: 0, min: 0, sec: 0, ms: time })
    let hr, min, sec, ms;
    hr = parseInt(time / 3600000)
    min = parseInt((time - (360000 * hr)) / 6000)
    sec = parseInt((time - (360000 * hr) - (6000 * min)) / 100)
    ms = parseInt((time - (360000 * hr) - (6000 * min) - (100 * sec)) / 1)
    return { hr, min, sec, ms }
}

export default timeToDigits