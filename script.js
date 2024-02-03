var button = document.getElementById("searchbutton");
button.addEventListener("click", function (event) {
    event.preventDefault();

    var selectbox = document.getElementById("selectbox");
    var selevalue = selectbox.value;

    //Using async function to fetch api
    async function ele() {

        //It will try to run the api into server.
        try {

            //Fetch quran api using await method.
            var quran = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan-la/${selevalue}.json`);

            //Making the response to json format to get the data easily.
            var qurandata = await quran.json();

            //Accessing the chapter element using dot method.
            var chapters = qurandata.chapter;

            //Getting table body to display element in the html
            var tabbody = document.getElementById("tablebody");

            for (var i = 0; i < chapters.length; i++) {
                const row = tabbody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                cell1.textContent = chapters[i].chapter;
                cell2.textContent = chapters[i].verse;
                cell3.textContent = chapters[i].text;
            }
        }
        // If the api not run in the server it catch the error
        catch (error) {
            console.log("Error in Fetch data" + error.messages);
        }

    }
    ele();
})

