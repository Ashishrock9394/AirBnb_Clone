const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const place = document.getElementById("place").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guestNo = document.getElementById("guest").value;

    if (place && checkIn && checkOut && guestNo) {
        api(place, checkIn, checkOut, guestNo);
        setTimeout(() => {
            window.location.href = 'listing.html';
        }, 2000);
    } else {
        alert("Give all Value");
    }
});


async function api(input, date1, date2, guestNo) {
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',
      params: {
        location: input,
        checkin: date1,
        checkout: date2,
        adults: guestNo,
        children: '0',
        infants: '0',
        pets: '0',
        page: '1',
        currency: 'USD'
      },
      headers: {
        'X-RapidAPI-Key': '94e159fbfcmshdd32e4a5a68395bp1b2c94jsne865387baa2b',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      const data = await response.data; // Use response.data to access the JSON response
      console.log(data);
      console.log(typeof(data));
      if (data.error == false) {
                localStorage.setItem("result", JSON.stringify(data));
            } else {
                alert(data.message);
            }
    } catch (error) {
      console.error(error);
    }

  
};
