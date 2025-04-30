import { App } from "../App/App.js";
import { createElement } from "../main.js";




export function TheaterAddress(title, address) {
    function renderTheaterHall(){
        root.replaceChild(App("hall"),root.children[0]);
    }
    const div1 = createElement("div", { class: "theaters_right_container" });
    {
        const div2$1 = createElement("div", { class: "theaters_right_container_address" });
        {
            div2$1.innerHTML = title + " SRA-24, Vanchiyoor, Thiruvananthapuram, Kerala 695035";
        }
        const ul2$2 = createElement("ul", { class: "theaters_right_container_awkad_list" });
        {
            address.forEach((ele) => {
                const li3 = createElement("li", { class: "theaters_right_container_awkad_list_item" });
                {
                    const span4$1 = createElement("span", { class: "theaters_right_container_awkad_list_item_span_1" });
                    span4$1.innerHTML = ele.title;
                    const span4$2 = createElement("span", { class: "theaters_right_container_awkad_list_item_span_2" });
                    span4$2.innerHTML = ele.price;
                    li3.append(span4$1, span4$2);
                }
                ul2$2.append(li3);
            });
        }
        const div2$3 = createElement("div", { class: "theaters_right_container_next" });
        {
            const button3 = createElement("button", { class: "theaters_right_container_next_btn" });
            button3.innerHTML = "Book Ticket";
            div2$3.append(button3);

            button3.addEventListener("click",renderTheaterHall);

        }

        div1.append(div2$1, ul2$2, div2$3);
    }

    return div1;


}