const evoter_system_login = document.querySelector(".evoter_system_login");
evoter_system_login.style.height = window.innerHeight+"px";
const login_link = document.getElementById("login_link");
const register_button = document.getElementById("register_button");
const evoter_registration_form = document.querySelector(".evoter_registration_form");
const evoter_login_form = document.querySelector(".evoter_login_form");
const logo_refresh = document.getElementById("logo_refresh");
const registration_form_arithmetic_test = document.getElementById("registration_form_arithmetic_test");
const login_arithmetic_test = document.getElementById("login_arithmetic_test");
const male_gender = document.getElementById("male_gender");
const female_gender = document.getElementById("female_gender");
const other_gender = document.getElementById("other_gender");
const submit_registration_form = document.getElementById("submit_registration_form");
const selected_country = document.getElementById("selected_country");
const register_fullname = document.getElementById("register_fullname");
const register_id_number = document.getElementById("register_id_number");
const register_age = document.getElementById("register_age");
const register_county = document.getElementById("register_county");
const register_telephone = document.getElementById("register_telephone");
const register_email = document.getElementById("register_email");
const register_password = document.getElementById("register_password");
const register_confirm_password = document.getElementById("register_confirm_password");
const register_sum_result = document.getElementById("register_sum_result");
const registration_send_code =document.getElementById("registration_send_code");
const register_verification_code = document.getElementById("register_verification_code");
const inputs_ = document.querySelectorAll("input");
const register_file = document.getElementById("register_file");
const register_img_overview =document.getElementById("register_img_overview");
const uploaded_img_name = document.querySelector(".uploaded_img_name");
const caution_sound =document.getElementById("caution_sound");
const registration_form = document.getElementById("registration_form");

//////////////////////////////////
inputs_.forEach((v)=>{
    v.autocomplete="off";
})

//////////////////////////////////

