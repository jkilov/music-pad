
const genre = document.getElementById('genre')
const screenTitle = document.getElementById('screen-title');
const btnContainer = document.getElementById('btn-container');
const resetBtn = document.getElementById("reset-btn")
const shuffleBtn = document.getElementById("shuffle-btn");
const selectionTechno = document.getElementById("selection-techno");
const selectionHouse = document.getElementById("selection-house");
const selectionTechHouse = document.getElementById("selection-tech-house");
let selectedGenre = '';


// raw array that houses all of the sample information


const sampleLibrary = [{
    genre: 'Techno',
    drumsZ: 'sounds/drums/techno_drums_1.wav',
    drumsX: 'sounds/drums/techno_drums_2.wav',
    drumsC: 'sounds/drums/techno_drums_3.wav',
    drumsV: 'sounds/drums/techno_drums_4.wav',
    bassA: 'sounds/bass/techno_bass_1.wav',
    bassS: 'sounds/bass/techno_bass_2.wav',
    bassD: 'sounds/bass/techno_bass_3.wav',
    bassF: 'sounds/bass/techno_bass_4.wav',
    chordsQ: 'sounds/chords/techno_chords_1.wav',
    chordsW: 'sounds/chords/techno_chords_2.wav',
    chordsE: 'sounds/chords/techno_chords_3.wav',
    chordsR: 'sounds/chords/techno_chords_4.wav',
    melodyU: 'sounds/melody/techno_melody_1.wav',
    melodyI: 'sounds/melody/techno_melody_2.wav',
    melodyO: 'sounds/melody/techno_melody_3.wav',
    melodyP: 'sounds/melody/techno_melody_4.wav',
},
{
    genre: 'House',
    drumsZ: 'sounds/drums/house_Drums_1.wav',
    drumsX: 'sounds/drums/house_Drums_2.wav',
    drumsC: 'sounds/drums/house_drums_3.wav',
    drumsV: 'sounds/drums/house_drums_4.wav',
    bassA: 'sounds/bass/house_bass_1.wav',
    bassS: 'sounds/bass/house_bass_2.wav',
    bassD: 'sounds/bass/house_bass_3.wav',
    bassF: 'sounds/bass/house_bass_4.wav',
    chordsQ: 'sounds/chords/house_chords_1.wav',
    chordsW: 'sounds/chords/house_chords_2.wav',
    chordsE: 'sounds/chords/house_chords_3.wav',
    chordsR: 'sounds/chords/house_chords_4.wav',
    melodyU: 'sounds/melody/house_melody_1.wav',
    melodyI: 'sounds/melody/house_melody_2.wav',
    melodyO: 'sounds/melody/house_melody_3.wav',
    melodyP: 'sounds/melody/house_melody_4.wav',
},
{
    genre: 'Tech House',
    drumsZ: 'sounds/drums/tech_drums_1.wav',
    drumsX: 'sounds/drums/tech_drums_2.wav',
    drumsC: 'sounds/drums/tech_drums_3.wav',
    drumsV: 'sounds/drums/tech_drums_4.wav',
    bassA: 'sounds/bass/tech_bass_1.wav',
    bassS: 'sounds/bass/tech_bass_2.wav',
    bassD: 'sounds/bass/tech_bass_3.wav',
    bassF: 'sounds/bass/tech_bass_4.wav',
    chordsQ: 'sounds/chords/tech_chords_1.wav',
    chordsW: 'sounds/chords/tech_chords_2.wav',
    chordsE: 'sounds/chords/tech_chords_3.wav',
    chordsR: 'sounds/chords/tech_chords_4.wav',
    melodyU: 'sounds/melody/tech_melody_1.wav',
    melodyI: 'sounds/melody/tech_melody_2.wav',
    melodyO: 'sounds/melody/tech_melody_3.wav',
    melodyP: 'sounds/melody/tech_melody_4.wav',

}
]

