import { createElement, root } from "../main.js";
import { App } from "../App/App.js";



export function Login(title) {
    function handleRegistration(){
        if(title == "Sign Up"){
            root.replaceChild(App("login"),root.children[0]);

        }else{
            root.replaceChild(App("signup"),root.children[0]);
        }
        
    }

    function handleAuth(){
        root.replaceChild(App("home"),root.children[0])

    }

    const div1 = createElement("div", { class: "login" });
    {
        const div2 = createElement("div", { class: "login_container" });
        {
            const h3$1 = createElement("h1", { class: "login_container_header" });
            h3$1.innerHTML = title;

            const div3$2 = createElement("div", { class: "login_container_inputs" });
            {
                let arr = [];

                (title == "Sign Up") && (arr = [[{ tag: "label", attr: { class: "login_container_inputs_label", for: "login_name" }, text: "Name" }, { tag: "input", attr: {class:"login_container_inputs_input", type: "text", placeholder: "Name", id: "login_name" }, text: "" }],
                [{ tag: "label", attr: { class: "login_container_inputs_label", for: "login_email" }, text: "Email" }, { tag: "input", attr: {class:"login_container_inputs_input", type: "email", placeholder: "Email", id: "login_email" }, text: "" }],
                [{ tag: "label", attr: { class: "login_container_inputs_label", for: "login_password" }, text: "Password" }, { tag: "input", attr: {class:"login_container_inputs_input", type: "password", placeholder: "Password", id: "login_password" }, text: "" }],
                [{ tag: "label", attr: { class: "login_container_inputs_label", for: "login_confirm_password" }, text: "Confirm Password" }, { tag: "input", attr: {class:"login_container_inputs_input", type: "password", placeholder: "Confirm Password", id: "login_confirm_password" }, text: "" }],
                ]);

                (title == "Log In") && (arr = [[{ tag: "label", attr: { class: "login_container_inputs_label", for: "login_email" }, text: "Email" }, { tag: "input", attr: {class:"login_container_inputs_input", type: "email", placeholder: "Email", id: "login_email" }, text: "" }],
                [{ tag: "label", attr: { class: "login_container_inputs_label", for: "login_password" }, text: "Password" }, { tag: "input", attr: {class:"login_container_inputs_input", type: "password", placeholder: "Password", id: "login_password" }, text: "" }],
                ]);

                const ul4 = createElement("ul",{class:"login_container_inputs_list"});
                arr.forEach(ele=>{
                    const li5 = createElement("li",{class:"login_container_inputs_list_item"});
                    ele.forEach(ele=>{
                        const child = createElement(ele.tag,{...ele.attr});
                        child.innerHTML = ele.text;
                        li5.append(child);
                    });

                    ul4.append(li5);
                });
                div3$2.append(ul4);
            }
            const div3$3 = createElement("div", { class: "login_container_button" });
            {
                const button4 = createElement("button",{class:"login_container_button_btn"});
                button4.innerHTML = title;
                div3$3.append(button4);
                button4.addEventListener("click",handleAuth);
            }
            const div3$4 = createElement("div", { class: "login_container_undertext" });
            {
                const span4$1 = createElement("span",{class:"login_container_undertext_span_1"});
                span4$1.innerHTML = (title == "Sign Up")?"Already have a account?":"Not register yet?";
                const span4$2 = createElement("span",{class:"login_container_undertext_span_2"});
                {
                    const a5 = createElement("a",{class:"login_container_undertext_span_2_link"});
                    a5.innerHTML = (title == "Sign Up")?"Log In":"Register Now";
                    span4$2.append(a5);
                    a5.addEventListener("click",handleRegistration);

                }
                div3$4.append(span4$1,span4$2);
            }
            div2.append(h3$1,div3$2,div3$3,div3$4);
        }
        div1.append(div2);
    }

    return div1;
}