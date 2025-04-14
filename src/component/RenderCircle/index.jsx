export default function RenderCircle() {
    const handleClick = (e) => {
        const container = document.getElementById('container');
        const min = 50;
        const max = 300;
        const size = Math.floor(Math.random() * (max - min) + min);
        if (container) {
            const ele = document.createElement('div')
            ele.style.position = 'absolute'
            ele.style.backgroundColor = 'transparent'
            ele.style.border = "1px solid crimson"
            ele.style.height = `${size}px`
            ele.style.width = `${size}px`
            ele.style.borderRadius = '50%'
            ele.style.top = `${e.clientY - size / 2}px`
            ele.style.left = `${e.clientX - size / 2}px`
            container.appendChild(ele);
            const existingCircles = container.getElementsByClassName('circle');
            if (existingCircles.length >= 3) {
                container.removeChild(existingCircles[0]);
            }
            ele.classList.add('circle');
            container.appendChild(ele);
        }
    }
    return <>
        <div
            className="renderCircle"
            id="container"
            onClick={handleClick}
        />
    </>
}