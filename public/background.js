chrome.cookies.get({ name: "account", url: "https://ncueeclass.ncu.edu.tw" }, (cookie) => {
  console.log(cookie.value);
});