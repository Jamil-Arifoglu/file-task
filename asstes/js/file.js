let fileInput = document.getElementById("file");
let images = document.querySelector(".images");

fileInput.addEventListener("change", function (e) {
  let files = Array.from(e.target.files);
  files.forEach((file) => {
    ShowImage(file);
  });
});

function ShowImage(file) {
  if (!file.type.includes("image/")) {
    alert("please choose omage format");
    return;
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener("loadend", function () {
    let src = fileReader.result;
    let image = document.createElement("div");
    let closeBtton = document.createElement("button");
    closeBtton.className = "btn btn-outline-danger";
    closeBtton.innerText = "X";
    closeBtton.style.position = "absolute";
    closeBtton.style.right = "0px";
    closeBtton.addEventListener("click", function () {
      image.remove();
      let btn = document.createElement("button");
      btn.className = "btn btn-outline-primary";
      btn.innerText = "blak";
      document.body.append(btn);
     
     btn.addEventListener("click",function(){
        images.appendChild(image);
        btn.remove();
    
    });
    
    })
    image.style.position = "relative";
    image.style.width = "150px";
    image.style.height = "150px";
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.src = src;
    image.append(img);
    image.append(closeBtton);
    images.appendChild(image);
    img.ondblclick = function () {
      img.style.boxShadow = "0px 0px 10px blue";
    };
  });
}
