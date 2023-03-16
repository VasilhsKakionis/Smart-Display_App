import {Data} from '../models';

export class CountDigits {

  constructor() {
  }

  bar(bits: boolean[]): number {

    let aNumber = 0;

    if (bits.length == 9 || bits.length == 8) {
      let isBool = true;
      for (let i = 0; i < bits.length; i++) {
        if (bits[i] !== true && bits[i] !== false) {
          isBool = false;
          break;
        }
      }
      if (isBool == true) {
        for (let i = 0; i < bits.length; i++) {
          if (bits[i] == true) {
            aNumber = i + 1;
          }
        }
      } else {
        aNumber = -1;
      }

    } else {
      aNumber = -1;
    }


    return aNumber;
  }

  sevenSegment(bits: boolean[]): number {

    //  A
    //B   G
    //  C
    //D   F
    //  E

    let num = -1;

    if (bits.length == 7) {
      let isBool = true;
      for (let i = 0; i < bits.length; i++) {
        if (bits[i] !== true && bits[i] !== false) {
          isBool = false;
          break;
        }
      }

      if (isBool == true) {
        if (bits[0] == true && bits[1] == true && bits[2] == false && bits[3] == true && bits[4] == true && bits[5] == true && bits[6] == true) {
          num = 0;
        } else if (bits[0] == false && bits[1] == false && bits[2] == false && bits[3] == false && bits[4] == false && bits[5] == true && bits[6] == true) {
          num = 1;
        } else if (bits[0] == true && bits[1] == false && bits[2] == true && bits[3] == true && bits[4] == true && bits[5] == false && bits[6] == true) {
          num = 2;
        } else if (bits[0] == true && bits[1] == false && bits[2] == true && bits[3] == false && bits[4] == true && bits[5] == true && bits[6] == true) {
          num = 3;
        } else if (bits[0] == false && bits[1] == true && bits[2] == true && bits[3] == false && bits[4] == true && bits[5] == true && bits[6] == false) {
          num = 4;
        } else if (bits[0] == true && bits[1] == true && bits[2] == true && bits[3] == false && bits[4] == true && bits[5] == true && bits[6] == false) {
          num = 5;
        } else if (bits[0] == true && bits[1] == true && bits[2] == true && bits[3] == true && bits[4] == true && bits[5] == true && bits[6] == false) {
          num = 6;
        } else if (bits[0] == true && bits[1] == false && bits[2] == false && bits[3] == false && bits[4] == false && bits[5] == true && bits[6] == true) {
          num = 7;
        } else if (bits[0] == true && bits[1] == true && bits[2] == true && bits[3] == true && bits[4] == true && bits[5] == true && bits[6] == true) {
          num = 8;
        } else if (bits[0] == true && bits[1] == true && bits[2] == true && bits[3] == false && bits[4] == true && bits[5] == true && bits[6] == true) {
          num = 9;
        } else {
          num = -1;
        }
      } else {
        num = -1;
      }
    } else {
      num = -1;
    }

    return num;
  }

  hours(bits: number[]): number {

    let hours = bits[0] * 10000 + bits[1] * 1000 + bits[2] * 100 + bits[3] * 10 + bits[4];

    return hours;
  }

  createFinalArray(bars: number[], uppeIND: boolean[], hours: number, timer: boolean, lowIND: boolean[], isOk: boolean): Data {

    let data = new Data();

    //push 4 numbers for bars
    data.bar1 = bars[0];
    data.bar2 = bars[1];
    data.bar3 = bars[2];
    data.bar4 = bars[3];

    //push 4 booleans for uppeIND
    data.upperIND1 = uppeIND[0];
    data.upperIND2 = uppeIND[1];
    data.upperIND3 = uppeIND[2];
    data.upperIND4 = uppeIND[3];

    //push hours
    data.hours = hours;

    //push timer
    data.timer = timer;

    //push 4 boolean for first row of lowIND
    data.lowIND11 = lowIND[0];
    data.lowIND12 = lowIND[1];
    data.lowIND13 = lowIND[2];
    data.lowIND14 = lowIND[3];

    //push 4 boolean for first second of lowIND
    data.lowIND21 = lowIND[4];
    data.lowIND22 = lowIND[5];
    data.lowIND23 = lowIND[6];
    data.lowIND24 = lowIND[7];

    //push 4 boolean for third row of lowIND
    data.lowIND31 = lowIND[8];
    data.lowIND32 = lowIND[9];
    data.lowIND33 = lowIND[10];
    data.lowIND34 = lowIND[11];

    //push 4 boolean for fourth row of lowIND
    data.lowIND41 = lowIND[12];
    data.lowIND42 = lowIND[13];
    data.lowIND43 = lowIND[14];
    data.lowIND44 = lowIND[15];

    //push timestamp
    data.timestamp = String(new Date());

    //push flag is not ok
    data.flagIsOk = isOk;

    return data;
  }

  calculateNumberOfMonth(month: string): string {
    let x = "";
    if (month === "Jan") {
      x = "01";
    } else if (month === "Feb") {
      x = "02";
    } else if (month === "Mar") {
      x = "03";
    } else if (month === "Apr") {
      x = "04";
    } else if (month === "May") {
      x = "05";
    } else if (month === "Jun") {
      x = "06";
    } else if (month === "Jul") {
      x = "07";
    } else if (month === "Aug") {
      x = "08";
    } else if (month === "Sep") {
      x = "09";
    } else if (month === "Oct") {
      x = "10";
    } else if (month === "Nov") {
      x = "11";
    } else if (month === "Dec") {
      x = "12";
    }

    return x
  }
}
