$(document).ready(function() {
    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#9B59B6", "#1ABC9C", "#E74C3C", "#2ECC71", "#2980B9"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    $('.square').hover(function () {
        $(this).css('background-color', getRandomColor());
    });
});