const updateSampleLibrary = () => {

    selectedGenre = genre.value;
    
    
    const loadSample =  sampleLibrary.find((sample)=> sample.genre === selectedGenre)
   
    
    if (loadSample) {
        const {drumsZ, drumsX, drumsC, drumsV, bassA, bassS, bassD, bassF, chordsQ, chordsW, chordsE, chordsR, melodyU, melodyI, melodyO, melodyP } = loadSample;
        btnContainer.innerHTML = '';
    
        btnContainer.innerHTML = `
          <div>
                           <div>
                <button type="button" class="btn" id="melody-u-btn">Melody <span>U</span></button>
                <audio src="${melodyU}" id="melody-u-btn"></audio>
                <button type="button" class="btn" id="melody-i-btn">Melody <span>I</span></button>
                <audio src="${melodyI}" id="melody-i-audio"></audio>
                <button type="button" class="btn" id="melody-o-btn">Melody <span>O</span></button>
                <audio src="${melodyO}" id="melody-o-audio"></audio>
                <button type="button" class="btn" id="melody-p-btn">Melody <span>P</span></button>
                <audio src="${melodyP}" id="melody-p-audio"></audio>
                </div>
                                    <!-- Chords-->
                             <div>
                <button type="button" class="btn" id="chords-q-btn">Chords <span>Q</span></button>
                <audio src="${chordsQ}" id="chords-q-audio"></audio>
                <button type="button" class="btn" id="chords-w-btn">Chords <span>W</span></button>
                <audio src="${chordsW}" id="chords-w-audio"></audio>
                <button type="button" class="btn" id="chords-e-btn">Chords <span>E</span></button>
                <audio src="${chordsE}" id="chords-e-audio"></audio>
                <button type="button" class="btn" id="chords-r-btn">Chords <span>R</span></button>
                <audio src="${chordsR}" id="chords-r-audio"></audio>
                </div>
                           <!-- Bass -->
                             <div>
                <button type="button" class="btn" id="bass-a-btn">Bass <span>A</span></button>
                <audio src="${bassA}" id="bass-a-audio"></audio>
                <button type="button" class="btn" id="bass-s-btn">Bass <br><span>S</span></button>
                <audio src="${bassS}" id="bass-s-audio"></audio>
                <button type="button" class="btn" id="bass-d-btn">Bass <span>D</span></button>
                <audio src="${bassD}" id="bass-d-audio"></audio>
                <button type="button" class="btn" id="bass-f-btn">Bass <br><span>F</span></button>
                <audio src="${bassF}" id="bass=f=audio"></audio>
                </div>
                    <!-- drums -->
                    <div>
                <button type="button" class="btn" id="drums-z-btn">Drums <span>Z</span></button>
                <audio src="${drumsZ}" id="drums-z-audio"></audio>
                <button type="button" class="btn" id="drums-x-btn">Drums <span>X</span></button>
                <audio src="${drumsX}" id="drums-x-audio"></audio>
                <button type="button" class="btn" id="drums-c-btn">Drums <span>C</span></button>
                <audio src="${drumsC}" id="drums-c-audio"></audio>
                <button type="button" class="btn" id="drums-v-btn">Drums <span>V</span></button>
                <audio src="${drumsV}" id="drums-v-audio"></audio>
                </div>
                
        `
    
        removeEventListener();
        addEventListener();

        showLoader();
        loadAllAudio(hideLoader);

    }
    
    };

