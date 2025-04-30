import { Navigation } from "../Header&Footer/Navigation.js";
import { createElement } from "../main.js";
import { TheaterHallSection } from "./TheaterHallSection.js";








export function TheaterHall() {
    const hallMatrix = [];
    const row = [{ class: "row_name", value: "A" }]
    Array(10).fill(-1).forEach((ele, idx) => {
        if (idx == 4 || idx == 5) {
            row.push({ class: "row_path", value: "" });
            return;
        }

        if (idx == 2 || idx == 7) {
            row.push({ class: "seat_number reserved", value: idx + 1 });
            return;

        }
        row.push({ class: "seat_number", value: idx + 1 });
    });
    row.push({ class: "row_name", value: "A" });

    Array(3).fill(-1).forEach((ele, idx) => {
        hallMatrix.push(row);
    });


    const cart = {};
    let oldPriceNode;
    function handleGrandTotal(cart) {
        let price = 0;
        for (const key in cart) {
            price += (cart[key].length) * (key - 0);
        }
        const div = createElement("div", { class: "hall_seat_price" });
        {
            var button = createElement("button", { class: "hall_seat_price_button" });
            button.innerHTML =`Total Rs ${price} /-`;

            div.append(button);

        }
        if (price) {
            oldPriceNode ? div1.replaceChild(div, oldPriceNode) : div1.append(div);
            oldPriceNode = div;

        }else{
            div1.removeChild(oldPriceNode);
            oldPriceNode = null;
        }

    }

    console.log(cart);

    var div1 = createElement("div", { class: "hall" });
    {

        const div2$1 = createElement("div", { class: "hall_screen" });
        {
            const div3 = createElement("div", { class: "hall_screen_this_way" });
            {
                const span4$1 = createElement("div", { class: "hall_screen_this_way_text" });
                span4$1.innerHTML = "All eyes this way please!";
                const div4$2 = createElement("div", { class: "hall_screen_this_way_icon" });
                {
                    const div5 = createElement("div", { class: "hall_screen_this_way_icon_prespective" });
                    div4$2.append(div5);
                }



                div3.append(span4$1, div4$2);

            }
            div2$1.append(div3);
        }
        const arr1 = ["Silver Rs 200/-", "Gold Rs 300/-", "Diamond Rs 400/-", "Balcony-deluxe   Rs 500/-"]
        const div2$2 = createElement("div", { class: "hall_seatingArrangement" });
        arr1.forEach((ele, idx) => {
            const div3 = createElement("div", { class: "hall_seatingArrangement_divider" });
            {
                div3.innerHTML = ele;
            }
            div2$2.append(div3, TheaterHallSection(hallMatrix, (idx + 2) * 100, cart, handleGrandTotal));
        });
        const arr2 = ["Available", "Reserved", "Selected"];
        const div2$3 = createElement("div", { class: "hall_seat_legends" });
        {
            const ul3 = createElement("ul", { class: "hall_seat_legends_list" });
            arr2.forEach((ele) => {
                const li4 = createElement("li", { class: "hall_seat_legends_list_item" });
                {
                    const span5$1 = createElement("span", { class: `hall_seat_legends_list_item_color ${ele.toLowerCase()}` });
                    const span5$2 = createElement("span", { class: `hall_seat_legends_list_item_text` });
                    span5$2.innerHTML = ele;
                    li4.append(span5$1, span5$2);
                }
                ul3.append(li4);
            });
            div2$3.append(ul3);
        }
        const div2 = Navigation();
        div2.append(div2$3);

        div1.append(div2,div2$1, div2$2);
    }

    return div1;



}