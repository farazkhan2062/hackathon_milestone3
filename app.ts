let myName : any = document.getElementById ("name");
let desig  :any = document.getElementById ("desig");
let phone  :any = document.getElementById ("phone");
let email  :any = document.getElementById ("email");
let add  :any = document.getElementById ("add");
let pass  :any = document.getElementById ("pass");
let deg  :any = document.getElementById ("deg");
let uni  :any = document.getElementById ("uni");
let pass1  :any = document.getElementById ("pass1");
let deg1  :any = document.getElementById ("deg1");
let uni1  :any = document.getElementById ("uni1");
let skill1  :any = document.getElementById ("skill1");
let skill2  :any = document.getElementById ("skill2");
let skill3  :any = document.getElementById ("skill3");
let lang1  :any = document.getElementById ("lang1");
let lang2  :any = document.getElementById ("lang2");
let styear  :any = document.getElementById ("styear");
let endyear  :any = document.getElementById ("endyear");
let org  :any = document.getElementById ("org");
let orgloc  :any = document.getElementById ("orgloc");
let jobtitle  :any = document.getElementById ("jobtitle");
let achev1  :any = document.getElementById ("achev1");
let achev2  :any = document.getElementById ("achev2");
let achev3  :any = document.getElementById ("achev3");
let pic  :any = document.getElementById ("pic");


let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form")
form?.addEventListener("submit", (e) => {e.preventDefault()

    localStorage.setItem("name", myName.value)
    localStorage.setItem("desig", desig.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("add", add.value)
    localStorage.setItem("pass", pass.value)
    localStorage.setItem("deg", deg.value)
    localStorage.setItem("uni", uni.value)
    localStorage.setItem("pass1", pass1.value)
    localStorage.setItem("deg1", deg1.value)
    localStorage.setItem("uni1", uni1.value)
    localStorage.setItem("skill1", skill1.value)
    localStorage.setItem("skill2", skill2.value)
    localStorage.setItem("skill3", skill3.value)
    localStorage.setItem("lang1", lang1.value)
    localStorage.setItem("lang2", lang2.value)
    localStorage.setItem("styear", styear.value)
    localStorage.setItem("endyear", endyear.value)
    localStorage.setItem("org", org.value)
    localStorage.setItem("orgloc", orgloc.value)
    localStorage.setItem("jobtitle", jobtitle.value)
    localStorage.setItem("achev1", achev1.value)
    localStorage.setItem("achev2", achev2.value)
    localStorage.setItem("achev3", achev3.value)

    if (pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load" , () => {
            let textImg : any = reader.result
            localStorage.setItem("pic" , textImg)
        })
        reader.readAsDataURL(pic.files[0])
    }
    

    window.location.href = "/Resume/resume.html"
})