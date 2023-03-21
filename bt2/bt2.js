
function numberOneTriangle() {
    let number = document.getElementById('numBer').value
    let hinhSao = '';
    const ketqua = document.getElementById('ketQua');
    ketqua.innerHTML = '';
    for (let i = 0; i < number; i++) {
        hinhSao += '* ';
        let daySao = document.createElement('div');
        daySao.innerHTML = hinhSao;
        ketqua.appendChild(daySao);
    }
}
  
