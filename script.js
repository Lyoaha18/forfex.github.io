let clickCount = 0;
let clickPower = 1;
let upgradeCost = 10;

document.getElementById('click-button').addEventListener('click', () => {
    clickCount += clickPower;
    document.getElementById('click-count').textContent = clickCount;
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        clickPower += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);

        document.getElementById('click-count').textContent = clickCount;
        document.getElementById('click-power').textContent = clickPower;
        document.getElementById('upgrade-cost').textContent = upgradeCost;
    } else {
        alert('Not enough clicks to upgrade!');
    }
});
