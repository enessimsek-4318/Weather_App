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
//--
//--
localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("ade3838013823e9c58411a1cf608a05b"));
//--
//--
form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherDataFromApi();
  });
//--
//--
//! API GET
const getWeatherDataFromApi=async ()=>{
    //alert("!!!!!!!!!")
    //--
    const token=DecryptStringAES(localStorage.getItem("tokenKeyEncrypted"));
    //alert(token);
    //--
    const inputCity=cityInput.value;
    //--
    const units="metric";
    //--
    const lang="tr";
    //--
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${token}&units=${units}&lang=${lang}`;
    console.log(url);
};
