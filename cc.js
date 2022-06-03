const panelBtns = document.querySelector('.panelBtns');
const panelDisplay = document.querySelector('.panelDisplay');
const panelInfo = document.querySelector('.panelInfo');
const result = document.querySelector('.result');
const calcResult = document.querySelector('#calcBtn');
const saveBtn = document.querySelector('#saveBtn');
const numOfPanels = document.querySelector('#numOfPanels');
const rowOfPanels = document.querySelector('#rowOfPanels');
const roofWidth = document.querySelector('#roofWidth');
const roofHeight = document.querySelector('#roofHeight');

const panelTypes = [
    {
        name: "Hyundai 400W",
        height: 200,
        width: 100,
        cc1: 120,
        cc2: 52.9
    },
    // {
    //     name: "Hyundai 400W",
    //     height: 171.9,
    //     width: 114,
    //     cc1: 120,
    //     cc2: 52.9
    // },
    {
        name: "Longi 375W",
        height: 175.5,
        width: 103.8,
        cc1: 120,
        cc2: 55.5
    },
    {
        name: "Longi 450W",
        height: 209.4,
        width: 103.8,
        cc1: 130,
        cc2: 80.4
    },
    {
        name: "Longi 540W",
        height: 225.6,
        width: 113.3,
        cc1: 140,
        cc2: 85.6
    },
    {
        name: "Longi Full Black 400W",
        height: 172.2,
        width: 113.4,
        cc1: 120,
        cc2: 53.2
    },
    {
        name: "Hyundai 400W",
        height: 309.4,
        width: 120.8,
        cc1: 120,
        cc2: 52.9
    }
];

let selectedPanel = {};

const listPanels =
    panelTypes.forEach(panel => {
        const b = document.createElement('button');
        panelBtns.appendChild(b);
        b.innerText = panel.name;

        b.addEventListener('click', e => {
            e.preventDefault();
            selectedPanel = panel;
            calcResult.disabled = false;
            panelDisplay.style.display = "block";
            console.log(selectedPanel)
            panelInfo.innerHTML = `
                <p><span class="bold">Längd:</span> ${panel.height} cm</p>
                <p><span class="bold">Bredd:</span> ${panel.width} cm</p>
                <p><span class="bold">CC mått:</span> ${panel.cc1} cm / ${panel.cc2} cm</p>
                <hr />
                `;
        
        
        
            });
        
            calcResult.addEventListener('click', e => {
                e.preventDefault();
                selectedPanel = panel;
                console.log(panel);
                saveBtn.disabled = false;
                const gapHeight = 1;
                const gapWidth = 2;
                let panelPerRow = rowOfPanels.value;
                let panelAmount = numOfPanels.value;
                let nameOfRoof = roofName.value;
                let heightOfRoof = roofHeight.value;
                let widthOfRoof = roofWidth.value;
            
                const totalPanelHeight = (panelPerRow * selectedPanel.height) + (gapHeight * (panelPerRow - 1));
                // const totalPanelWidth = (panelAmount / panelPerRow) * panel.width;
                const totalPanelWidth = ((gapWidth + panel.width) * (panelAmount / panelPerRow)) - gapWidth;
                const centerWidth = (widthOfRoof - totalPanelWidth) / 2;
                const overhang = ((panel.height - panel.cc1) / 2) - 2.
                result.innerHTML = `
            <h2>Resultat av beräkning</h2>
            <hr />
            <h2>${nameOfRoof}</h2>
            <div class="roofMeasurements"><p><span class="bold">Takhöjd:</span> ${(heightOfRoof / 100)} m</p>
            <p><span class="bold">Takbredd:</span> ${(widthOfRoof / 100)} m</p>
            </div>
            <div class="roofMeasurements"><p><span class="bold">Totalhöjd:</span> ${Math.round(totalPanelHeight)} cm</p>
            <p><span class="bold">Antal rader:</span> ${panelPerRow}st</p>
            </div>
            <div class="roofMeasurements"><p><span class="bold">Totalbredd:</span> ${Math.round(totalPanelWidth)} cm</p>
            <p><span class="bold">Antal Paneler:</span> ${panelAmount}st</p>
            </div>
            <div class="roofMeasurements"><p><span class="bold">Utstick:</span> ${overhang.toFixed(1)} cm</p>
            <p><span class="bold">Från kant:</span> ${Math.round(centerWidth)} cm</p>
            </div>
            `;
            });

            saveBtn.addEventListener('click', e => {
                e.preventDefault()
                let panelPerRow = rowOfPanels.value;
                let panelAmount = numOfPanels.value;
                let nameOfRoof = roofName.value;
                let heightOfRoof = roofHeight.value;
                let widthOfRoof = roofWidth.value;
                
                localStorage.setItem('name', nameOfRoof);
                localStorage.setItem('height', heightOfRoof);
                localStorage.setItem('width', widthOfRoof);
                localStorage.setItem('panels',panelAmount);
                localStorage.setItem('rows', panelPerRow);
                for (let i = 0; i < localStorage.length; i++){
                  let getName = localStorage.getItem('name')
                let getHeight = localStorage.getItem('height') ;
                let getWidth = localStorage.getItem('width') ;
                let getPanels = localStorage.getItem('panels') ;
                let getRows = localStorage.getItem('rows') ;
                  saveList.innerHTML = 
                  `
                <h2>${getName}</h2>
                <div class="roofMeasurements">
                  <p><span class="bold">Totalhöjd:</span> ${getHeight} cm</p>
                  <p><span class="bold">Totalbredd:</span> ${getWidth} cm</p>
                </div>
                <div class="roofMeasurements">
                  <p><span class="bold">Antal paneler:</span> ${getPanels} st</p>
                  <p><span class="bold">Antal rader:</span> ${getRows} st</p>
                </div>`;
                }
            })

    });