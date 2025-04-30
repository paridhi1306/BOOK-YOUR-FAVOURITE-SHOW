import { createElement } from "../main.js";







export function TheaterHallSection(sectionMatrix, price, cart, handleGrandTotal) {
    cart[price] = [];
    const div1 = createElement("div", { class: "hallview_section" });
    {
        sectionMatrix.forEach((row, idx) => {
            const div2 = createElement("div", { class: `hallview_section_row` })
            {
                row.forEach((column, idx) => {
                    const div3 = createElement("div", { class: `hallview_section_column ${column.class}` })
                    {
                        const div4 = createElement("div", { class: `hallview_section_seat` })
                        div4.innerHTML = column.value;
                        div3.append(div4);
                        div3.addEventListener("click", () => {
                            if(div3.classList.contains("reserved")){
                                return;
                            }
                            if (div3.classList.contains("selected")) {
                                div3.classList.remove("selected");
                                var index = cart[price].indexOf(column.value);
                                if (index !== -1) {
                                    cart[price].splice(index, 1);
                                }
                                handleGrandTotal(cart);
                                return;
                            }
                            div3.classList.add("selected");
                            cart[price].push(column.value);
                            handleGrandTotal(cart);
                        });
                    }
                    div2.append(div3);

                });
            }
            div1.append(div2);
        });
    }



    return div1;


}