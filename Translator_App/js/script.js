const fromText = document.querySelector(".from-text");
const selectTag = document.querySelectorAll("select");
translateBtn = document.querySelector("button");




selectTag.forEach((tag,id) =>{
  for(const country_code in countries){
 //console.log(countries[country_code]);
 //selecting english by default as FROM language and Hindi as TO language
 let selected;
if(id == 0 && country_code=='en-GB'){
  selected = "selected"
}
else if(id==1 && country_code == 'hi-IN'){
  selected = "selected";
}
 let option = `<option value="${country_code}"${selected}>${countries[country_code]}</option>`;
 tag.insertAdjacentHTML("beforeend",option)//adding option tag inside select tag
  }
});

translateBtn.addEventListener("click",()=>{
let text = fromText.value,
translateFrom = selectTag[0].value, //getting from select tagvalue
translateTo = selectTag[1].value;
//console.log(text, translateFrom, tranlateTo);
let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`; //api fetch
//fetching api response and returning it with parsing into js object
//and in another method rescevingg the object
fetch(apiUrl).then(res=>res.json()).then(data=>{
  console.log(data);
})
});
