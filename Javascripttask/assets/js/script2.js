// const link = document.querySelector("a")

fetch("https://northwind.vercel.app/api/categories/", 
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({name: "sasdsada", surname: "salam"})
})

.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        mycreatedcard(element.id,element.description,element.name)
    });
})
.catch(err=>console.log("error" ,err))

function mycreatedcard(id,description,name) {
    const card = document.createElement("div")
    const cardid = document.createElement("div")
    const carddescription = document.createElement("div")
    const cardname = document.createElement("div")
    const cardlink = document.createElement("a")
    cardlink.setAttribute("href","./mydetail.html#" +id)



card.style.border="3px solid black"
card.style.margin="5%"
card.style.width="100px"
card.style.height="300px"
card.style.backgroundColor="black"
card.style.color="white"
card.style.borderRadius="10px"
card.style.display="flex"
card.style.flexDirection="column"
card.style.gap="20px"
card.style.padding="10px"








    cardid.textContent = id
    cardname.textContent = name
    carddescription.textContent = description
    cardlink.textContent = "Mydetail"

    card.append(cardid,carddescription,cardname,cardlink)
    document.body.appendChild(card)

}
