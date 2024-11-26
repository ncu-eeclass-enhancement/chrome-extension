chrome.cookies.get({ name: "account", url: "https://ncueeclass.ncu.edu.tw" }, (cookie) => {
  if (cookie && cookie.value) {
    console.log(cookie);
  }
});