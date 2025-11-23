// js/nps-by-state.js

// ------------------------
// Data: NPS / big pass sites
// ------------------------
const npsSites = [
  // ===== NEVADA / nearby =====
  {
    id: "nv-deathvalley",
    state: "CA/NV",
    stateCode: "NV",
    name: "Death Valley National Park",
    city: "Near Furnace Creek, CA/NV",
    lat: 36.5054,
    lng: -117.0794,
    estHours: "1–2 days",
    approxCost: "Covered by NPS pass",
    notes: "Lowest point in North America, big desert vistas. Very hot in summer!"
  },
  {
    id: "nv-greatbasin",
    state: "NV",
    stateCode: "NV",
    name: "Great Basin National Park",
    city: "Near Baker, NV",
    lat: 38.9833,
    lng: -114.2986,
    estHours: "1–2 days",
    approxCost: "Park is free; cave tours extra",
    notes: "Lehman Caves, Wheeler Peak, dark skies. Smaller but awesome."
  },

  // ===== ARIZONA =====
  {
    id: "az-grandcanyon",
    state: "AZ",
    stateCode: "AZ",
    name: "Grand Canyon National Park (South Rim)",
    city: "Grand Canyon Village, AZ",
    lat: 36.0532,
    lng: -112.1222,
    estHours: "1–3+ days",
    approxCost: "Covered by NPS pass",
    notes: "Classic big canyon views, shuttle buses, overlooks."
  },
  {
    id: "az-saguaro",
    state: "AZ",
    stateCode: "AZ",
    name: "Saguaro National Park",
    city: "Tucson, AZ (East & West districts)",
    lat: 32.1741,
    lng: -110.7374,
    estHours: "Half day – 1 day",
    approxCost: "Covered by NPS pass",
    notes: "Huge saguaro cactus forests, scenic drives and short hikes."
  },
  {
    id: "az-petrified",
    state: "AZ",
    stateCode: "AZ",
    name: "Petrified Forest National Park",
    city: "Near Holbrook, AZ",
    lat: 35.0656,
    lng: -109.7874,
    estHours: "~3 hours",
    approxCost: "Covered by NPS pass",
    notes: "Painted Desert, fossilized wood, easy overlooks."
  },

  // ===== NEW MEXICO =====
  {
    id: "nm-carlsbad",
    state: "NM",
    stateCode: "NM",
    name: "Carlsbad Caverns National Park",
    city: "Carlsbad, NM",
    lat: 32.1479,
    lng: -104.5567,
    estHours: "Half day – 1 day",
    approxCost: "Cave tickets (pass covers entrance portion)",
    notes: "Huge underground caverns, elevators & trails."
  },
  {
    id: "nm-white-sands",
    state: "NM",
    stateCode: "NM",
    name: "White Sands National Park",
    city: "Near Alamogordo, NM",
    lat: 32.7791,
    lng: -106.1719,
    estHours: "2–4 hours",
    approxCost: "Covered by NPS pass",
    notes: "White gypsum dunes; sledding and short walks."
  },
  {
    id: "nm-petroglyph",
    state: "NM",
    stateCode: "NM",
    name: "Petroglyph National Monument",
    city: "Albuquerque, NM",
    lat: 35.1735,
    lng: -106.7808,
    estHours: "1–3 hours",
    approxCost: "Covered by NPS pass (parking/fees)",
    notes: "Short hikes with rock carvings and city views."
  },

  // ===== TEXAS =====
  {
    id: "tx-bigbend",
    state: "TX",
    stateCode: "TX",
    name: "Big Bend National Park",
    city: "Near Terlingua, TX",
    lat: 29.2500,
    lng: -103.2500,
    estHours: "2–4+ days",
    approxCost: "Covered by NPS pass",
    notes: "Border river, desert, mountains; very remote drive."
  },
  {
    id: "tx-guadalupe",
    state: "TX",
    stateCode: "TX",
    name: "Guadalupe Mountains National Park",
    city: "Salt Flat, TX",
    lat: 31.9230,
    lng: -104.8686,
    estHours: "1–2 days",
    approxCost: "Covered by NPS pass",
    notes: "High desert mountains, hiking, views."
  },
  {
    id: "tx-sanantonio-missions",
    state: "TX",
    stateCode: "TX",
    name: "San Antonio Missions National Historical Park",
    city: "San Antonio, TX",
    lat: 29.3260,
    lng: -98.4570,
    estHours: "2–4 hours",
    approxCost: "Free / pass not needed but NPS site",
    notes: "Chain of historic Spanish missions along the river."
  },

  // ===== LOUISIANA =====
  {
    id: "la-jeanlafitte",
    state: "LA",
    stateCode: "LA",
    name: "Jean Lafitte National Historical Park & Preserve (Barataria Preserve)",
    city: "Near Marrero, LA",
    lat: 29.7638,
    lng: -90.1134,
    estHours: "2–4 hours",
    approxCost: "Free; some tours may cost",
    notes: "Boardwalks through Louisiana wetlands, gators & birds."
  },

  // ===== COLORADO =====
  {
    id: "co-rmnp",
    state: "CO",
    stateCode: "CO",
    name: "Rocky Mountain National Park",
    city: "Near Estes Park, CO",
    lat: 40.3772,
    lng: -105.5217,
    estHours: "1–3 days",
    approxCost: "Covered by NPS pass (timed entry in some seasons)",
    notes: "Alpine lakes, elk, Trail Ridge Road (seasonal)."
  },
  {
    id: "co-mesaverde",
    state: "CO",
    stateCode: "CO",
    name: "Mesa Verde National Park",
    city: "Near Cortez, CO",
    lat: 37.3443,
    lng: -108.4244,
    estHours: "1–2 days",
    approxCost: "Covered by NPS pass; some tours extra",
    notes: "Ancient cliff dwellings and mesa views."
  },

  // ===== UTAH =====
  {
    id: "ut-zion",
    state: "UT",
    stateCode: "UT",
    name: "Zion National Park",
    city: "Springdale, UT",
    lat: 37.2002,
    lng: -112.9871,
    estHours: "2–3 days",
    approxCost: "Covered by NPS pass",
    notes: "Canyon views, shuttles, famous hikes."
  },
  {
    id: "ut-bryce",
    state: "UT",
    stateCode: "UT",
    name: "Bryce Canyon National Park",
    city: "Near Bryce, UT",
    lat: 37.6284,
    lng: -112.1653,
    estHours: "1–2 days",
    approxCost: "Covered by NPS pass",
    notes: "Hoodoos and rim overlooks; great sunrise."
  },
  {
    id: "ut-arches",
    state: "UT",
    stateCode: "UT",
    name: "Arches National Park",
    city: "Near Moab, UT",
    lat: 38.6164,
    lng: -109.6200,
    estHours: "1–2 days",
    approxCost: "Covered by NPS pass (timed entry some seasons)",
    notes: "Natural stone arches, lots of viewpoints."
  },

  // ===== CALIFORNIA =====
  {
    id: "ca-yosemite",
    state: "CA",
    stateCode: "CA",
    name: "Yosemite National Park",
    city: "Yosemite Valley, CA",
    lat: 37.7485,
    lng: -119.5886,
    estHours: "2–4+ days",
    approxCost: "Covered by NPS pass (reservations often needed)",
    notes: "Granite cliffs, waterfalls, shuttle system."
  },
  {
    id: "ca-joshuatree",
    state: "CA",
    stateCode: "CA",
    name: "Joshua Tree National Park",
    city: "Near Twentynine Palms, CA",
    lat: 34.1347,
    lng: -116.3131,
    estHours: "1–2 days",
    approxCost: "Covered by NPS pass",
    notes: "Desert views, Joshua trees, night sky."
  }
];

