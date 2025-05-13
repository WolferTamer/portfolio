import pngtofap from '/pngtofap.png'

function ColorPalette() {
 return (<div className="project-page">
         <h1>Color Palette Picker</h1>
         <a href="https://pngtofap-production.up.railway.app/" target="_blank">pngtofap-production.up.railway.app</a>
         <p>This color palette picker, also called PNGtoFAP, allows you to upload an image and configure grids to grab each color from a png color palette and convert it into a FireAlpaca palette file.</p>
         <img src={pngtofap} alt="PNGtoFAP webpage"/>
     </div>)
}

export default ColorPalette