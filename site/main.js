// Creates An Array Of All Elements/Inputs With The Tag "textarea"/"input"
let allTextAreas = document.getElementsByTagName("textarea");
let allInputs = document.getElementsByTagName("input");
let allHiddenPrompts = document.getElementsByClassName("extra");

// Reset All Button + Confirmation Message
document.getElementById("resetAll").addEventListener("click", event => {
if (confirm("Are you sure you want to reset everything?")) {
  for (i = 0; i < allTextAreas.length; i++) {
    allTextAreas[i].value = "";
  }
  for (i = 0; i < allInputs.length; i++) {
    allInputs[i].checked = false;
  }
  for (i = 0; i < allHiddenPrompts.length; i++) {
    allHiddenPrompts[i].hidden = true;
  }
  
} 
})

// Load Information
for (i = 0; i < allTextAreas.length; i++) {
  let retrieve = localStorage.getItem(allTextAreas[i].id);
  allTextAreas[i].value = retrieve;
}
for (i = 0; i < allInputs.length; i++) {
  let retrieve = JSON.parse(localStorage.getItem(allInputs[i].id));
  allInputs[i].checked = retrieve;
}
for (i = 0; i < allHiddenPrompts.length; i++) {
  let retrieve = JSON.parse(localStorage.getItem(allHiddenPrompts[i].id));
  allHiddenPrompts[i].hidden = retrieve;
}

// Save Information Every Minute
window.setInterval(() => {
for (i = 0; i < allTextAreas.length; i++) {
  localStorage.setItem(allTextAreas[i].id, allTextAreas[i].value);
}
for (i = 0; i < allInputs.length; i++) {
  if (allInputs[i].type === "checkbox") {
    localStorage.setItem(allInputs[i].id, allInputs[i].checked);
  }
}
for (i = 0; i < allHiddenPrompts.length; i++) {
    localStorage.setItem(allHiddenPrompts[i].id, allHiddenPrompts[i].hidden);
  }
}, 60000);

// Manual Save
document.getElementById("manualSave").addEventListener("click", event => {
  for (i = 0; i < allTextAreas.length; i++) {
    localStorage.setItem(allTextAreas[i].id, allTextAreas[i].value);
  }
  for (i = 0; i < allInputs.length; i++) {
    localStorage.setItem(allInputs[i].id, allInputs[i].checked);
  }
  for (i = 0; i < allHiddenPrompts.length; i++) {
    localStorage.setItem(allHiddenPrompts[i].id, allHiddenPrompts[i].hidden);
  }
});

// Function To Limit Text Field
function limitText(inputField, numLimit) {
  if (numLimit === -1) {
    return;
  }
  if (inputField.value.length >= numLimit) {
    inputField.value = inputField.value.substring(0, numLimit - 1);
  }
}

// Puts The limitText() Function On All Elements With The Tag "textarea"
for (i = 0; i < allTextAreas.length; i++) {
  allTextAreas[i].addEventListener("keypress", event => {
//      alert(event.target.maxLength);
    limitText(event.target, event.target.maxLength);
  });
}


// d6 Function to randomly generate a number 1-6
function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

/* Table Generators for Mundane Side */

// Mundane Name (First and Second)
document.getElementById("mundaneNameRoll").addEventListener("click", event => {     
  let i = d6();
  let j = d6();
  document.getElementById("mundaneName").value = mundaneNameTable[i][j];
  document.getElementById("mundaneLastName").value = mundaneLastNameTable[i][j]
});
// What Does Being A Girl Mean To You?
document.getElementById("meaningRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("meaning").value = meaningTable[i][j]
});
// What Are You Afraid Of?
document.getElementById("afraidRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("afraid").value = afraidTable[i][j]
});
// What Is Your Wish?
document.getElementById("wishRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("wish").value = wishTable[i][j]
});

// Reset Mundane Inputs
document.getElementById("mundaneReset").addEventListener("click", event => {
  let mundaneTextBoxes = document.getElementsByClassName("mundaneSide");
  for (i = 0; i < mundaneTextBoxes.length; i++) {
    mundaneTextBoxes[i].value = "";
  }
});

/* Table Generators for Magical Side*/

// Changes
document.getElementById("changesRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("changes").value = changesTable[i][j]
});
// Magical Girl Color
document.getElementById("colorRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("color").value = colorTable[i][j]
});
// Magical Theme
document.getElementById("themeRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("theme").value = themeTable[i][j]
});
// Magical Names (First, Second, and Third)
document.getElementById("magicalNameRoll").addEventListener("click", event => {
  let i = d6();
  let j = d6();
  document.getElementById("magicalName").value = magicalNameTable[i][j]
  document.getElementById("magicalSecondName").value = magicalSecondNameTable[i][j]
  document.getElementById("magicalThirdName").value = magicalThirdNameTable[i][j]
});

// Reset Magical Inputs
document.getElementById("magicalReset").addEventListener("click", event => {
let magicalTextBoxes = document.getElementsByClassName("magicalSide");
for (i = 0; i < magicalTextBoxes.length; i++) {
  magicalTextBoxes[i].value = "";
}
});

/*Hope Shift Selection*/

