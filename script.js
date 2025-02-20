function checkIn() {
    document.getElementById('checkin-status').innerText = '签到成功！';
}

// 表单验证
document.getElementById('hotel-search').addEventListener('submit', function (event) {
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (!destination || !checkin || !checkout) {
        alert('请填写所有必填项！');
        event.preventDefault();
    }
});

document.getElementById('ticket-search').addEventListener('submit', function (event) {
    const ticketDestination = document.getElementById('ticket-destination').value;
    const ticketDate = document.getElementById('ticket-date').value;

    if (!ticketDestination || !ticketDate) {
        alert('请填写所有必填项！');
        event.preventDefault();
    }
});

document.getElementById('transport-search').addEventListener('submit', function (event) {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;

    if (!from || !to || !departure) {
        alert('请填写所有必填项！');
        event.preventDefault();
    }
});