// ALL AVAILABLE SERVICES
let services = [
  // first service
  {
    img: "Images/treatment.jpg",
    name: "Fillings",
    price: "R500 - R1200",
    description: `Fillings are used to repair a hole in a tooth caused by decay. The most<br>
    common type of filling is an amalgam, made from a mixture of metals <br>
    including mercury, silver, tin, copper and zinc. <br>
    <br>
    Your dentist will offer the most appropriate type of filling according<br>
    to your clinical needs. This includes white fillings, if appropriate.<br>`,
  },

  // second service
  {
    img: "/Images/orthodontics (1).jpg",
    name: "Orthondontics",
    price: "R8000 - R15 000",
    description: `Orthodontic treatment (usually with braces) is most often used<br>
    to improve the appearance and alignment of crooked, protruding or<br>
    crowded teeth, and to correct problems with the bite of the teeth.`,
  },

  // third service
  {
    img: "/Images/teeth-cleaning (1).jpg",
    name: "Teeth Whitening",
    price: "R4000 - R6000",
    description: `Teeth whitening involves bleaching your teeth to make them a lighter<br>
    colour. A newer procedure called laser whitening or power whitening<br>
    is done at the dentist's surgery and takes about an hour.<br>
    <br>
    This is cosmetic and therefore generally only available privately.<br>`,
  },

  // fourth service
  {
    img: "/Images/dentures.jpg",
    name: "Dentures",
    price: "R800 - R5000",
    description: `More commonly known as false teeth, dentures are fitted in<br>
    place of natural teeth. These are custom-made using<br>
    impressions (mouldings) from your gums.<br>
    <br>
    They're removable so you can clean them, although part<br>
    dentures can be brushed at the sametime as your other teeth.<br>`,
  },

  // fifth service
  {
    img: "/Images/dental-surgery.jpg",
    name: "Dental Surgery",
    price: "R300 - R500",
    description: `The wisdom teeth grow at the back of your gums and are the last<br>
    teeth to come through, usually in your late teens or early twenties.<br>
    Most people have 4 wisdom teeth, 1 in each corner<br>
    <br>
    Wisdom teeth can sometimes emerge at an angle or get stuck and<br>
    only emerge partially.`,
  },

  // sixth service
  {
    img: "/Images/periodontology (1).jpg",
    name: "Periodontology",
    price: "R5000 - R18 000",
    description: `We can carry out a thorough dental examination to check<br>
    the health of your gums, which may involve inserting a thin metal<br>
    stick with a bend in 1 end (periodontal probe) beside your teeth.<br>
    <br>
    In some cases, a number of X-rays may be needed to check the<br>
    condition of your teeth and jaw bone.<br>`,
  },

  // seventh service
  {
    img: "/Images/oral-assessment (1).jpg",
    name: "Dental Exam",
    price: "R950 - R1600",
    description: `We'll check for dental and gum problem, this involves checking<br>
    for plaque and tartar on the teeth and at the gum line.<br>
    Plaque and tartar are sticky, invisible substances that build up<br> 
    on top of teeth naturally over time.<br>
    <br>
    Regular dental exams are a critical part of preventive health care.`,
  },
]

// FUNCTION TO SHOW SERVICES 
function showServices(services){
  let container = document.querySelector("#service-container")
  container.innerHTML = ""

  if(services.length){
    services.map(service => {
      container.innerHTML += `
      <div class="service">
        <img
        src="${ service.img }"
        class="img"
        style="width: 250px; height: 250px"
        />
        <div class="service-details">
            <h2 class="service-name">${service.name}</h2>
            <h3 class="price">Price range: ${service.price}</h3>
            <p class="info">${service.description}</p>
        </div>
    </div>
      `
    })
  } else{
    container.innerHTML = "No services found"
  }
}
showServices(services)


// SEARCH BAR FUNCTION FOR SERVICES
function searchFilter() {
  let searchTerm = document.querySelector("#search").value;
  
  let foundservices = services.filter(services=>{
    return services.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  showServices(foundservices);  
}
  