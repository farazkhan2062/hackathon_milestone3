
window.addEventListener("load", () => {
  
  let name = localStorage.getItem("name");
  let desig = localStorage.getItem("desig");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass = localStorage.getItem("pass");
  let deg = localStorage.getItem("deg");
  let uni = localStorage.getItem("uni");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let org = localStorage.getItem("org");
  let orgloc = localStorage.getItem("orgloc");
  let jobtitle = localStorage.getItem("jobtitle");
  let achev1 = localStorage.getItem("achev1");
  let achev2 = localStorage.getItem("achev2");
  let achev3 = localStorage.getItem("achev3");
  let pic = localStorage.getItem("pic")

  let resName: any = document.getElementById("resName")
  resName.textContent = name

  let resDesig: any = document.getElementById("resDesig")
  resDesig.textContent = desig

  let resPhone: any = document.getElementById("resPhone")
  resPhone.textContent = phone

  let resEmail: any = document.getElementById("resEmail")
  resEmail.textContent = email

  let resAdd: any = document.getElementById("resAdd")
  resAdd.textContent = add

  let resPass: any = document.getElementById("resPass")
  resPass.textContent = pass

  let resDeg: any = document.getElementById("resDeg")
  resDeg.textContent = deg

  let resUni: any = document.getElementById("resUni")
  resUni.textContent = uni

  let resPass1: any = document.getElementById("resPass1")
  resPass1.textContent = pass1

  let resDeg1: any = document.getElementById("resDeg1")
  resDeg1.textContent = deg1

  let resUni1: any = document.getElementById("resUni1")
  resUni1.textContent = uni1

  let resSkill1: any = document.getElementById("resSkill1")
  resSkill1.textContent = skill1

  let resSkill2: any = document.getElementById("resSkill2")
  resSkill2.textContent = skill2

  let resSkill3: any = document.getElementById("resSkill3")
  resSkill3.textContent = skill3

  let resLang1: any = document.getElementById("resLang1")
  resLang1.textContent = lang1

  let resLang2: any = document.getElementById("resLang2")
  resLang2.textContent = lang2

  let resStart: any = document.getElementById("resStart")
  resStart.textContent = styear

  let resEnd: any = document.getElementById("resEnd")
  resEnd.textContent = endyear

  let resOrg: any = document.getElementById("resOrg")
  resOrg.textContent = org

  let resOrgloc: any = document.getElementById("resOrgloc")
  resOrgloc.textContent = orgloc

  let resJobtitle: any = document.getElementById("resJobtitle")
  resJobtitle.textContent = jobtitle

  let resAchv1: any = document.getElementById("resAchv1")
  resAchv1.textContent = achev1

  let resAchv2: any = document.getElementById("resAchv2")
  resAchv2.textContent = achev2

  let resAchv3: any = document.getElementById("resAchv3")
  resAchv3.textContent = achev3
  
  let resImg: any = document.getElementById("resImg")
  resImg.src = pic
  
});

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});
