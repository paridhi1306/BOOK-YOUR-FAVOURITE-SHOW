import { database } from "../api.js";
import { Calender } from "./Calender.js";
import { Carousel } from "../Carousel/Carousel.js";
import { context, createElement, x1000, x500, x700 } from "../main.js";
import { Theaters } from "./Theaters.js";









export function Details() {
    context.carousol = [];


    const theaters_info = [["Ariesplex SL Cinemas-1", "Carnival: Artech Mall,Trivandrum", "Carnival: Greenfield,Trivandrum", "Carnival: Mall Of Travancore (Red Carpet)"]];

    Array(20).fill(-1).forEach((ele,idx)=>{
        const arr = [`Ariesplex SL Cinemas-${idx+2}`, "Carnival: Artech Mall,Trivandrum", "Carnival: Greenfield,Trivandrum", "Carnival: Mall Of Travancore (Red Carpet)"];
        theaters_info.push(arr);
    });

    function handleTheater(idx) {
        div2$4.replaceChild(Theaters(theaters_info[idx]), div2$4.children[0]);
    }
    const div1 = createElement("div", { class: "details" });
    {
        const div2$1 = createElement("div", { class: "details_banner" });
        {
            const div3 = createElement("div", { class: "details_banner_wrapper" });
            {
                const video4 = createElement("video", {
                    controls: "true",
                    autoplay: "autoplay",
                    muted: "",
                    class: "details_banner_wrapper_video",
                    poster: "images/Poster/Indiana-Jones5.avif"
                });
                {
                    const source5$1 = createElement("source", { type: "video/mp4", src: "src/videos/101.mp4" });
                    const source5$2 = createElement("source", { type: "video/ogg", src: "src/videos/101.mp4" });

                    video4.append(source5$1, source5$2);
                }
                div3.append(video4);
            }
            div2$1.append(div3);
        }
        const div2$2 = createElement("div", { class: "details_info" });
        {
            const div3 = createElement("div", { class: "details_info_container" });
            {
                const div4$1 = createElement("div", { class: "details_info_container_description" });
                {
                    const div5$1 = createElement("div", { class: "details_info_container_description_tags" });
                    {
                        const arr = ["Action", "Crime", "Drama"];
                        const ul6$1 = createElement("ul", { class: "details_info_container_description_tags_list" });
                        {
                            arr.forEach((ele) => {
                                const li7 = createElement("li", { class: "details_info_container_description_tags_list_item" });
                                li7.innerHTML = ele;
                                ul6$1.append(li7);
                            });
                        }
                        const div6$2 = createElement("div", { class: "details_info_container_description_text" });
                        {
                            div6$2.innerHTML = "Experience the return of legendary hero, Indiana Jones, in the fifth installment of this beloved swashbuckling series of films. Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.";
                        }
                        div5$1.append(ul6$1, div6$2);
                    }

                    const div5$2 = createElement("div", { class: "details_info_container_description_creators" });
                    {
                        const h6$1 = createElement("h3", { class: "details_info_container_description_creators_heading" });
                        h6$1.innerHTML = "Creators";
                        const ul6$2 = createElement("ul", { class: "details_info_container_description_creators_list" });
                        {
                            const arr = ["Jez Butterworth", "Jez Butterworth", "Philip Kaufman"];
                            arr.forEach((ele) => {
                                const li7 = createElement("li", { class: "details_info_container_description_creators_list_item" });
                                li7.innerHTML = ele;
                                ul6$2.append(li7);
                            });
                        }
                        div5$2.append(h6$1, ul6$2);

                    }
                    const div5$3 = createElement("div", { class: "details_info_container_description_stars" });
                    {
                        const h6$1 = createElement("h3", { class: "details_info_container_description_creators_heading" });
                        h6$1.innerHTML = "Stars";
                        const ul6$2 = createElement("ul", { class: "details_info_container_description_creators_list" });
                        {
                            const arr = ["Harrison FordBoyd", "Holbrook Antonio", "Banderas"];
                            arr.forEach((ele) => {
                                const li7 = createElement("li", { class: "details_info_container_description_creators_list_item" });
                                li7.innerHTML = ele;
                                ul6$2.append(li7);
                            });
                        }
                        div5$3.append(h6$1, ul6$2);
                    }
                    const div5$4 = createElement("div", { class: "details_info_container_description_misc" });
                    {
                        div5$4.innerHTML = "See production, box office & company info";
                        const span6 = createElement("span", { class: "details_info_container_description_misc_span" });
                        span6.innerHTML = `<svg width="0.8rem" height="0.8rem" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--launch-inline ipc-icon--inline pro-upsell__icon" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg>`
                        div5$4.append(span6);
                    }
                    div4$1.append(div5$1, div5$2, div5$3, div5$4);

                }
                const div4$2 = createElement("div", { class: "details_info_container_rating" });
                {

                }
                div3.append(div4$1, div4$2);
            }
            div2$2.append(div3);
        }
        const div2$3 = createElement("div", { class: "details_calender" });
        {
            div2$3.append(Calender(handleTheater));
        }

        var div2$4 = createElement("div", { class: "details_theaters" });
        {
            div2$4.append(Theaters(theaters_info[0]));
        }
        const div2$5 = createElement("div", { class: "details_catalog" });
        {
            let bannerArr = [{ title: "Recently Watch", moviesList: database }, { title: "You May Also Like", moviesList: database }];
            bannerArr.forEach((ele) => {
                const div3 = createElement("div", { class: "catalog_wrapper" });
                {
                    const arr = [];
                    ele.moviesList.forEach((movie, idx) => {
                        const div = createElement("div");
                        const img = createElement("img", { src: movie.imgUrl, id: idx });
                        div.append(img);
                        arr.push(div);
                    });
                    //never assign one nodes to two differen parent
                    if(x500.matches){
                        div3.append(Carousel(ele.title, arr,2,arr.length,"catalog"));
                    }else if(x700.matches){
                        div3.append(Carousel(ele.title, arr,3,arr.length,"catalog"));
                    }else if(x1000.matches){
                        div3.append(Carousel(ele.title, arr,4,arr.length,"catalog"));
                    }else{
                        div3.append(Carousel(ele.title, arr,5,arr.length,"catalog"));
                    };
                }
                div2$5.append(div3);

            });
        }
        div1.append(div2$1, div2$2, div2$3, div2$4, div2$5);
    }

    return div1;
}