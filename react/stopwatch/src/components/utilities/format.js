const format = data => data === 0 ? "00" : data < 10 ? "0" + data : data;

export default format