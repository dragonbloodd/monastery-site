function loadData() {
    let news = JSON.parse(localStorage.getItem("news")) || [];
    let schedule = localStorage.getItem("schedule") || "Нет данных";
    let charity = localStorage.getItem("charity") || "Нет данных";

    let newsList = document.getElementById("news-list");
    newsList.innerHTML = "";

    news.forEach(n => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerText = n;
        newsList.appendChild(div);
    });

    document.getElementById("schedule-text").innerText = schedule;
    document.getElementById("charity-text").innerText = charity;
}

loadData();