function generateVideo() {
  const idea = document.getElementById("idea").value;
  const result = document.getElementById("result");

  if (idea.trim() === "") {
    result.textContent = "Pehle apna video idea likho.";
    return;
  }

  result.innerHTML =
    "Aapka video prompt ready hai: <br><br><b>" +
    idea +
    "</b><br><br>" +
    "<a href='https://huggingface.co/spaces/Lightricks/ltx-video-distilled' target='_blank'>" +
    "Open Free Video Generator" +
    "</a>";
}