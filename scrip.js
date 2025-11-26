// Profile Modal
let profileModal = document.getElementById("profileModal");
let profileImg = document.getElementById("profileImg");
let closeProfile = document.getElementById("closeProfile");

profileImg.onclick = () => profileModal.style.display = "flex";
closeProfile.onclick = () => profileModal.style.display = "none";

// Contact confirmation modal
let confirmModal = document.getElementById("confirmModal");
let submitBtn = document.getElementById("submitBtn");
let yesBtn = document.getElementById("yesSubmit");
let noBtn = document.getElementById("noSubmit");
let form = document.getElementById("contactForm");

submitBtn.onclick = (e)=>{
    e.preventDefault();
    confirmModal.style.display = "flex";
};

noBtn.onclick = ()=> confirmModal.style.display = "none";
yesBtn.onclick = ()=> form.submit();
