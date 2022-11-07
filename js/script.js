console.log('teste')

function clickSites () {
    var icon = document.getElementById('icon-sites');
    var div = document.getElementById('container-submenu');
    var styles = window.getComputedStyle(div);
    console.log('display:', styles.display);
    if(styles.display === 'none') {
        div.style.display = 'block';
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        div.style.display = 'none';
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }
}

