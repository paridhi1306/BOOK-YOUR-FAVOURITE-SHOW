import { Body } from "../Body/Body.js";
import { Details } from "../Details/Details.js";
import { Footer } from "../Header&Footer/Footer.js";
import { Navigation } from "../Header&Footer/Navigation.js";
import { Login } from "../Login&Signup/Login.js";
import { createElement } from "../main.js"
import { TheaterHall } from "../TheaterHall/TheaterHall.js";


export function App(route) {

    let appPage;

    function renderDetails() {
        appPage.replaceChild(Details(), appPage.children[1]);
    }





    const div1 = createElement("div", { class: "app" });



    switch (route) {
        case "home":
            appPage = div1;
            div1.append(Navigation(), Body(renderDetails), Footer());
            return div1;

        case "login":

            div1.replaceChildren(Login("Log In"));
            return div1;
        case "signup":
            div1.replaceChildren(Login("Sign Up"));
            return div1;
        case "hall":
            div1.replaceChildren(TheaterHall());
            div1.style.minWidth = "600px";
            return div1;

        default:
            appPage = div1;
            div1.replaceChildren(Navigation(), Body(renderDetails), Footer());
            return div1;
    }


    return div1;


}