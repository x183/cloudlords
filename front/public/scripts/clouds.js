async function chooseCloud() {
  let jsAmount = await fetch("http://localhost:3000/amount_images");
  let amount = await jsAmount.json();
  let random = Math.floor(Math.random() * amount.amount) + 1;
  return "/images/Cloud" + random + ".png";
}

function getClouds() {
  fetchCloudData().then((clouds) => {
    console.log(clouds);
    clouds.map((cloud) => {
      let cid = "cloud_" + cloud.type + "_" + cloud.id;
      let cloudDiv = document.createElement("div");
      let cloudImg = document.createElement("img");
      let cloudText = document.createElement("p");
      cloudDiv.setAttribute("class", "cloud");
      cloudDiv.setAttribute("id", cid);
      chooseCloud().then((cloudPath) => {
        cloudImg.setAttribute("src", cloudPath);
      });
      cloudText.innerHTML = cloud.name;
      cloudText.setAttribute("class", "centered-text");
      cloudDiv.appendChild(cloudImg);
      cloudDiv.appendChild(cloudText);
      document.getElementById("Sky").appendChild(cloudDiv);
    });
  });
}

async function fetchCloudData() {
  const cloudJSON = await fetch("http://localhost:8000/clouds/allClouds");
  return cloudJSON.json();
}
