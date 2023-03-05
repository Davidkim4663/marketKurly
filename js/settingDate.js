// 오늘 날짜에서 7일 더하기
newDate.setDate(newDate.getDate() + 7);
console.log('오늘 날짜에서 7일 더하기 >> ' + newDate);

// 오늘 날짜에서 7일 빼기
newDate.setDate(newDate.getDate() - 7);
console.log('오늘 날짜에서 7일 빼기 >> ' + newDate);

// 오늘 날짜에서 한달 더하기
newDate.setMonth(newDate.getMonth() + 1);
console.log('오늘 날짜에서 1달 더하기 >> ' + newDate);

// 오늘 날짜에 한달 되돌리고 4시간 더하기
newDate.setMonth(newDate.getMonth() - 1);
newDate.setHours(newDate.getHours() + 4);
console.log('오늘 날짜에서 1달 빼고 4시간 더하기 ' + newDate);