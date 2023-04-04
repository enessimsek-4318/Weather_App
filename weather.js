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
const cityList=document.querySelector("section.ajax-section ul.cities")
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
    //console.log(url);
    //--
    try {
        const response = await fetch(url).then(response => response.json());
        //const response = await axios(url);
        //console.log(response);
        //obj destr.
        const { main, sys, weather, name } = response;
        //--
        //--
        const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        //--
        const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
        //--
        //--
        const cityNameSpans = cityList.querySelectorAll(".city span");
        //--
        const cityNameSpansArray = Array.from(cityNameSpans);
        //--
        if (cityNameSpansArray.length > 0) {
            //--
            const filteredArray = cityNameSpansArray.filter(
            (span) => span.innerText == name
            );
            //--
          if (filteredArray.length > 0) {
            //----------
            message.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
            //----------
            setTimeout(() => {
                message.innerText = "";
            }, 5000);
            //--
            form.reset();
            //--
            return;
          }
        }
        //console.log(cityNameSpans);
        const createdLi = document.createElement("li");
        //--
        createdLi.classList.add("city");
        //--
        createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">
                                    <span>${name}</span>
                                    <sup>${sys.country}</sup>
                                </h2>
                                <div class="city-temp">${Math.round(
                                  main.temp
                                )}<sup>°C</sup></div>
                                <figure>
                                    <img class="city-icon" src="${iconUrl}">
                                    <figcaption>${
                                      weather[0].description
                                    }</figcaption>
                                </figure>`;
        //append vs. prepend
        cityList.prepend(createdLi);
    
        //Capturing
        createdLi.addEventListener("click", (e)=>{
            //--
            if(e.target.tagName == "IMG"){
                //--
                e.target.src = (e.target.src == iconUrl) ? iconUrlAWS : iconUrl;
                //--
            }
        });
        //--------------------------------------------------------------------------
        //Bubbling
        // createdLi.addEventListener("click", (e)=>{
        //     alert(`LI element is clicked!!`);
        //     
        // });
        // createdLi.querySelector("figure").addEventListener("click", (e)=>{
        //     alert(`FIGURE element is clicked!!`);
        //---------------------------------------------------------------------------

      } catch (error) {
        console.log(error);
        //--
        message.innerText = `404 (City Not Found)`;
        //--
        setTimeout(() => {
          message.innerText = "";
        }, 5000);
        //--
      }
      //----
      form.reset();
      //----
};
