document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const query = searchInput.value;
        performSearch(query);
    });

    function performSearch(query) {
        // Here, you can perform actions such as fetching search results from a server
        // For this example, let's just log the query to the console
        console.log("Search query:", query);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const subscriptionForm = document.getElementById("subscriptionForm");

    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = document.querySelector("#subscriptionForm input[type='email']");
        const emailAddress = emailInput.value;

        // Here, you can implement code to handle the form submission, such as sending the email address to a server
        console.log("Email address:", emailAddress);

        // Clear the input field after submission (optional)
        emailInput.value = "";
    });
});