// Prompt to Select Hope Shift After All Three hopeMarks are Checked
let hopeMarks = document.getElementsByClassName("hopeMarks");
let hopeShifts = document.getElementsByClassName("hopeShifts");

//Alert for whether a Great Hope or Hope Shift time occurs
for (i = 0; i < hopeMarks.length; i++) {
hopeMarks[i].addEventListener("change", event => {
  
  let allHopeMarks = true; 
  for (i = 0; i < hopeMarks.length; i++) {
    allHopeMarks = allHopeMarks && hopeMarks[i].checked
  }
  
  let allHopeShifts = true; 
  for (i = 0; i < hopeShifts.length; i++) {
    allHopeShifts = allHopeShifts && hopeShifts[i].checked
  }

  if (allHopeMarks && allHopeShifts) {
    alert("A moment of Great Hope has presented itself!")
    document.getElementById("greatHope").hidden = false;
  } else if (allHopeMarks) {
    alert("Time To Pick A Hope Shift!")
  }
});
}

// Once a Hope Shift is selected, the hopeMarks clear
for (i = 0; i < hopeShifts.length; i++) {
hopeShifts[i].addEventListener("change", event => {
  for (j = 0; j < hopeMarks.length; j++) {
    hopeMarks[j].checked = false;
  }
});
}

//Select and Confirm Great Hope Option, Clear all hopeMarks and hopeShifts
let greatHope = document.getElementsByClassName("greatHope");
for (i = 0; i < greatHope.length; i++) {
greatHope[i].addEventListener("change", event => {
  if(confirm("Are you sure this is the choice you wish to make?")) {
    for (j = 0; j < hopeShifts.length; j++) {
      hopeShifts[j].checked = false;
      for (k = 0; k < hopeMarks.length; k++) {
        hopeMarks[k].checked = false;
      }
    }
  }
});
}

/*Magic Shift Selection*/

//Prompt to Select Magic Shift After All Three magicMarks are Checked.
let magicMarks = document.getElementsByClassName("magicMarks");
let magicShifts = document.getElementsByClassName("magicShifts");
let extremeShift = document.getElementById("extremeShift");

//Alert for whether an Extreme Shift or Magic Shift time occurs
for (i = 0; i < magicMarks.length; i++) {
magicMarks[i].addEventListener("change", event => {
  
  let allMagicMarks = true;
  for (i = 0; i < magicMarks.length; i++) {
    allMagicMarks = allMagicMarks && magicMarks[i].checked;
  }
  let allMagicShifts = true;
  for (i = 0; i < magicShifts.length; i++) {
    allMagicShifts = allMagicShifts && magicShifts[i].checked;
  }

  if (allMagicMarks && allMagicShifts) {
    alert("An Extreme Shift has presented itself!")
    extremeShift.hidden = false;
  } else if (allMagicMarks) {
    alert("Time To Pick A Magic Shift!")
  }
});
}
// Once a Magic Shift is selected, the magicMarks clear
for (i = 0; i < magicShifts.length; i++) {
magicShifts[i].addEventListener("change", event => {
  for (j = 0; j < magicMarks.length; j++) {
    magicMarks[j].checked = false;
  }
})
}

/*Trauma Shift Selection*/

//Prompt to Select Trauma Shift After All Three traumaMarks are Checked.
let traumaMarks = document.getElementsByClassName("traumaMarks");
let traumaShifts = document.getElementsByClassName("traumaShifts");

for (i = 0; i < traumaMarks.length; i++) {
traumaMarks[i].addEventListener("change", event => {
  let allTraumaMarks = true;
  for (i = 0; i < traumaMarks.length; i++) {
      allTraumaMarks = allTraumaMarks && traumaMarks[i].checked;
  }
  let allTraumaShifts = true;
  for (i = 0; i < traumaShifts.length; i++) {
      allTraumaShifts = allTraumaShifts && traumaShifts[i].checked;
  }
  if (allTraumaMarks && allTraumaShifts) {
    alert("An Extreme Shift has presented itself!")
    extremeShift.hidden = false;
  } else if (allTraumaMarks) {
    alert("Time To Pick A Trauma Shift!")
  }
});
}

// Once a Trauma Shift is selected, the traumaMarks clear
for (i = 0; i < traumaShifts.length; i++) {
traumaShifts[i].addEventListener("change", event => {
  for (j = 0; j < traumaMarks.length; j++) {
    traumaMarks[j].checked = false;
  }
})
}

//Select and Confirm Extreme Shift Option, Clear all magicMarks, traumaMarks, magicShifts, and traumaShifts
let allExtremeShifts = document.getElementsByClassName("extremeShift");
for (i = 0; i < allExtremeShifts.length; i++) {
allExtremeShifts[i].addEventListener("change", event => {
  if(confirm("Are you sure this is the choice you wish to make?")) {
    for (j = 0; j < magicShifts.length; j++) {
      magicShifts[j].checked = false;
      traumaShifts[j].checked = false;
      for (k = 0; k < magicMarks.length; k++) {
        magicMarks[k].checked = false;
        traumaMarks[k].checked = false;
      }
    }
  }
});
}