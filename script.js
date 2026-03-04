const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

positionElementsInCircle('.container-icons', 250)

function positionElementsInCircle(containerName, radius) {
    const container = document.querySelector(containerName);    //Get name of container
    const childElements = container.querySelectorAll('img');    //Get all IMG children in this container
    const numOfChildren = childElements.length;  //Count how many children there are

    childElements.forEach((child, index) => {
        const angle = (index / numOfChildren) * (2 * Math.PI);    //Calculate angle for each child
    
    const x = Math.cos(angle) * radius;
    const y =  Math.sin(angle) * radius;

    child.style.transform = `translate(${x}px, ${y}px`;
    
    });
}