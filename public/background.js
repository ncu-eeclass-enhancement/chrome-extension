function getCookies(domain, callback){
  chrome.cookies.getAll({ domain: domain }, function(cookies) {
    if(callback) {
      callback(cookies.value);
    }
  });
}

getCookies("https://ncueeclass.ncu.edu.tw", function(cookies){
  console.log(cookies);
})

chrome.cookies.get({"url": "https://ncueeclass.ncu.edu.tw", "name":"accout"}, function(cookie) {
  if(callback) {
      callback(cookie.value);
  }
});