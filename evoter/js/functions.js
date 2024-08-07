
function caution(string) {
    var caution_container = document.createElement("div");
    caution_container.setAttribute("class","caution_container");
    caution_container.style.display = "flex";
    var aud = document.createElement("audio");
    aud.src="/evoter/js/beep-warning-6387.mp3"
    aud.autoplay=true;
    document.body.append(aud)
    aud.play();
    var caution = document.createElement("div");
    caution.setAttribute("class","caution");
    var sp = document.createElement("span");
    sp.innerHTML = "&#9888;"
    caution.append(sp);
    caution.innerHTML += string;
    var bt = document.createElement("button");
    bt.setAttribute("id","close_caution");
    bt.textContent="Close";
    bt.onclick = ()=>{
        caution_container.style.display="none";
    }
    caution.append(bt);
    caution_container.append(caution);
    document.body.append(caution_container);
   
}
function notify(string) {
    var notify_container = document.createElement("div");
    notify_container.setAttribute("class","notify_container");
    notify_container.style.display = "flex";
    var aud = document.createElement("audio");
    aud.src="/evoter/js/618f3287-new_facebook_ringtone_7.m4a"
    aud.autoplay=true;
    document.body.append(aud)
    aud.play();
    var notify = document.createElement("div");
    notify.setAttribute("class","notify");
    var sp = document.createElement("span");
    sp.innerHTML = "&#10004;"
    notify.append(sp);
    notify.innerHTML += string;
    var bt = document.createElement("button");
    bt.setAttribute("id","close_notify");
    bt.textContent="Close";
    bt.onclick = ()=>{
        notify_container.style.display="none";
    }
    notify.append(bt);
    notify_container.append(notify);
    document.body.append(notify_container);
   
}

/**
 * 
 * @param {HTMLelement} a 
 * @param {HTMLelement} b 
 * @param {HTMLelement} c
 * @param {HTMLelement} d 
 */


function register(a) {
    a.addEventListener("click",()=>{
        window.location.href="http://"+window.location.host+"/evoter/registration/";
    });
}
function login_page() {
    window.location.href="http://"+window.location.host+"/evoter/login/";
}

function refresh() {
    window.location.reload();
}
//generating random mathematics
var c;
var d;
function generate_rand_math(e){
    
    var a = Math.floor(Math.random()*100)
    var b =Math.floor(Math.random()*100);
    if (a>b) {
        c=(a-b).toString();
        d = `${a}-${b}=`
    }else{
        c = (a+b).toString();
        d = `${a}+${b}=`
    }
    
    e.innerHTML=d;
}

 
var randCode = Math.floor(Math.random()*1000000).toString();
function generateRandomCode(n) {
    const codeLength = Math.pow(10,n);
    setInterval(() => {
        randCode = Math.floor(Math.random()*codeLength).toString();
    }, 3600000);
    notify("Your verification code is "+randCode);
}
//function for uploading images
var image_data;
var image_type;
function upload_photo(a,b,c) {
    b.src=localStorage.getItem("uploaded_img");
    c.textContent = localStorage.getItem("uploaded_img_name");
    a.addEventListener("change",()=>{
        const reader = new FileReader();
        const input_file = a.files[0];
       reader.readAsDataURL(input_file);
       if (input_file.size>4000000) {
        caution("Image is too large. The maximum should be 4mbs")
       }else{
        reader.addEventListener("load",(e)=>{
            localStorage.setItem("uploaded_img",reader.result);
            c.textContent = input_file.name;
            localStorage.setItem("uploaded_img_name",input_file.name);
            b.src = reader.result
            console.log(e.target.result);
        })
       }
    })  
}
// image_data = localStorage.getItem("uploaded_img").split(",")[1];
// image_type = localStorage.getItem("uploaded_img").split(",")[0];
//this is the function that validates the evoter registration form
var gen;
var details;
function validate_registration_details(name,id,age,county,gender1,gender2,gender3,coutrycode,tel,email,password,confirm,sumtest,sendcode,code,submit,file_name) {
        //sending the verification code
    sendcode.addEventListener("click",()=>{
        generateRandomCode(6);
    });
    
    submit.addEventListener("click",()=>{
        //checking the gender
        if (gender1.checked==true) {
            gen = "Male";
        }else if (gender2.checked==true) {
            gen = "Female"
        }else if (gender3.checked==true) {
            gen = "Other";
        }else{
            gen="Empty";
        }
        //details to be uploaded to the server.
        details ={
            "name":name.value,
            "id":id.value,
            "age":age.value,
            "county":county.value,
            "gender":gen,
            "country_code":coutrycode.value.toString(),
            "mobile_num":tel.value.toString(),
            "tel":coutrycode.value.toString()+tel.value.toString(),
            "email":email.value,
            "password":password.value,
            "confirm":confirm.value,
            "sumtest":sumtest.value,
            "code":code.value,
            "file_name":file_name.textContent,
            "image_data":localStorage.getItem("uploaded_img").split(",")[1],
            "image_type":localStorage.getItem("uploaded_img").split(",")[0]
        };
        //checking each field in the registration form
        if (details.name == "") {
            caution("Name invalid");
        }
        else if (details.id == "") {
            caution("Id not valid");
        }
        else if (details.age == "") {
            caution("Age  invalid");
        }
        else if (details.county == "") {
            caution("County invalid");
        }
        else if (details.gender == "Empty") {
            caution("Please select you gender");
        }
        else if (details.mobile_num.length < 9) {
            caution("Mobile number incomplete");
        }
        else if (details.mobile_num.startsWith("0")) {
            var new_tel=tel.value.slice(1);
            tel.value=new_tel;
        }
        else if (details.email == "" || details.email.invalid) {
            caution("Email appears to be irrelevant");
        }
        else if (details.password == "") {
            caution("Please input your password");
        }
        else if (details.confirm !== details.password) {
            caution("Password not identical");
        }
        else if (details.sumtest !== c) {
            caution("Arithmetic test incorrect");
        }
        else if (details.code!==randCode) {
            caution("Code not valid. Please click on send code button to get your verification code");
        }
        else if (details.upload == "") {
            caution("Please upload your photo");
        }
        else{
            notify("Everything is fine");
            console.log(details);
        }

    });
}
//this is the function that validates login details
function validate_login_details(voters_id,password,result,sendcode,code,submit) {
    
}

//function for displaying the country codes before the telephone inputs
function display_flags(a) {
    fetch("/evoter/json/codes.json",{
        method:"get"
    }).then((res)=>{
        if (!res.ok) {
            console.log("There occured an error while fetching the flags");
        }
        return res.json();
    }).then((data)=>{
        data.countries.map((v)=>{
            var option=document.createElement("option");
            option.innerHTML=v.telephone_code;
            option.title = v.name;
            option.style.color="black";
            a.append(option);
        });
        console.log(a);
    })
}