import { createElement } from "../main.js";
import { TheaterAddress } from "./TheaterAddress.js";




export function Theaters(theaters_info) {
    let selected;
    const arr = [[{title:"Platinum",price:420},{title:"Platinum",price:420},{title:"Platinum",price:420}]];

    Array(3).fill(-1).forEach((ele,idx)=>{
        arr.push([{title:"Platinum",price:420+idx},{title:"Platinum",price:420+idx},{title:"Platinum",price:420}]);
    });

    function handleAddress(idx){
        div2$2.replaceChild(TheaterAddress(theaters_info[idx],arr[idx]),div2$2.children[0]);
    }

    const div1 = createElement("div", { class: "theaters" });
    {
        const div2$1 = createElement("div", { class: "theaters_left" });
        {

            theaters_info.forEach((title,idx) => {
                const div3$1 = createElement("div", { class: "theaters_left_row" });
                {
                    const div4$1 = createElement("div", { class: "theaters_left_row_info" });
                    {
                        const div5$1 = createElement("div", { class: "theaters_left_row_info_name" });
                        {
                            div5$1.innerHTML = title;
                        }
                        const ul5$2 = createElement("ul", { class: "theaters_left_row_info_service_list" });
                        {
                            const arr = ["https://www.webstrot.com/html/moviepro/html/images/content/fast-food.png", "https://www.webstrot.com/html/moviepro/html/images/content/bill.png"];
                            arr.forEach((ele) => {
                                const li6 = createElement("li", { class: "theaters_left_row_info_service_list_item" });
                                {
                                    const img7 = createElement("img", { class: "theaters_left_row_info_service_list_item_image", src: ele });
                                    li6.append(img7);
                                }
                                ul5$2.append(li6);
                            });
                        }
                        div4$1.append(div5$1, ul5$2);
                    }
                    const div4$2 = createElement("div", { class: "theaters_left_row_time" });
                    {
                        const ul5 = createElement("ul", { class: "theaters_left_row_time_list" })
                        const arr = ["09:30 AM", "12:30 PM", "03:00 PM", "06:00 PM"];
                        arr.forEach((ele) => {
                            const li6 = createElement("li", { class: "theaters_left_row_time_list_item" });
                            li6.innerHTML = ele;
                            li6.addEventListener("click",()=>{
                                if(selected == li6){
                                    handleAddress(0);
                                    selected?.classList.remove("selected");
                                    selected = null;
                                    return;
                                }
                                handleAddress(idx);
                                selected?.classList.remove("selected");
                                li6.classList.add("selected");
                                selected = li6;
                            });
                            ul5.append(li6);
                        });
                        div4$2.append(ul5);
                    }
                    div3$1.append(div4$1, div4$2);
                }
                div2$1.append(div3$1);
            });

        }
        var div2$2 = createElement("div",{class:"theaters_right"});
        {
            
            div2$2.append(TheaterAddress(theaters_info[0],arr[0]));

        }
        div1.append(div2$1,div2$2);

    }




    return div1;

}