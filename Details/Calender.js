import { Carousel } from "../Carousel/Carousel.js";
import { createElement, x1000, x500, x700 } from "../main.js";


export function Calender(handleTheater) {
    const arr = [];
    const date = new Date();
    let currSelected;
    Array(21).fill(-1).forEach((ele, idx) => {
        const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const div1 = createElement("div", { class: "calender" });
        {
            const div2 = createElement("div", idx ? { class: "calender_container", id: idx } : { class: "calender_container selected", id: idx });
            {
                const div3 = createElement("div", { class: "calender_container_inner" });
                {
                    const span4$1 = createElement("span", { class: "calender_container_date" });
                    span4$1.innerHTML = date.getDate();
                    const span4$2 = createElement("span", { class: "calender_container_weekday" });
                    span4$2.innerHTML = weekDay[date.getDay()];
                    div3.append(span4$1, span4$2);
                }
                div2.append(div3);

            }
            !idx && (currSelected = div2)
            div1.append(div2);

        }
        arr.push(div1);
        date.setDate(date.getDate() + 1);



        div1.addEventListener("click", (e) => {
            let idx = 0;
            if (e.target.classList.contains("calender_container")) {
                const handle = e.target;
                currSelected?.classList.remove("selected");
                handle.classList.add("selected");
                currSelected = handle;
                idx = handle.id - 0;
            }

            if (e.target.closest(".calender_container")) {
                const handle = e.target.closest(".calender_container");
                currSelected?.classList.remove("selected");
                handle.classList.add("selected");
                currSelected = handle;
                idx = handle.id - 0;

            }

            if (currSelected?.classList.contains("selected")) {
                handleTheater(idx);
            }
        });
    });

    const div1 = createElement("div", { class: "row" });
    {
        const div2$1 = createElement("div", { class: "header" });
        {
            const h3$1 = createElement("h3", { class: "title" });
            h3$1.innerHTML = "Calender";
            div2$1.append(h3$1);
        }
        const div2$2 = createElement("div", { class: "calender_wrapper" });
        {
            div2$2.append(...arr);

        }
        div1.append(div2$1, div2$2);
    }
    return div1;





}