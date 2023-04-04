//!------------------------------------------------------
//*------------------------------------------------------
// ------------------------------------------------------
//?------------------------------------------------------

const form=document.querySelector("section.top-banner form");
//--
const cityInput=document.querySelector(".container input");
//--
const message=document.querySelector("span.msg");
//--
const cityList=document.querySelector("section.ajax-section .cities")
//--
localStorage.setItem("tokenKey","");

alert("http request");
form.addEventListener("sumbit",(event)=>{
    event.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi=()=>{
    alert("http request");
};
