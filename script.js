document.querySelector(".chatbot").addEventListener("click", toggle);
var count = 0;
function toggle() {
  if (count == 0) {
    document.querySelector(".displaychat").classList.remove("hide");
    console.log("open");
    document.querySelector(".apples").src = "close.png";
    gsap.from(".displaychat", {
      opacity: 1,
      duration: 0.5,
      scale: 1,
    });
    count = 1;
  } else {
    document.querySelector(".displaychat").classList.add("hide");
    console.log("hello");
    document.querySelector(".apples").src =
      "https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg";
    gsap.from(".displaychat", {
      opacity: 0,
      duration: 0.5,
      scale: 0,
    });
    console.log("close");
    count = 0;
  }
}

function append() {
  // var outgoing = document.querySelector(".chat-outgoing");
  var unorderdlist = document.querySelector(".unorderlist");

  let inputvalue = document.querySelector(".inputbox input").value;
  console.log(inputvalue);
  let createli = document.createElement("li");
  let createpara = document.createElement("p");
  createpara.textContent = inputvalue;
  createli.classList.add("chat-outgoing");
  createli.appendChild(createpara);
  unorderdlist.appendChild(createli);
  document.querySelector(".inputbox input").value = "";
}

document.getElementById("send").addEventListener("click", append);

document.getElementById("inputs").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("send").click();
    console.log(event);
  }
});

function popup() {
  console.log("popup");
  document.querySelector(".popup").classList.remove("hide");

  gsap.from(".popup", {
    opacity: 0,
    duration: 0.5,
  });
}

function notnow() {
  document.querySelector(".popup").classList.add("hide");
}

function send() {
  document.querySelector(".message").classList.remove("hide");

  emailjs.send("service_ifawg9k", "template_emijfb7", {
    to_name: "no-reply@apple.com",
    from_name: document.getElementById("email").value,
    message: "user wants a update for apple vision pro",
  });
  console.log(document.getElementById("email").value);
  document.getElementById("email").value = "";

  gsap.to(".message", {
    opacity: 1,
    duration: 0.5,
    scale: 1,
  });

  setTimeout(() => {
    document.querySelector(".message").classList.add("hide");
  }, 3000);

  document.querySelector(".popup").classList.add("hide");
}

document.querySelector("#closedcontent").addEventListener("click", close);

function close() {
  console.log("close");
  document.querySelector(".message").classList.add("hide");
}

setTimeout(() => {
  document.querySelector(".popup").classList.remove("hide");
}, 10000);

let isonline = true;
const checkconnection = async function () {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    isonline = response.status >= 200 && response.status < 300;
    // console.log(response);
  } catch (error) {
    console.log(error);
    isonline = false;
  }
  handlepopup(isonline);
};

function handlepopup(status) {
  if (status) {
    document.querySelector(".internetconnection").style.visibility = "hidden";
    console.log(status);
  } else {
    document.querySelector(".internetconnection").style.visibility = "visible";
    console.log(status);
  }
}

async function reconnect() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    isonline = response.status >= 200 && response.status < 300;
    // console.log(response);
  } catch (error) {
    console.log(error);
    isonline = false;
  }
  handlepopup(isonline);
}

setInterval(checkconnection, 2000);

setTimeout(() => {
  document.getElementById("vids").play();
}, 2000);
