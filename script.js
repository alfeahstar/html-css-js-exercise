//----------------------------background color--------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const portfolioSection = document.getElementById('portfolio_section');
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function changeBackgroundColor() {
      portfolioSection.style.backgroundColor = getRandomColor();
    }
  
    document.getElementById('project1-title').addEventListener('click', changeBackgroundColor);
    document.getElementById('project2-title').addEventListener('click', changeBackgroundColor);
    document.getElementById('project3-title').addEventListener('click', changeBackgroundColor);
  });
  

  //------------------------------alert-----------------------------------
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    const userInput = document.getElementById('exampleName','exampleEmail','exampleMessage').value;

    if (userInput.trim() === "") {
        
        alert("Form cannot be empty!");
        event.preventDefault(); 
        return false;
    } else {
        
        alert("Form successfully submitted!");
    }
});