function updateTopLeftBorderRadius() {
    const topLeft = document.getElementById('top-left').value;
    
    const box = document.getElementById('preview-box');
    box.style.borderTopLeftRadius = `${topLeft}px`;
}

function updateTopRightBorderRadius() {
    const topRight = document.getElementById('top-right').value;
    
    const box = document.getElementById('preview-box');
    box.style.borderTopRightRadius = `${topRight}px`;
}

function updateBottomLeftBorderRadius() {
    const bottomLeft = document.getElementById('bottom-left').value;
    
    const box = document.getElementById('preview-box');
    box.style.borderBottomLeftRadius = `${bottomLeft}px`;
}

function updateBottomRightBorderRadius() {
    const bottomRight = document.getElementById('bottom-right').value;
    
    const box = document.getElementById('preview-box');
    box.style.borderBottomRightRadius = `${bottomRight}px`;
}