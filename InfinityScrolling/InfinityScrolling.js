import { Details } from "../Details/Details.js";
import { createElement } from "../main.js";







export function InfinityScrolling(database,renderDetails) {
    const div1 = createElement("div", { class: "Infinity_scrolling" });

    const arr = database;
    const div2 = createElement("div", { class: "Infinity_scrolling_wrapper" });
    {
        arr.forEach((ele) => {
            const div3 = createElement("div", { class: "Infinity_scrolling_wrapper_component" });
            {
                const img4$1 = createElement("img", { class: "Infinity_scrolling_wrapper_component_image",src:ele.imgUrl });
                {

                }
                div3.append(img4$1);
            }
            div2.append(div3);

        })
        div2.addEventListener("click",(e)=>{
            if(e.target.classList.contains("Infinity_scrolling_wrapper_component")){
                console.log("details");
                renderDetails(Details());

            }else if(e.target.closest(".Infinity_scrolling_wrapper_component")){
                renderDetails(Details());
                console.log("details1");

                
            }
            
        });

    }
    div1.append(div2);

    return div1;
}