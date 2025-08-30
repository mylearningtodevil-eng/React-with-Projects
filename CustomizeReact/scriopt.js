const reactMaker = function(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if(prop=== 'childern') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        }
    container.appendChild(domElement)
    }
const reactElement = {
    type: 'a',
    props: {
        target: '_blank',
        href: 'https://google.com'
    },
    childern: 'Click me to Visit Google'
}
const reactContainer = document.getElementById('root');
reactMaker(reactElement,reactContainer)