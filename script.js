const ctx = document.getElementById("feedbackChart").getContext("2d");

let feedbackData = {
    satisfaction: 0,
    quality: 0,
    price: 0,
    recommend: 0
};

let submissionCount = 0;

const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Satisfaction", "Quality", "Price", "Recommend"],
        datasets: [{
            label: "Average Rating",
            data: [0, 0, 0, 0],
            backgroundColor: "#4f46e5",
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 5
            }
        }
    }
});

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const satisfaction = parseInt(document.getElementById("satisfaction").value);
    const quality = parseInt(document.getElementById("quality").value);
    const price = parseInt(document.getElementById("price").value);
    const recommend = parseInt(document.getElementById("recommend").value);

    feedbackData.satisfaction += satisfaction;
    feedbackData.quality += quality;
    feedbackData.price += price;
    feedbackData.recommend += recommend;

    submissionCount++;

    chart.data.datasets[0].data = [
        (feedbackData.satisfaction / submissionCount).toFixed(2),
        (feedbackData.quality / submissionCount).toFixed(2),
        (feedbackData.price / submissionCount).toFixed(2),
        (feedbackData.recommend / submissionCount).toFixed(2)
    ];

    chart.update();

    document.getElementById("feedbackForm").reset();
});