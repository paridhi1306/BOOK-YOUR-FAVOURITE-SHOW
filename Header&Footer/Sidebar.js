import { bell, ticket, gift } from "../api.js";
import { App } from "../App/App.js";
import { createElement, root } from "../main.js";






export function Sidebar() {

    function renderLogin(){
        root.replaceChild(App("login"),root.children[0]);
    }
    
    const div1 = createElement("div", { class: "sidebar" });
    {
        const div2$1 = createElement("div", { class: "sidebar_row_1" });
        {
            div2$1.innerHTML = "Hey!"
        }
        const div2$2 = createElement("div", { class: "sidebar_row_2" });
        {
            const a3 = createElement("a", { class: "sidebar_row_2_link"});
            {
                const div4 = createElement("div", { class: "sidebar_row_2_link_gift" });
                {
                    const div5$1 = createElement("div", { class: "sidebar_row_2_link_gift_icon" });
                    {
                        div5$1.innerHTML = gift;
                    }
                    const div5$2 = createElement("div", { class: "sidebar_row_2_link_gift_text" });
                    {
                        div5$2.innerHTML = "Unlock special offers and great benifits!";
                    }
                    const div5$3 = createElement("div", { class: "sidebar_row_2_link_gift_text_login" });
                    {
                        div5$3.innerHTML = "Login/Register";
                    }
                    div4.append(div5$1, div5$2, div5$3);
                }

                a3.append(div4);
                a3.addEventListener("click",renderLogin);

            }

            div2$2.append(a3);
        }
        const div2$3 = createElement("div", { class: "sidebar_row_3" });
        {
            const ul3 = createElement("ul", { class: "sidebar_row_3_list" });
            {
                const arr = [[{ tag: "div", attr: { class: "sidebar_row_3_list_item_left" }, text: bell }, { tag: "div", attr: { class: "sidebar_row_3_list_item_right" }, text: "Notifications" }], [{ tag: "div", attr: { class: "sidebar_row_3_list_item_left" }, text: ticket }, { tag: "div", attr: { class: "sidebar_row_3_list_item_right" }, text: "Your Orders" }]];
                arr.forEach((ele) => {
                    const li4 = createElement("li", { class: "sidebar_row_3_list_item" });
                    {
                        const a5 = createElement("a",{class:"sidebar_row_3_list_item_link",href:"index.html"});
                        {
                            ele.forEach((obj) => {
                                const childs = createElement(obj.tag, { ...obj.attr });
                                childs.innerHTML = obj.text;
                                a5.append(childs);
                            });
                            li4.append(a5);
                        }
                    }
                    ul3.append(li4);
                });
            }
            div2$3.append(ul3);
        }
        div1.append(div2$1, div2$2, div2$3);
    }



    return div1;


}