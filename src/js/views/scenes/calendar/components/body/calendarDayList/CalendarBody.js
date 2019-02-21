import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";
class CalendarBody extends Component {
    constructor(props) {
        super(props);
        this.currentYear = this.getStoreState().calendar.currentYear;
        this.currentMonth = this.getStoreState().calendar.currentMonthIndex;
    }

    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    renderCalendarBody() {     
        let output = ""; 

            let lastDayOfWeek = 0;
            let currentMonthDays = 1;
            let nextMonthDays = 1;
          
            let daysInMonth = this.getDaysInMonth(this.currentMonth,  this.currentYear),
                firstDayMonth = new Date( new Date().getFullYear(), this.currentMonth, 1),
                firstDayWeekday = firstDayMonth.getDay(),
                
                prev_month = this.getStoreState().calendar.currentMonthIndex == 0 ? 11 : this.getStoreState().calendar.currentMonthIndex - 1,
                prev_year = prev_month == 11 ?  new Date().getFullYear() - 1 :  new Date().getFullYear(),
                previousMonthDays = this.getDaysInMonth(prev_month, prev_year);
                  
            for (let i = 1; i < 36; i++) {
                
                // Row
                if (lastDayOfWeek == 0) {
                    output += "<div class=\"cal__cell-row\">";
                }    

                if(i < new Date( new Date().getFullYear(), new Date().getMonth(), 1).getDay()) {
                    let day =  (previousMonthDays - firstDayWeekday + i + 1)
                    output += `${createElement(new CalendarDayItem({ day, otherMonth: true })).outerHTML} `
                } else if(currentMonthDays > daysInMonth) {
                    output += `${createElement(new CalendarDayItem({ day: nextMonthDays, otherMonth: true })).outerHTML} `
                    nextMonthDays++;
                } else {
                    output += `${createElement(new CalendarDayItem({ day: currentMonthDays })).outerHTML} `
                    currentMonthDays++;
                }

                // Row
                if (lastDayOfWeek == 6) {
                    output += "</div>";
                    lastDayOfWeek = 0;
                } else {
                    lastDayOfWeek++;
                }
            }

        return output;
    }

    render() {
        return /*html*/`
        <div> 
            ${this.renderCalendarBody()}
        </div>
        `;
    }
}

export default CalendarBody;