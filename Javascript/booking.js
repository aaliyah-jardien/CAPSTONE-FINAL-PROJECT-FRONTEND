// BOOKING FUNCTION
// FUNCTION TO REGISTER PATIENTS
function appointment(){  
    let user = JSON.parse(localStorage.getItem("user"))
    if(!user){
        location.href = "./patient-login.html"
    }
    let new_booking = {
        patient_name: document.getElementById("name").value,
        patient_surname: document.getElementById("surname").value,
        patient_email: document.getElementById("email").value,
        patient_cellphone: document.getElementById("cellphone").value,
        patient_service: document.getElementById("service").value,
        booking_date: document.getElementById("date").value,
    }

    console.log(new_booking);
  
  // FETCHING FROM API
  fetch(`https://aaliyahs-dentistry.herokuapp.com/add-booking/${user.patient_id}`, {
    method: "POST",
    body: JSON.stringify(new_booking),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        alert('Booked Appointment Successfully.')
        window.location = ''
    });
}