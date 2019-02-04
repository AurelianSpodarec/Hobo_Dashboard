import Component from "../component";
import search from "./components/search";

class Header extends Component {
    constructor(props) {
        super(props);
        // this.search = this.search;
        this.onEvent = this.onEvent.bind(this);
        // this.openSearch = this.openSearch.bind(this);
        // this.setSubscriber("header", this.onEvent);
    }

    openSearch(event) {
        event.preventDefault();
        console.log("Open Search"); 
        // console.log(this.refs)
        this.refs.headerSearchElement.classList.add("is-expanded");
    }
    
    onEvent(state, action) {
        // if (action.type === )
    }

    render() {
        this.setChild("headerSearchContainer", search);
        console.log(this.refs);
        return /*html*/`
        <header class="header">
        <div class="header__outer">

            <div class="header__item-list">
                <button data-ref="toggleSidebarMobile" class="header__item header__item--special header__toggle-view-btn" type="button">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="header__item">
                    Weather -10
                </div>
                <button class="header__item header__item--pull-right header__item--special header__search-btn" onClick="header.openSearch(event)">
                    <i class="fas fa-search"></i>
                </button>
                <div class="header__item header__item--special">
                    <img class="header__user-avatar" alt="User Avatar" src="https://avatars0.githubusercontent.com/u/10155855?s=40&amp;v=4">
                    <span class="header__user-name">Aurelian Spodarec</span>
                    <i class="fas fa-angle-down"></i>
                </div>
            </div>

            <form data-ref="headerSearchElement" data-child="headerSearchContainer"  class="header__search-container"></form>
                 
        </div>
        </header>
        `;
    }
}

export default Header;