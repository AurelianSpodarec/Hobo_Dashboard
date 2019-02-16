import Component from "#components/component";
import CalendarDayItem from "./CalendarDayItem";
import createElement from "#lib/createElement";
class CalendarBody extends Component {
    constructor(props) {
        super(props);
        //  new Date() = new Date();
        this.fullYear = this.getStoreState().calendar.currentMonthIndex;
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
          
            let daysInMonth = this.getDaysInMonth(this.currentMonth,  this.fullYear),
                firstDayMonth = new Date( this.fullYear, this.currentMonth, 1),
                firstDayWeekday = firstDayMonth.getDay(),
                previousMonthDays = this.getDaysInMonth(this.currentMonth, this.fullYear);
                  
            for (let i = 1; i < 36; i++) {
                
                // Row
                if (lastDayOfWeek == 0) {
                    output += "<div data-timestamp=\"${new Date().toDateString()}\" class=\"cal__cell-row\">";
                }    

                if(i < new Date( this.fullYear, this.currentMonth, 1).getDay()) {
                    let ol =  (previousMonthDays - firstDayWeekday + i + 1)
                    output += `${createElement(new CalendarDayItem({dayNumber: ol, otherMonth: true})).outerHTML} `

                } else if(currentMonthDays > daysInMonth) {
                    output += `${createElement(new CalendarDayItem({dayNumber: nextMonthDays, otherMonth: true  })).outerHTML} `
                    nextMonthDays++;

                } else {
                    output += `${createElement(new CalendarDayItem({dayNumber: currentMonthDays })).outerHTML} `
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
            ${this.renderCalendarBody()};
        </div>
        `;
    }
}

export default CalendarBody;