// ------------------------
// DOM references
// ------------------------
const stateSelect = document.getElementById("stateSelect");
const mapFrame = document.getElementById("npsMapFrame");
const mapStateHint = document.getElementById("mapStateHint");
const mapExternalLink = document.getElementById("npsMapExternalLink");
const parkSearch = document.getElementById("parkSearch");
const parkListEl = document.getElementById("parkList");
const parkCountLabel = document.getElementById("parkCountLabel");
const currentStateLabel = document.getElementById("currentStateLabel");

// ------------------------
// Build state list
// ------------------------
const stateMap = {}; // code -> name (basic)
npsSites.forEach(site => {
  if (!stateMap[site.stateCode]) {
    stateMap[site.stateCode] = site.state;
  }
});

// Populate the dropdown
const allOption = document.createElement("option");
allOption.value = "ALL";
allOption.textContent = "All states (show everything)";
stateSelect.appendChild(allOption);

Object.keys(stateMap)
  .sort()
  .forEach(code => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${stateMap[code]} (${code})`;
    stateSelect.appendChild(opt);
  });

// Default
stateSelect.value = "ALL";
currentStateLabel.textContent = "all states";

// ------------------------
// Helper: build Maps URL
// ------------------------
function buildMapsUrlForSite(site) {
  if (
    site.lat != null &&
    site.lng != null &&
    !Number.isNaN(site.lat) &&
    !Number.isNaN(site.lng)
  ) {
    return `https://www.google.com/maps?q=${site.lat},${site.lng}`;
  }
  // fallback to name + state search
  const q = `${site.name}, ${site.state}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}`;
}

