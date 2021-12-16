function formSubmit(){
    let name = document.getElementById("input-name").value
    let Email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == ""){
        alert("Please Input your name")
    }
    if (Email == ""){
        alert("Please Input your Email")
    }
    if (phone == ""){
        alert("Please Input your number phone")
    }
    if (subject == ""){
        alert("Please Input your subject")
    }
    if (message == ""){
        alert("Please Input your message")
    }

    let emailreceiver = "muhamadsaid2904@gmail.com"

    let a = document.createElement('a')
    a.href =`mailto:${emailreceiver}?subject=${subject}&body= halo my name ${name}, my email ${Email}, my Number Phone ${phone} ${message   } `
    a.click()
    
    console.log(name)
    console.log(Email)
    console.log(phone)
    console.log(subject)
    console.log(message)
}