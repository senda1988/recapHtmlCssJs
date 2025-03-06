const fetchGitWorkflowImage = async () => {
  const imagePath = "../images/git/Git_Workflow.png";  // Corrected path
  const gitDocuContainer = document.getElementById("gitDocuContainer");


  gitDocuContainer.innerHTML = `<img src="${imagePath}" alt="Git Workflow Image" class="imgStyle">`;


};

// Call the function when the page has loaded
window.onload = () => {
  fetchGitWorkflowImage();
};
