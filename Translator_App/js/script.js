const selectTag = document.querySelectorAll("select");

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
})