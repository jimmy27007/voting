"use strict";

var evoter_system_login = document.querySelector(".evoter_system_login");
evoter_system_login.style.height = window.innerHeight + "px";
var login_link = document.getElementById("login_link");
var register_button = document.getElementById("register_button");
var evoter_registration_form = document.querySelector(".evoter_registration_form");
var evoter_login_form = document.querySelector(".evoter_login_form");
var logo_refresh = document.getElementById("logo_refresh");
var registration_form_arithmetic_test = document.getElementById("registration_form_arithmetic_test");
var login_arithmetic_test = document.getElementById("login_arithmetic_test");
var male_gender = document.getElementById("male_gender");
var female_gender = document.getElementById("female_gender");
var other_gender = document.getElementById("other_gender");
var submit_registration_form = document.getElementById("submit_registration_form");
var selected_country = document.getElementById("selected_country");
var register_fullname = document.getElementById("register_fullname");
var register_id_number = document.getElementById("register_id_number");
var register_age = document.getElementById("register_age");
var register_county = document.getElementById("register_county");
var register_telephone = document.getElementById("register_telephone");
var register_email = document.getElementById("register_email");
var register_password = document.getElementById("register_password");
var register_confirm_password = document.getElementById("register_confirm_password");
var register_sum_result = document.getElementById("register_sum_result");
var registration_send_code = document.getElementById("registration_send_code");
var register_verification_code = document.getElementById("register_verification_code");
var inputs_ = document.querySelectorAll("input");
var register_file = document.getElementById("register_file");
var register_img_overview = document.getElementById("register_img_overview");
var uploaded_img_name = document.querySelector(".uploaded_img_name");
var caution_sound = document.getElementById("caution_sound");
var registration_form = document.getElementById("registration_form"); //////////////////////////////////

inputs_.forEach(function (v) {
  v.autocomplete = "off";
}); //////////////////////////////////