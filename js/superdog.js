const events = [{
        id: 1,
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 240000,
        date: "06/01/2017",
    }

    ,
    {
        id: 2,
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 250000,
        date: "06/01/2018",
    }

    ,
    {
        id: 3,
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 257000,
        date: "06/01/2019",
    }

    ,
    {
        id: 4,
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 130000,
        date: "06/01/2017",
    }

    ,
    {
        id: 5,
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 140000,
        date: "06/01/2018",
    }

    ,
    {
        id: 6,
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 150000,
        date: "06/01/2019",
    }

    ,
    {
        id: 7,
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 40000,
        date: "06/01/2017",
    }

    ,
    {
        id: 8,
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 45000,
        date: "06/01/2018",
    }

    ,
    {
        id: 9,
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 50000,
        date: "06/01/2019",
    }

    ,
];

//builds a list of distinct cities for our dropdown menu
function buildDropDown() {
    //interview question, how do you find
    //grabs the event drop down from the HTMl of citties we want to add to the dropdown
    let eventDD = document.getElementById("eventDropDown");
    eventDD.innerHTML = "";

    //load our links from a template.
    let ddTemplate = document.getElementById("cityDD-template");

    let curEvents = JSON.parse(localStorage.getItem("eventsArray")) || events;



    //this is the interview question, get a distinct list of cities by filtering the array
    let cities = curEvents.map((e) => e.city);
    //return a list of distinct cities

    let distinctCities = [...new Set(cities)];

    //use the drop down template
    //a tag within a tag in html is called a node, so by pulling it back it will be an html element
    let ddItemTemplate = document.importNode(ddTemplate.content, true);
    let li = ddItemTemplate.querySelector("li");
    let ddItem = ddItemTemplate.querySelector("a");
    ddItem.setAttribute("data-city", "ALL");
    ddItem.innerText = "ALL";
    eventDD.appendChild(li);

    for (let index = 0; index < distinctCities.length; index++) {
        let ddItemTemplate = document.importNode(ddTemplate.content, true);
        li = ddItemTemplate.querySelector("li");
        let ddItem = li.querySelector("a");
        ddItem.setAttribute("data-city", distinctCities[index]);
        ddItem.textContent = distinctCities[index];
        eventDD.appendChild(li);

    }

    //first you get the template from document. 2. import node 
    //display the stats
    displayStats(curEvents);
    displayData();
}

function displayStats(filteredEvents) {

    let total = 0;
    let average = 0;
    let most = 0;
    let least = -1;
    let currentAttendance = 0;


    for (let index = 0; index < filteredEvents.length; index++) {
        // gives me current attendance number
        currentAttendance = filteredEvents[index].attendance;
        total += currentAttendance;
        //24000 250000 257000
        if (most < currentAttendance) {
            most = currentAttendance;
        }

        if (least > currentAttendance || least < 0) {
            least = currentAttendance;
            //alternative method:
            //if (least == -1 || least > currentAttendance)
            //least = currentAttendance;
        }

        average = total / filteredEvents.length;
    }


    document.getElementById("total").innerHTML = total.toLocaleString();
    document.getElementById("most").innerHTML = most.toLocaleString();
    document.getElementById("least").innerHTML = least.toLocaleString();

    document.getElementById("average").innerHTML = average.toLocaleString("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }

    );

}

//shows events for specific location i.e. NY SanDiego etc etc
// the user selected city and this fires off. 
function getEvents(element) {

    let city = element.getAttribute("data-city");
    curEvents = JSON.parse(localStorage.getItem("eventsArray")) || events;

    //filter the events base on the selected city
    //this is an interview question: given an array can you reduce the number of elements you want to do?
    //answer:
    let filteredEvents = curEvents;

    if (city != "ALL") {
        filteredEvents = curEvents.filter(function (event) {
                if (event.city == city) {
                    return event;
                }
            }

        )
    }

    document.getElementById("statsHeader").innerHTML = `Stats For ${city} Events`;

    //display
    displayStats(filteredEvents);

}

//display all the events on the page
function displayData() {
    let template = document.getElementById("eventData-template");
    let eventBody = document.getElementById("eventBody");
    // clear the table first
    eventBody.innerHTML = "";


    let curEvents = JSON.parse(localStorage.getItem("eventsArray")) || [];

    if (curEvents.length == 0) {
        curEvents = events;
        localStorage.setItem("eventsArray", JSON.stringify(curEvents));
    }

    for (let index = 0; index < curEvents.length; index++) {
        let eventRow = document.importNode(template.content, true);
        let eventCols = eventRow.querySelectorAll("td");

        eventCols[0].textContent = curEvents[index].event;
        eventCols[1].textContent = curEvents[index].city;
        eventCols[2].textContent = curEvents[index].state;
        eventCols[3].textContent = curEvents[index].attendance;
        eventCols[4].textContent = curEvents[index] = new Date(curEvents[index].date).toLocaleDateString();

        eventBody.appendChild(eventRow);

    }

}

function saveData() {
    let curEvents = JSON.parse(localStorage.getItem("eventsArray")) || events;

    let obj = {};

    obj["event"] = document.getElementById("newEventName").value;
    obj["city"] = document.getElementById("newEventCity").value;
    let stateSel = document.getElementById("newEventState");
    obj["state"] = stateSel.options[stateSel.selectedIndex].text;
    obj["attendance"] = parseInt(document.getElementById("newEventAttendance").value, 10);
    let eventDate = document.getElementById("newEventDate").value;

    let eventDate2 = `$ {
        eventDate
    }

    00:00`;
    obj["date"] = new Date(eventDate2).toLocaleString();

    curEvents.push(obj);

    localStorage.setItem("eventsArray", JSON.stringify(curEvents));

    buildDropDown();
    displayData();

}