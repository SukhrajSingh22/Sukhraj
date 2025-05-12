$(document).ready(function() {
    let lastClicked = null;
    let highestClicked = 0;

    function getRandomNumber() {
        return Math.floor(Math.random() * 100); // 0–99
    }

    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#9B59B6", "#1ABC9C", "#E74C3C", "#2ECC71", "#2980B9"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    $('.square').each(function(index) {
        $(this).data('original-text', index + 1);
    });

    $('.square').hover(function () {
        const randomNum = getRandomNumber();
        $(this).data('randomNum', randomNum);
        $(this).css('background-color', getRandomColor());
        $(this).text(randomNum);
    }, function () {
        $(this).css('background-color', 'black');
        $(this).text($(this).data('original-text'));
    });

    $('.square').click(function () {
        const clickedNum = $(this).data('randomNum');
        lastClicked = clickedNum;
        if (clickedNum > highestClicked) {
            highestClicked = clickedNum;
        }
        $('#last-clicked').text(`Last Clicked: ${lastClicked}`);
        $('#highest-clicked').text(`Highest Clicked: ${highestClicked}`);
    });
});