const updateButtonEvent = (e) => {

    const drumsVAudio = document.getElementById("drums-v-audio");
    const drumsCAudio = document.getElementById("drums-c-audio");
    const drumsXAudio = document.getElementById("drums-x-audio");
    const drumsZAudio = document.getElementById("drums-z-audio");

    const bassFAudio = document.getElementById("bass-f-audio");
    const bassDAudio = document.getElementById("bass-d-audio");
    const bassSAudio = document.getElementById("bass-s-audio");
    const bassAAudio = document.getElementById("bass-a-audio");
    
    const chordsRAudio = document.getElementById("chords-r-audio");
    const chordsEAudio = document.getElementById("chords-e-audio");
    const chordsWAudio = document.getElementById("chords-w-audio");
    const chordsQAudio = document.getElementById("chords-q-audio");

    const melodyPAudio = document.getElementById("melody-p-audio");
    const melodyOAudio = document.getElementById("melody-o-audio");
    const melodyIAudio = document.getElementById("melody-i-audio");
    const melodyUAudio = document.getElementById("melody-u-audio");


    if (e.key === 'v') {
        drumsVAudio.currentTime = 0;
        drumsVAudio.play()
    } else if 
    (e.key === 'c') {
        drumsCAudio.currentTime = 0;
        drumsCAudio.play();
    } else if 
    (e.key === 'x') {
        drumsXAudio.currentTime = 0;
        drumsXAudio.play();
    } else if 
    (e.key === 'z') {
        drumsZAudio.currentTime = 0;
        drumsZAudio.play();
    } else if 
    (e.key === 'f') {
        bassFAudio.currentTime = 0;
        bassFAudio.play();
    } else if 
    (e.key === 'd') {
        bassDAudio.currentTime = 0;
        bassDAudio.play();
    } else if 
    (e.key === 's') {
        bassSAudio.currentTime = 0;
        bassSAudio.play();
    } else if 
    (e.key === 'a') {
        bassAAudio.currentTime = 0;
        bassAAudio.play();
} else if 
(e.key === 'r') {
    chordsRAudio.currentTime = 0;
    chordsRAudio.play();
} else if 
(e.key === 'e') {
    chordsEAudio.currentTime = 0;
    chordsEAudio.play();
}else if 
(e.key === 'w') {
    chordsWAudio.currentTime = 0;
    chordsWAudio.play();
} else if 
(e.key === 'q') {
    chordsQAudio.currentTime = 0;
    chordsQAudio.play();
} else if 
(e.key === 'p') {
    melodyPAudio.currentTime = 0;
    melodyPAudio.play();
} else if 
(e.key === 'o') {
    melodyOAudio.currentTime = 0;
    melodyOAudio.play();
} else if 
(e.key === 'i') {
    melodyIAudio.currentTime = 0;
    melodyIAudio.play();
} else if 
(e.key === 'u') {
    melodyUAudio.currentTime = 0;
    melodyUAudio.play();
}
}



const showLoader = () => {
    document.getElementById('loader').style.display = 'block';
}

const hideLoader = () => {
    document.getElementById('loader').style.display = 'none';
}


const loadAllAudio = (callback) => {
    const audioElements = document.querySelectorAll('audio');

    let loadedCount = 0;

    audioElements.forEach((audio) => {

        audio.addEventListener('canplaythrough', () => {
            loadedCount ++;
            if ( loadedCount === audioElements.length) {
                callback();
            }

        }, { once: true });
    })
}


const addEventListener = () => {

    document.addEventListener('keydown', updateButtonEvent)
}

const removeEventListener = () => {
    document.removeEventListener('keydown', updateButtonEvent)
}







// function to update the visual screen when a genre is selected

const updateScreen = () => {

    selectedGenre = genre.value;
    screenTitle.innerText = "Playing: " + selectedGenre;
    document.getElementById('light').classList.add('animation-flicker');
    genre.style.backgroundColor = "var(--screen)";
    updateSampleLibrary();
    
    }



// event AudioListener, when genre is selected it runs the function to update the visuals

genre.addEventListener('change',  () => {
    updateScreen();
    showLoader();
    loadAllAudio(hideLoader);
})


resetBtn.addEventListener('click', () => {
    window.location.reload();
})


shuffleBtn.addEventListener('click', ()=>{

    const selectionArray = [selectionHouse, selectionTechno, selectionTechHouse];
    const selectionIndex = Math.floor(Math.random()*3)


    console.log(selectionArray[selectionIndex])


    selectedGenre = selectionArray[selectionIndex].value;
genre.value = selectedGenre

    screenTitle.innerText = "Playing: " + selectedGenre;
    document.getElementById('light').classList.add('animation-flicker');
    genre.style.backgroundColor = "var(--screen)";
    updateSampleLibrary();

    showLoader();
    loadAllAudio(hideLoader);

})