// ------------------------
// Render list
// ------------------------
function renderParkList() {
  const selectedState = stateSelect.value;
  const search = parkSearch.value.trim().toLowerCase();

  let filtered = npsSites;

  if (selectedState !== "ALL") {
    filtered = filtered.filter(site => site.stateCode === selectedState);
  }

  if (search) {
    filtered = filtered.filter(site =>
      site.name.toLowerCase().includes(search) ||
      (site.city && site.city.toLowerCase().includes(search)) ||
      (site.notes && site.notes.toLowerCase().includes(search))
    );
  }

  // Update label
  if (selectedState === "ALL") {
    currentStateLabel.textContent = "all states";
  } else {
    currentStateLabel.textContent = stateMap[selectedState] || selectedState;
  }

  parkListEl.innerHTML = "";
  parkCountLabel.textContent =
    filtered.length + (filtered.length === 1 ? " site" : " sites");

  if (!filtered.length) {
    parkListEl.innerHTML =
      '<p class="small-note">Nothing matches those filters yet. Try another state or clear the search.</p>';
    return;
  }

  filtered.forEach(site => {
    const card = document.createElement("div");
    card.className = "stop-card";

    const header = document.createElement("div");
    header.className = "stop-header";

    const nameEl = document.createElement("div");
    nameEl.className = "stop-name";
    nameEl.textContent = site.name;

    const typeEl = document.createElement("div");
    typeEl.className = "stop-type";
    typeEl.textContent = `NPS · ${site.state}`;
    header.appendChild(nameEl);
    header.appendChild(typeEl);
    card.appendChild(header);

    const meta = document.createElement("div");
    meta.className = "stop-meta";

    if (site.city) {
      const whereSpan = document.createElement("span");
      whereSpan.innerHTML = `<strong>Where:</strong> ${site.city}`;
      meta.appendChild(whereSpan);
    }

    const timeSpan = document.createElement("span");
    timeSpan.innerHTML = `<strong>Visit time:</strong> ${site.estHours}`;
    meta.appendChild(timeSpan);

    const costSpan = document.createElement("span");
    costSpan.innerHTML = `<strong>Approx. cost:</strong> ${site.approxCost}`;
    meta.appendChild(costSpan);

    if (
      site.lat != null &&
      site.lng != null &&
      !Number.isNaN(site.lat) &&
      !Number.isNaN(site.lng)
    ) {
      const coordSpan = document.createElement("span");
      coordSpan.innerHTML = `<strong>Lat/Lng:</strong> ${site.lat.toFixed(
        4
      )}, ${site.lng.toFixed(4)}`;
      meta.appendChild(coordSpan);
    }

    const notesSpan = document.createElement("span");
    notesSpan.innerHTML = `<strong>Notes:</strong> ${site.notes}`;
    meta.appendChild(notesSpan);

    card.appendChild(meta);

    // Buttons row
    const btnRow = document.createElement("div");
    btnRow.className = "stop-buttons";
    btnRow.style.marginTop = "0.4rem";

    const showBtn = document.createElement("button");
    showBtn.type = "button";
    showBtn.className = "btn small ghost";
    showBtn.textContent = "Show on map";
    showBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      centerMapOnSite(site);
    });

    const openBtn = document.createElement("a");
    openBtn.className = "btn small primary";
    openBtn.textContent = "Open in Google Maps";
    openBtn.href = buildMapsUrlForSite(site);
    openBtn.target = "_blank";
    openBtn.rel = "noopener";

    btnRow.appendChild(showBtn);
    btnRow.appendChild(openBtn);
    card.appendChild(btnRow);

    // Clicking the card also centers the map
    card.addEventListener("click", () => centerMapOnSite(site));

    parkListEl.appendChild(card);
  });
}

// ------------------------
// Map behavior
// ------------------------
function centerMapOnState() {
  const code = stateSelect.value;

  if (code === "ALL") {
    const baseUrl =
      "https://www.google.com/maps?q=United+States+national+parks";
    mapFrame.src = baseUrl + "&z=3&output=embed";
    mapExternalLink.href = baseUrl;
    mapStateHint.textContent = "Whole U.S. overview";
    return;
  }

  const stateName = stateMap[code] || code;
  const q = `${stateName} national parks`;
  const baseUrl = "https://www.google.com/maps?q=" + encodeURIComponent(q);

  // zoom in closer to that state
  mapFrame.src = baseUrl + "&z=5&output=embed";
  mapExternalLink.href = baseUrl;
  mapStateHint.textContent = `Centered on ${stateName}`;
}

function centerMapOnSite(site) {
  const baseUrl = buildMapsUrlForSite(site);
  mapFrame.src = baseUrl + "&z=9&output=embed";
  mapExternalLink.href = baseUrl;
  mapStateHint.textContent = `Centered on ${site.name}`;
}

// ------------------------
// Events & init
// ------------------------
stateSelect.addEventListener("change", () => {
  centerMapOnState();
  renderParkList();
});

parkSearch.addEventListener("input", () => {
  renderParkList();
});

// Initial render
centerMapOnState();
renderParkList();