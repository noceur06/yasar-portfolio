



const resumeBtn = document.querySelector("#resume");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    let count = localStorage.getItem("downloads") || 0;
    count++;
    localStorage.setItem("downloads", count);
    console.log(`Resume downloaded ${count} times`);
    alert("Thanks for downloading my resume!");
  });
}

