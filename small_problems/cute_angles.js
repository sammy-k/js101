function dms(num) {
  let degree = Math.floor(num);
  let minutesSeconds = (num - degree) * 60;
  let minutes = Math.floor(minutesSeconds);
  if (minutesSeconds === 0) {
    return `${degree}°00'00"`;
  } else {
    return `${degree}°${minutes}'`;
  }
}

console.log(dms(30));           // 30°00'00";
console.log(dms(76.73));        // 76°43'48";
console.log(dms(254.6));        // 254°35'59";
console.log(dms(93.034773));    // 93°02'05";
console.log(dms(0));            // 0°00'00";
console.log(dms(360));          // 360°00'00" or 0°00'00";