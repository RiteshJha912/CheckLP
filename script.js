function changePage(pageName) {
    var content = document.getElementById('content');
    
    // Clear previous content
    content.innerHTML = '';

    // Load content based on the selected page
    switch (pageName) {
        case 'guide':
            fetchContent('guide.html');
            break;

        case 'page1':
            fetchContent('page1.html');
            break;

        case 'page2':
            fetchContent('page2.html');
            break;

        default:
            break;
    }

    // Update the address bar URL
    history.pushState({}, pageName, `#${pageName}`);
}

function fetchContent(pageURL) {
    fetch(pageURL)
        .then(response => response.text())
        .then(data => {
            var content = document.getElementById('content');
            content.innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
}
