import { App } from "./App/App.js";

export const root = document.getElementById("root");


export var x500 = window.matchMedia("(max-width: 500px)");
export var x700 = window.matchMedia("(max-width: 700px)");
export var x1000 = window.matchMedia("(max-width: 1000px)");

x500.matches;
x700.matches;
x1000.matches;

export var context = { carousol: [] };

export function handleCarousel(itemPerScreen,useFor) {
    context.carousol.forEach((obj) => {
        if (obj.useFor == useFor) {
            let arr = [];
            Array(Math.ceil(obj?.length / itemPerScreen)).fill(-1).forEach((ele, idx) => {
                const div4 = createElement("div", { class: "progress-item" });
                if (idx == obj?.index) {
                    div4.classList.add("active");
                }
                arr[idx] = div4;
            });
            obj?.slider.style.setProperty('--items-per-screen', itemPerScreen);
            obj.arrOfBarNodes = arr;
            obj?.progressBar.replaceChildren(...arr);

        }

    });

}

x1000.addListener(() => {
    console.log("max");
    if (x1000.matches) {
        handleCarousel(4,"catalog");
    } else {
        handleCarousel(5,"catalog");
    }
});


x700.addListener(() => {
    if (x700.matches) {
        handleCarousel(3,"catalog");
    } else {
        handleCarousel(4,"catalog");
    }
});

x500.addListener(() => {
    if (x500.matches) {
        handleCarousel(2,"catalog");
    } else {
        handleCarousel(3,"catalog");
    }
});



root.append(App("home"));

export function createElement(tag, attr = {}) {
    const ele = document.createElement(tag);
    for (const key in attr) {
        if (key === "className") {
            ele.setAttribute("class", attr[key]);
            continue;
        }
        ele.setAttribute(key, attr[key]);
    }

    return ele;
}

