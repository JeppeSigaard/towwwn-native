const localtime = {
  months: "januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december".split(
    ","
  ),
  monthsShort: "jan,feb,mar,apr,maj,jun,jul,aug,sep,okt,nov,dec".split(","),
  monthsParseExact: true,
  weekdays: "søndag,mandag,tirsdag,onsdag,torsdag,fredag,lørdag".split(","),
  weekdaysShort: "søn,man,tir,ons,tor,fre,lør".split(","),
  weekdaysMin: "sø,ma,ti,on,to,fr,lø".split(","),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm"
  },
  calendar: {
    sameDay: "[I dag] LT",
    nextDay: "[I morgen] LT",
    nextWeek: "dddd LT",
    lastDay: "[i går] LT",
    lastWeek: "dddd [sidste uge] LT",
    sameElse: "L"
  },
  relativeTime: {
    future: "%s",
    past: "for %s siden",
    s: "et par sekunder",
    m: "et minut",
    mm: "%d minutter",
    h: "en time",
    hh: "%d timer",
    d: "en dag",
    dd: "%d dage",
    M: "en måned",
    MM: "%d måneder",
    y: "et år",
    yy: "%d år"
  },
  dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
  ordinal: function(number) {
    return number + (number === 1 ? "er" : "e");
  },
  meridiemParse: /PD|MD/,
  isPM: function(input) {
    return input.charAt(0) === "M";
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  meridiem: function(hours, minutes, isLower) {
    return hours < 12 ? "PD" : "MD";
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
};

export default localtime;
