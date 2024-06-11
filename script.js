 document.addEventListener("DOMContentLoaded", function() {
            let selectElement = document.getElementById("colorSelect");
            let btn = document.getElementById("btn");

           btn.addEventListener("click", function(event) {
                let selectedIndex = selectElement.selectedIndex;
                if (selectedIndex !== -1) {
                    selectElement.remove(selectedIndex);
                }
            });
        });
