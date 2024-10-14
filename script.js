// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Clear form fields
    document.getElementById("contactForm").reset();
  
    // Show the toast notification
    var toast = document.getElementById("toast");
    toast.className = "toast show";
  
    // Hide the toast after 3 seconds
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  });
  