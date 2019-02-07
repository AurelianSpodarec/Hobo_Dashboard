import Component from "#components/component";
import calendarHeader from "./components/header";
import calendarMonth from "./components/month";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
        this.setSubscriber("calendar", this.onEvent);
    }

    

    onEvent(state, action) {
        
    }

    render() {
        this.setChild("calendar-header", calendarHeader);
        this.setChild("calendar-month", calendarMonth)

        return /*html*/`
            <div data-js="scene-element" class="scene">

                <header data-child="calendar-header" class="cal__header" style="background-image: url('https://c8.alamy.com/comp/PTB79P/vector-banner-blue-winter-background-with-ice-and-snow-PTB79P.jpg');"></header>
                <section data-child="calendar-month" class="cal__month"></section>

            </div>
        `;
    }
}

export default Calendar;