$(function() {
    $(".change-munch").on("click", function(event) {
        let id = $(this).data("id");
        let newMunch = $(this).data("newmunch");

        let newMunchState = {
            munched: newMunch
        };

        // Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: newMunchState
        }).then(
            function() {
                console.log("changed sleep to", newMunch);
                // Reload Page
                location.reload();
            }
        );
    });

    $(".create-form").on('submit', function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#bg").val().trim(),
            munched: $("[name=munched]:checked").val().trim()
        };

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Order Up!");
                // Reload Page
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");

        // Send DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Sent Back Burger", id);

                location.reload();
            }
        );
    });
});