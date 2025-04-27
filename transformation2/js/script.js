$(document).ready(function() {
    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#9B59B6", "#1ABC9C", "#E74C3C", "#2ECC71", "#2980B9"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    $('.square').hover(function () {
        // Change background color to a random color
        $(this).css('background-color', getRandomColor());
        
        // Optional: Add a text change (like a number or random text) when hovered
        $(this).text(Math.floor(Math.random() * 100));

    }, function() {
        // Reset text and background color when hover ends
        $(this).css('background-color', 'black');
        $(this).text($(this).index() + 1); // Reset to original number
    });
});