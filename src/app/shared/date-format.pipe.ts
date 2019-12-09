import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date | string,  format: string = 'dd MMMM, yyyy'): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var fulldate=new DatePipe('en-US').transform(date, 'dd MMMM, yyyy h:mm')
    date = new DatePipe('en-US').transform(date, format)

    var today = new Date();
    var today_date = today.getDate()+' '+monthNames[today.getMonth()]+", "+today.getFullYear()

    var yesterday = new Date();
    var yesterday_date = (today.getDate()-1)+' '+monthNames[today.getMonth()]+", "+today.getFullYear()

    if (String(date)==today_date){
      return 'today, '+today.getHours()+":"+today.getMinutes()
    }
    else if(String(date)==yesterday_date){
      return 'yesterday, '+yesterday.getHours()+":"+yesterday.getMinutes()
    }
    return fulldate

}
}
