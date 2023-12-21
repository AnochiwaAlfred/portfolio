portfolio = {
    okwukweStitches: {
        category: "Ecommerce & Graphics",
        client: "OkwukweStitches",
        date: "web",
        url: "https://github.com/AnochiwaAlfred/okwukweStitchedIT",
        contextTitle: "OkwukweStitches",
        context: "OkwukweStitches is a wool clothing line that specializes in crafting unique and high-quality stitched products. From cozy sweaters to stylish accessories, each piece is meticulously designed to provide comfort and fashion."
    },
    stechad: {
        category: "Graphics",
        client: "Stechad",
        date: "web",
        url: "https://www.instagram.com/stechad20/",
        contextTitle: "Stechad Inc",
        context: "Stechad Inc is a dynamic tech company that leverages cutting-edge technology to deliver innovative solutions. From graphic design to software engineering, Stechad is committed to pushing the boundaries of what's possible."
    },
    taskMaster: {
        category: "web",
        client: "Open Source",
        date: "web",
        url: "https://github.com/AnochiwaAlfred/toDoApp",
        contextTitle: "TaskMaster To Do App",
        context: "TaskMaster is an open-source to-do app designed to help users manage their tasks efficiently. With a clean and intuitive interface, TaskMaster simplifies task organization and enhances productivity."
    },
    justBraids: {
        category: "Graphics",
        client: "Just Braids",
        date: "web",
        url: "",
        contextTitle: "Just Braids",
        context: "Just Braids is a hair stylist business dedicated to creating stunning and unique hairstyles. With a team of skilled stylists, they offer personalized services to enhance the natural beauty of their clients."
    },
    pings: {
        category: "web",
        client: "Open Source",
        date: "web",
        url: "https://github.com/AnochiwaAlfred/pings",
        contextTitle: "Pings Chat App",
        context: "Pings is an open-source chat app designed to facilitate seamless communication. Whether for personal or professional use, Pings provides a reliable and user-friendly platform for connecting with others."
    },
    spotiPy: {
        category: "web",
        client: "Open Source",
        date: "web",
        url: "https://github.com/AnochiwaAlfred/spotipyBackend",
        contextTitle: "Spotipy Music App",
        context: "Spotipy is an open-source music app that brings the joy of music discovery to users. With its intuitive features, Spotipy allows users to explore and enjoy their favorite tunes while providing a platform for new musical experiences."
    }
}


function callDetailsPage(event) {
    category = portfolio[event].category
    client = portfolio[event].client
    date = portfolio[event].date
    url = portfolio[event].url
    contextTitle = portfolio[event].contextTitle
    context = portfolio[event].context

    window.location = `${event}.html`;


    // infoCon=document.createElement('div')
    // infoCon.className="portfolio-info"

    // h3 = document.createElement('h3')

    // h3.innerHTML = "Project information"

    // ul=document.createElement('ul')

    // li1 = document.createElement("li")
    // strong1 = document.createElement("strong")
    // strong1.innerHTML = "Category: "
    // span1 = document.createElement("span")
    // span1.id="port-category"
    // span1.innerHTML = category
    // li1.appendChild(strong1)
    // li1.appendChild(span1)

    // li2 = document.createElement("li")
    // strong2 = document.createElement("strong")
    // strong2.innerHTML = "Client: "
    // span2 = document.createElement("span")
    // span2.id="port-client"
    // span2.innerHTML = client
    // li2.appendChild(strong2)
    // li2.appendChild(span2)

    // li3 = document.createElement("li")
    // strong3 = document.createElement("strong")
    // strong3.innerHTML = "Project Date: "
    // span3 = document.createElement("span")
    // span3.id="port-date"
    // span3.innerHTML = date
    // li3.appendChild(strong3)
    // li3.appendChild(span3)

    // li4 = document.createElement("li")
    // strong4 = document.createElement("strong")
    // strong4.innerHTML = "Project URL: "
    // a = document.createElement("a")
    // a.id="port-url"
    // a.setAttribute("href", url)
    // span4 = document.createElement("span")
    // span4.id="port-url-text"
    // span4.innerHTML = url
    // a.appendChild(span4)
    // li4.appendChild(strong4)
    // li4.appendChild(a)

    
    // ul.appendChild(li1)
    // ul.appendChild(li2)
    // ul.appendChild(li3)
    // ul.appendChild(li4)

    // infoCon.appendChild(h3)
    // infoCon.appendChild(ul)

    // description = document.createElement("div")
    // description.className="portfolio-description"

    // title = document.createElement("h2")
    // title.innerHTML=contextTitle
    // title.id="port-content-title"

    // contentTexts = document.createElement("p")
    // contentTexts.innerHTML=context
    // contentTexts.id="port-content"

    // description.appendChild(title)
    // description.appendChild(contentTexts)

    // window.location = "portfolio-details.html";
    // containerDeets = document.getElementById("port-deets")
    // containerDeets.appendChild(infoCon)
    // containerDeets.appendChild(description)
    // location.reload();
}

