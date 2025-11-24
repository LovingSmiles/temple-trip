// =========================
// Temple Road Trip Planner
// =========================

// ---------- Helper: build place query for maps ----------
function buildPlaceQuery(stopLike) {
    const parts = [];
  
    if (stopLike.name) parts.push(stopLike.name.trim());
  
    if (stopLike.type === "temple") parts.push("Temple");
    if (stopLike.type === "nps") parts.push("National Park");
    if (stopLike.type === "museum") parts.push("Museum");
    if (stopLike.type === "historic") parts.push("Historic site");
  
    if (stopLike.location) parts.push(stopLike.location.trim());
  
    const q = parts.join(", ").replace(/\s+/g, " ");
    return q || null;
  }
  
  const PENDING_PARK_STOP_KEY = "pendingParkStopForTempleTrip";

  // ---------- Default itinerary (your booked temples) ----------
  const defaultStops = [
    {
      id: "stop-las-vegas",
      name: "Las Vegas Nevada Temple",
      type: "temple",
      location: "Las Vegas, NV",
      arrival: "2025-12-11T08:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 36.174583,
      lng: -115.020056,
      summaryNotes: "First temple of the trip.",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-phoenix",
      name: "Phoenix Arizona Temple",
      type: "temple",
      location: "Phoenix, AZ",
      arrival: "2025-12-12T07:30",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 33.698417,
      lng: -112.172306,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-mesa",
      name: "Mesa Arizona Temple",
      type: "temple",
      location: "Mesa, AZ",
      arrival: "2025-12-12T10:45",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 33.412867,
      lng: -111.819569,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-gilbert",
      name: "Gilbert Arizona Temple",
      type: "temple",
      location: "Gilbert, AZ",
      arrival: "2025-12-12T14:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 33.2912,
      lng: -111.7370,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-snowflake",
      name: "Snowflake Arizona Temple",
      type: "temple",
      location: "Snowflake, AZ",
      arrival: "2025-12-13T08:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 34.502513,
      lng: -110.111604,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-albuquerque",
      name: "Albuquerque New Mexico Temple",
      type: "temple",
      location: "Albuquerque, NM",
      arrival: "2025-12-13T17:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 35.167601,
      lng: -106.525178,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-lubbock",
      name: "Lubbock Texas Temple",
      type: "temple",
      location: "Lubbock, TX",
      arrival: "2025-12-16T18:30",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 33.5290,
      lng: -101.9411,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-dallas",
      name: "Dallas Texas Temple",
      type: "temple",
      location: "Dallas, TX",
      arrival: "2025-12-17T07:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 32.9122,
      lng: -96.7712,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-san-antonio",
      name: "San Antonio Texas Temple",
      type: "temple",
      location: "San Antonio, TX",
      arrival: "2025-12-18T09:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 29.6415,
      lng: -98.4888,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-houston",
      name: "Houston Texas Temple",
      type: "temple",
      location: "Houston, TX",
      arrival: "2025-12-19T08:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 29.9996,
      lng: -95.5333,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-baton-rouge",
      name: "Baton Rouge Louisiana Temple",
      type: "temple",
      location: "Baton Rouge, LA",
      arrival: "2025-12-20T09:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 30.362664,
      lng: -91.108385,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-denver",
      name: "Denver Colorado Temple",
      type: "temple",
      location: "Centennial (Denver), CO",
      arrival: "2025-12-23T08:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 39.5857,
      lng: -104.9560,
      summaryNotes: "",
      detailNotes: "",
      done: false
    },
    {
      id: "stop-fort-collins",
      name: "Fort Collins Colorado Temple",
      type: "temple",
      location: "Fort Collins, CO",
      arrival: "2025-12-23T19:00",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat: 40.4942,
      lng: -105.0111,
      summaryNotes: "",
      detailNotes: "",
      done: false
    }
  ];
  
  // ---------- Ideas catalog (parks, museums, historic, etc.) ----------
  const ideasCatalog = [
    // Nevada / nearby
    {
      id: "idea-hoover",
      name: "Hoover Dam",
      state: "NV",
      city: "Boulder City",
      type: "historic",
      lat: 36.0161,
      lng: -114.7377,
      estHours: 2.5,
      costMin: 10,
      costMax: 30,
      hours: "Visitor center usually ~9 AM–5 PM",
      notes:
        "Huge Depression-era dam on the Colorado River. Great views, tours available, security checkpoint before crossing."
    },
    {
      id: "idea-lakemead",
      name: "Lake Mead National Recreation Area",
      state: "NV",
      city: "Near Hoover Dam",
      type: "nps",
      lat: 36.039,
      lng: -114.765,
      estHours: 2,
      costMin: 0,
      costMax: 0,
      hours: "Open 24/7; some marinas/visitor centers have set hours",
      notes: "NPS site; your park pass should cover entrance. Scenic pullouts, short walks, and overlooks."
    },
  
    // Utah (en route)
    {
      id: "idea-zion",
      name: "Zion Canyon Visitor Center (Zion National Park)",
      state: "UT",
      city: "Springdale",
      type: "nps",
      lat: 37.20019,
      lng: -112.987139,
      estHours: 3,
      costMin: 0,
      costMax: 0,
      hours: "Visitor center usually daytime; park open 24/7",
      notes:
        "Main gateway into Zion. Shuttles to the canyon; amazing views even with short walks. Parking fills early in busy seasons."
    },
  
    // Arizona
    {
      id: "idea-petrified",
      name: "Petrified Forest National Park",
      state: "AZ",
      city: "Near Holbrook / I-40",
      type: "nps",
      lat: 35.0656,
      lng: -109.7874,
      estHours: 3,
      costMin: 0,
      costMax: 0,
      hours: "Daylight hours (roughly 8 AM–5 PM depending on season)",
      notes: "Scenic drive with overlooks, short hikes among fossilized wood and painted desert views. NPS – pass works."
    },
    {
      id: "idea-desertbot",
      name: "Desert Botanical Garden",
      state: "AZ",
      city: "Phoenix",
      type: "museum",
      lat: 33.4629,
      lng: -111.9470,
      estHours: 2,
      costMin: 20,
      costMax: 40,
      hours: "Typically 8 AM–8 PM (varies by season/events)",
      notes:
        "Beautiful desert plants, easy walking paths, night lighting at certain times. Good in the evening after temples."
    },
  
    // New Mexico
    {
      id: "idea-petroglyph",
      name: "Petroglyph National Monument",
      state: "NM",
      city: "Albuquerque (west side)",
      type: "nps",
      lat: 35.1735,
      lng: -106.7808,
      estHours: 2,
      costMin: 0,
      costMax: 0,
      hours: "Visitor center during daytime; trailheads often sunrise–sunset",
      notes: "Short hikes with ancient rock carvings and views over Albuquerque. NPS site; pass should cover parking fees."
    },
    {
      id: "idea-oldtownabq",
      name: "Old Town Albuquerque",
      state: "NM",
      city: "Albuquerque",
      type: "historic",
      lat: 35.0958,
      lng: -106.6699,
      estHours: 2,
      costMin: 0,
      costMax: 30,
      hours: "Shops usually 10 AM–6 PM; plaza open later",
      notes: "Historic plaza, church, local shops. Nice place to walk, eat, and grab souvenirs."
    },
  
    // Texas – Panhandle / Amarillo area
    {
      id: "idea-paloduro",
      name: "Palo Duro Canyon (Texas state park)",
      state: "TX",
      city: "Near Amarillo",
      type: "other",
      lat: 34.9372,
      lng: -101.6460,
      estHours: 3,
      costMin: 8,
      costMax: 15,
      hours: "Roughly 7 AM–10 PM (check exact times)",
      notes:
        "Deep canyon sometimes called “the Grand Canyon of Texas.” Not NPS (state park), but amazing views. Day-use fee per person."
    },
  
    // Texas – San Antonio
    {
      id: "idea-alamo",
      name: "The Alamo",
      state: "TX",
      city: "San Antonio",
      type: "historic",
      lat: 29.425967,
      lng: -98.486141,
      estHours: 2,
      costMin: 0,
      costMax: 30,
      hours: "Typically 9 AM–5:30 PM",
      notes: "Famous Texas Revolution site. Church and grounds, small museum, guided tours available."
    },
    {
      id: "idea-riverwalk",
      name: "San Antonio River Walk",
      state: "TX",
      city: "San Antonio",
      type: "other",
      lat: 29.4241,
      lng: -98.4936,
      estHours: 2,
      costMin: 0,
      costMax: 40,
      hours: "Open 24/7; shops and restaurants have their own hours",
      notes: "Walk along the river, lights at night, food and boat rides. Easy evening activity after the temple."
    },
    {
      id: "idea-missions",
      name: "San Antonio Missions National Historical Park",
      state: "TX",
      city: "San Antonio (south side)",
      type: "nps",
      lat: 29.326,
      lng: -98.457,
      estHours: 3,
      costMin: 0,
      costMax: 0,
      hours: "Mission grounds generally 9 AM–5 PM",
      notes:
        "Four Spanish colonial missions along the river. NPS site; free with your pass. Churches still used by local congregations."
    },
  
    // Texas – Houston
    {
      id: "idea-nasa",
      name: "Space Center Houston (NASA Visitor Center)",
      state: "TX",
      city: "Houston",
      type: "museum",
      lat: 29.55188,
      lng: -95.09834,
      estHours: 4,
      costMin: 30,
      costMax: 60,
      hours: "Roughly 10 AM–5 PM weekdays; slightly longer on weekends",
      notes:
        "Official visitor center for Johnson Space Center. Spacecraft, tram tours, lots of exhibits. Plan several hours if you go."
    },
    {
      id: "idea-hmns",
      name: "Houston Museum of Natural Science",
      state: "TX",
      city: "Houston",
      type: "museum",
      lat: 29.7229,
      lng: -95.3896,
      estHours: 3,
      costMin: 25,
      costMax: 50,
      hours: "Usually 9 AM–5 PM (later some days)",
      notes: "Big museum with dinosaurs, gems, planetarium, etc. Close to Hermann Park and other museums."
    },
  
    // Louisiana – New Orleans / Baton Rouge
    {
      id: "idea-frenchq",
      name: "French Quarter",
      state: "LA",
      city: "New Orleans",
      type: "historic",
      lat: 29.9584,
      lng: -90.0640,
      estHours: 3,
      costMin: 0,
      costMax: 40,
      hours: "Streets are open 24/7; many shops 10 AM–late",
      notes:
        "Historic streets, iron balconies, music, food. You can choose quieter parts away from Bourbon if you want less chaos."
    },
    {
      id: "idea-jacksonsq",
      name: "Jackson Square & St. Louis Cathedral",
      state: "LA",
      city: "New Orleans",
      type: "historic",
      lat: 29.9575,
      lng: -90.0620,
      estHours: 1.5,
      costMin: 0,
      costMax: 20,
      hours: "Square open daily; cathedral usually open daytime",
      notes:
        "Classic New Orleans view facing the cathedral. Street performers, artists, and Mississippi River just behind you."
    },
    {
      id: "idea-ww2",
      name: "The National WWII Museum",
      state: "LA",
      city: "New Orleans",
      type: "museum",
      lat: 29.9434,
      lng: -90.0700,
      estHours: 4,
      costMin: 30,
      costMax: 50,
      hours: "Usually 9 AM–5 PM",
      notes:
        "Huge museum telling the story of World War II. Very moving; plan several hours if you go. Not covered by park pass."
    },
  
    // Colorado – Denver / Fort Collins
    {
      id: "idea-rmnp",
      name: "Rocky Mountain National Park (Beaver Meadows entrance)",
      state: "CO",
      city: "Estes Park",
      type: "nps",
      lat: 40.3772,
      lng: -105.5217,
      estHours: 4,
      costMin: 0,
      costMax: 0,
      hours: "Open 24/7; timed-entry system certain seasons",
      notes:
        "High mountain scenery, elk, lakes, many pullouts. NPS site – your pass works; watch weather in December for snow."
    },
    {
      id: "idea-denver-museum",
      name: "Denver Museum of Nature & Science",
      state: "CO",
      city: "Denver",
      type: "museum",
      lat: 39.7487,
      lng: -104.9420,
      estHours: 3,
      costMin: 20,
      costMax: 40,
      hours: "Usually around 9 AM–5 PM",
      notes:
        "Science museum with wildlife dioramas, space exhibits, IMAX, and views over Denver from the terrace."
    }
  ];
  
  // ---------- State & DOM refs ----------
  const LS_KEY = "templeRoadtripStops_v4";
  const PENDING_PARK_STOP_KEY = "pendingParkStopForTempleTrip";
  
  let stops = [];
  let currentStopId = null;
  let currentIdeaId = null;
  
  // Form
  const stopForm = document.getElementById("stopForm");
  const editStopIdInput = document.getElementById("editStopId");
  const saveStopBtn = document.getElementById("saveStopBtn");
  const newStopBtn = document.getElementById("newStopBtn");
  const resetFormBtn = document.getElementById("resetFormBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  
  // List / stats
  const stopListEl = document.getElementById("stopList");
  const stopCountLabel = document.getElementById("stopCountLabel");
  const statsBox = document.getElementById("statsBox");
  
  // Map & notes
  const mapFrame = document.getElementById("mapFrame");
  const mapHint = document.getElementById("mapHint");
  const mapExternalLink = document.getElementById("mapExternalLink");
  const notesStopLabel = document.getElementById("notesStopLabel");
  const detailNotesInput = document.getElementById("detailNotesInput");
  
  // Ideas tab
  const ideaSearchInput = document.getElementById("ideaSearchInput");
  const ideaStateFilter = document.getElementById("ideaStateFilter");
  const ideaTypeFilter = document.getElementById("ideaTypeFilter");
  const ideaListEl = document.getElementById("ideaList");
  const ideaCountLabel = document.getElementById("ideaCountLabel");
  const ideasMapFrame = document.getElementById("ideasMapFrame");
  const ideasMapHint = document.getElementById("ideasMapHint");
  const ideasMapExternalLink = document.getElementById("ideasMapExternalLink");
  const ideaDetailBox = document.getElementById("ideaDetailBox");
  
  // Tabs
  const tabButtons = document.querySelectorAll(".nav-tab");
  const tabItinerary = document.getElementById("tab-itinerary");
  const tabIdeas = document.getElementById("tab-ideas");
  
  // ---------- Load / save ----------
  function importPendingParkStop() {
    let raw;
    try {
      raw = localStorage.getItem(PENDING_PARK_STOP_KEY);
    } catch (e) {
      raw = null;
    }
    if (!raw) return;
  
    // Clear it so it doesn't keep re-adding
    localStorage.removeItem(PENDING_PARK_STOP_KEY);
  
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      return;
    }
    if (!data || !data.name) return;
  
    const lat = typeof data.lat === "number" ? data.lat : null;
    const lng = typeof data.lng === "number" ? data.lng : null;
  
    const locationPieces = [];
    if (data.shortRegion) locationPieces.push(data.shortRegion);
    if (data.stateCodes && data.stateCodes.length === 1) {
      locationPieces.push(data.stateCodes[0]);
    }
    const location =
      locationPieces.join(", ") || "National Park stop (set city later)";
  
    const summaryNotes = (
      "National Park stop imported from Parks Explorer. " +
      (data.notes || "")
    ).trim();
  
    const newStop = {
      id: "stop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      name: data.name,
      type: "nps",
      location,
      arrival: "",
      departure: "",
      costMin: 0,
      costMax: 0,
      lat,
      lng,
      summaryNotes,
      detailNotes: "",
      done: false
    };
  
    stops.push(newStop);
    saveStops();
    sortStops();
    currentStopId = newStop.id;
    renderStopList();
    loadDetailForCurrent();
    setFormMode("edit", newStop);
  }
  function loadStops() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        stops = JSON.parse(raw);
      } else {
        stops = JSON.parse(JSON.stringify(defaultStops));
      }
    } catch (e) {
      stops = JSON.parse(JSON.stringify(defaultStops));
    }
  
    stops.forEach((s) => {
      if (typeof s.summaryNotes !== "string") s.summaryNotes = "";
      if (typeof s.detailNotes !== "string") s.detailNotes = "";
      if (typeof s.done !== "boolean") s.done = false;
    });
  }
  
  function saveStops() {
    localStorage.setItem(LS_KEY, JSON.stringify(stops));
    updateStats();
  }
  
  // ---------- Sorting & formatting ----------
  function sortStops() {
    stops.sort((a, b) => {
      if (!a.arrival && !b.arrival) return 0;
      if (!a.arrival) return 1;
      if (!b.arrival) return -1;
      return new Date(a.arrival) - new Date(b.arrival);
    });
  }
  
  function typeLabel(type) {
    if (type === "temple") return "Temple";
    if (type === "nps") return "National Park / NPS";
    if (type === "museum") return "Museum / historic";
    if (type === "drive") return "Drive";
    if (type === "historic") return "Historic";
    return "Other";
  }
  
  function formatDT(dt) {
    if (!dt) return "No time set";
    const d = new Date(dt);
    if (Number.isNaN(d.getTime())) return "No time set";
    return d.toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }
  
  function formatCost(min, max) {
    min = Number(min) || 0;
    max = Number(max) || 0;
    if (min === 0 && max === 0) return "$0";
    if (max === 0 || min === max) return "$" + min;
    return `$${min}–$${max}`;
  }
  
  // ---------- Stats ----------
  function updateStats() {
    const total = stops.length;
    const temples = stops.filter((s) => s.type === "temple").length;
    const parks = stops.filter((s) => s.type === "nps").length;
    const museums = stops.filter((s) => s.type === "museum").length;
    const done = stops.filter((s) => s.done).length;
  
    let min = 0,
      max = 0;
    stops.forEach((s) => {
      min += Number(s.costMin) || 0;
      max += Number(s.costMax || s.costMin || 0);
    });
  
    const budgetMin = 2000;
    const budgetMax = 2500;
    const leftMin = Math.max(budgetMin - max, 0);
    const leftMax = Math.max(budgetMax - min, 0);
  
    statsBox.innerHTML = `
      <div><strong>Stops:</strong> ${total} total — ${temples} temples, ${parks} NPS, ${museums} museums/historic.</div>
      <div style="margin-top:.25rem;"><strong>Completed:</strong> ${done} stop${done === 1 ? "" : "s"} checked off.</div>
      <div style="margin-top:.3rem;">
        <strong>Extra activity costs planned:</strong> ${formatCost(min, max)}<br>
        <strong>Budget left for gas/food/etc. (rough guess):</strong> $${leftMin.toLocaleString()}–$${leftMax.toLocaleString()}.
      </div>
    `;
  }
  
  // ---------- Form mode ----------
  function setFormMode(mode, stop = null) {
    if (mode === "edit" && stop) {
      editStopIdInput.value = stop.id;
      saveStopBtn.textContent = "Save changes";
  
      document.getElementById("nameInput").value = stop.name || "";
      document.getElementById("typeInput").value = stop.type || "other";
      document.getElementById("locationInput").value = stop.location || "";
      document.getElementById("arrivalInput").value = stop.arrival || "";
      document.getElementById("departInput").value = stop.departure || "";
      document.getElementById("costMinInput").value = stop.costMin ?? "";
      document.getElementById("costMaxInput").value = stop.costMax ?? "";
      document.getElementById("latInput").value =
        stop.lat === null || stop.lat === undefined ? "" : stop.lat;
      document.getElementById("lngInput").value =
        stop.lng === null || stop.lng === undefined ? "" : stop.lng;
      document.getElementById("summaryNotesInput").value = stop.summaryNotes || "";
    } else {
      editStopIdInput.value = "";
      saveStopBtn.textContent = "Add stop";
      stopForm.reset();
      document.getElementById("typeInput").value = "temple";
    }
  }
  
  function resetFormFieldsOnly() {
    const keepId = editStopIdInput.value;
    stopForm.reset();
    document.getElementById("typeInput").value = "temple";
    editStopIdInput.value = keepId;
  }
  
  // ---------- Render stop list ----------
  function renderStopList() {
    stopListEl.innerHTML = "";
    sortStops();
    stopCountLabel.textContent =
      stops.length + (stops.length === 1 ? " stop" : " stops");
  
    stops.forEach((stop) => {
      const card = document.createElement("div");
      card.className = "stop-card" + (stop.id === currentStopId ? " active" : "");
      card.dataset.stopId = stop.id;
  
      const header = document.createElement("div");
      header.className = "stop-header";
  
      const nameEl = document.createElement("div");
      nameEl.className = "stop-name";
      nameEl.textContent = stop.name || "Untitled stop";
  
      const typeEl = document.createElement("div");
      typeEl.className = "stop-type";
      typeEl.textContent = typeLabel(stop.type);
  
      header.appendChild(nameEl);
      header.appendChild(typeEl);
      card.appendChild(header);
  
      const meta = document.createElement("div");
      meta.className = "stop-meta";
  
      const whenSpan = document.createElement("span");
      whenSpan.innerHTML = `<strong>Arrive:</strong> ${formatDT(stop.arrival)}`;
      meta.appendChild(whenSpan);
  
      if (stop.departure) {
        const departSpan = document.createElement("span");
        departSpan.innerHTML = `<strong>Depart:</strong> ${formatDT(
          stop.departure
        )}`;
        meta.appendChild(departSpan);
      }
  
      const whereSpan = document.createElement("span");
      whereSpan.innerHTML = `<strong>Where:</strong> ${
        stop.location || "Unknown"
      }`;
      meta.appendChild(whereSpan);
  
      const costSpan = document.createElement("span");
      costSpan.innerHTML = `<strong>Extra cost:</strong> ${formatCost(
        stop.costMin,
        stop.costMax
      )}`;
      meta.appendChild(costSpan);
  
      if (
        stop.lat != null &&
        stop.lng != null &&
        !Number.isNaN(stop.lat) &&
        !Number.isNaN(stop.lng)
      ) {
        const coordSpan = document.createElement("span");
        coordSpan.innerHTML = `<strong>Lat/Lng:</strong> ${stop.lat.toFixed(
          4
        )}, ${stop.lng.toFixed(4)}`;
        meta.appendChild(coordSpan);
      }
  
      card.appendChild(meta);
  
      const footer = document.createElement("div");
      footer.className = "stop-footer";
  
      const left = document.createElement("div");
      left.className = "stop-left";
  
      const doneLabel = document.createElement("label");
      doneLabel.className = "small";
      doneLabel.style.display = "flex";
      doneLabel.style.alignItems = "center";
      doneLabel.style.gap = ".25rem";
  
      const doneCheckbox = document.createElement("input");
      doneCheckbox.type = "checkbox";
      doneCheckbox.checked = !!stop.done;
      doneCheckbox.addEventListener("click", (ev) => {
        ev.stopPropagation();
        stop.done = doneCheckbox.checked;
        saveStops();
        renderStopList();
      });
  
      doneLabel.appendChild(doneCheckbox);
      doneLabel.appendChild(document.createTextNode("Done"));
      left.appendChild(doneLabel);
  
      if (stop.done) {
        const doneBadge = document.createElement("span");
        doneBadge.className = "badge done-badge";
        doneBadge.textContent = "Visited";
        left.appendChild(doneBadge);
      }
  
      footer.appendChild(left);
  
      const btnRow = document.createElement("div");
      btnRow.className = "stop-buttons";
  
      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "btn btn-ghost";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        currentStopId = stop.id;
        setFormMode("edit", stop);
        renderStopList();
        loadDetailForCurrent();
        updateMapForStop(stop);
      });
      btnRow.appendChild(editBtn);
  
      const dupBtn = document.createElement("button");
      dupBtn.type = "button";
      dupBtn.className = "btn btn-ghost";
      dupBtn.textContent = "Duplicate";
      dupBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        duplicateStop(stop.id);
      });
      btnRow.appendChild(dupBtn);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "btn btn-ghost btn-danger";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        if (!confirm("Delete this stop?")) return;
        stops = stops.filter((s) => s.id !== stop.id);
        if (currentStopId === stop.id) currentStopId = null;
        saveStops();
        renderStopList();
        loadDetailForCurrent();
      });
      btnRow.appendChild(deleteBtn);
  
      footer.appendChild(btnRow);
      card.appendChild(footer);
  
      if (stop.summaryNotes) {
        const notesLine = document.createElement("div");
        notesLine.className = "stop-notes-line";
        notesLine.textContent = stop.summaryNotes;
        card.appendChild(notesLine);
      }
  
      card.addEventListener("click", () => {
        currentStopId = stop.id;
        setFormMode("edit", stop);
        renderStopList();
        loadDetailForCurrent();
        updateMapForStop(stop);
      });
  
      stopListEl.appendChild(card);
    });
  }
  
  // ---------- Map helpers ----------
  function buildMapsUrlFor(stopLike) {
    let query = "";
  
    if (
      stopLike.lat != null &&
      stopLike.lng != null &&
      !Number.isNaN(stopLike.lat) &&
      !Number.isNaN(stopLike.lng)
    ) {
      query = `${stopLike.lat},${stopLike.lng}`;
    } else {
      const q = buildPlaceQuery(stopLike);
      if (q) query = q;
    }
  
    if (!query) return null;
  
    return (
      "https://www.google.com/maps?q=" + encodeURIComponent(query)
    );
  }
  
  function updateMapForStop(stop) {
    if (!stop) {
      mapFrame.src = "about:blank";
      mapHint.textContent = "Select a stop to see it here.";
      mapExternalLink.href = "#";
      mapExternalLink.style.pointerEvents = "none";
      mapExternalLink.style.opacity = "0.5";
      return;
    }
  
    const baseUrl = buildMapsUrlFor(stop);
    if (!baseUrl) {
      mapFrame.src = "about:blank";
      mapHint.textContent =
        "This stop has no location yet. Add a city or lat/lng on the left.";
      mapExternalLink.href = "#";
      mapExternalLink.style.pointerEvents = "none";
      mapExternalLink.style.opacity = "0.5";
      return;
    }
  
    const embedUrl = baseUrl + "&z=15&output=embed";
    mapFrame.src = embedUrl;
    mapHint.textContent =
      "Map is centered on this specific stop. If you're offline, this square may stay blank.";
  
    mapExternalLink.href = baseUrl;
    mapExternalLink.style.pointerEvents = "auto";
    mapExternalLink.style.opacity = "1";
  }
  
  // ---------- Notes panel ----------
  function loadDetailForCurrent() {
    const stop = stops.find((s) => s.id === currentStopId);
    if (!stop) {
      notesStopLabel.textContent = "No stop selected";
      detailNotesInput.value = "";
      detailNotesInput.disabled = true;
      updateMapForStop(null);
      return;
    }
  
    notesStopLabel.textContent = stop.name || "Selected stop";
    detailNotesInput.disabled = false;
    detailNotesInput.value = stop.detailNotes || "";
    updateMapForStop(stop);
  }
  
  detailNotesInput.addEventListener("input", () => {
    if (!currentStopId) return;
    const stop = stops.find((s) => s.id === currentStopId);
    if (!stop) return;
    stop.detailNotes = detailNotesInput.value;
    saveStops();
  });
  
  // ---------- Duplicate stop ----------
  function duplicateStop(stopId) {
    const original = stops.find((s) => s.id === stopId);
    if (!original) return;
  
    const copy = JSON.parse(JSON.stringify(original));
    copy.id = "stop-" + Date.now() + "-" + Math.random().toString(36).slice(2);
    copy.arrival = "";
    copy.departure = "";
    copy.done = false;
  
    stops.push(copy);
    saveStops();
    sortStops();
    currentStopId = copy.id;
    renderStopList();
    loadDetailForCurrent();
    setFormMode("edit", copy);
  }
  
  // ---------- Form submit ----------
  stopForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const type = document.getElementById("typeInput").value;
    const location = document.getElementById("locationInput").value.trim();
    const arrival = document.getElementById("arrivalInput").value;
    const departure = document.getElementById("departInput").value;
    const costMin = Number(
      document.getElementById("costMinInput").value || 0
    );
    const costMax = Number(
      document.getElementById("costMaxInput").value || 0
    );
    const latStr = document.getElementById("latInput").value.trim();
    const lngStr = document.getElementById("lngInput").value.trim();
    const summaryNotes = document
      .getElementById("summaryNotesInput")
      .value.trim();
  
    if (!name || !location) {
      alert("Please enter at least a Name and a Location.");
      return;
    }
  
    const lat = latStr === "" ? null : Number(latStr);
    const lng = lngStr === "" ? null : Number(lngStr);
  
    const editingId = editStopIdInput.value;
  
    if (editingId) {
      const stop = stops.find((s) => s.id === editingId);
      if (!stop) {
        alert("Could not find stop to edit (maybe deleted).");
      } else {
        stop.name = name;
        stop.type = type;
        stop.location = location;
        stop.arrival = arrival;
        stop.departure = departure;
        stop.costMin = costMin;
        stop.costMax = costMax;
        stop.lat = lat;
        stop.lng = lng;
        stop.summaryNotes = summaryNotes;
      }
      saveStops();
      sortStops();
      renderStopList();
      currentStopId = editingId;
      loadDetailForCurrent();
      setFormMode("edit", stops.find((s) => s.id === editingId));
    } else {
      const newStop = {
        id: "stop-" + Date.now() + "-" + Math.random().toString(36).slice(2),
        name,
        type,
        location,
        arrival,
        departure,
        costMin,
        costMax,
        lat,
        lng,
        summaryNotes,
        detailNotes: "",
        done: false
      };
      stops.push(newStop);
      saveStops();
      sortStops();
      renderStopList();
      currentStopId = newStop.id;
      loadDetailForCurrent();
      setFormMode("add");
    }
  });
  
  // ---------- Buttons ----------
  newStopBtn.addEventListener("click", () => {
    setFormMode("add");
  });
  
  resetFormBtn.addEventListener("click", () => {
    resetFormFieldsOnly();
  });
  
  clearAllBtn.addEventListener("click", () => {
    if (!confirm("Clear ALL stops? This cannot be undone.")) return;
    stops = [];
    saveStops();
    currentStopId = null;
    renderStopList();
    loadDetailForCurrent();
  });
  
  // ---------- Ideas tab rendering ----------
  function matchesIdeaFilters(idea, search, stateVal, typeVal) {
    if (stateVal && idea.state !== stateVal) return false;
    if (typeVal && idea.type !== typeVal) return false;
  
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      idea.name.toLowerCase().includes(q) ||
      (idea.city && idea.city.toLowerCase().includes(q)) ||
      (idea.notes && idea.notes.toLowerCase().includes(q))
    );
  }
  
  function renderIdeaList() {
    const search = ideaSearchInput.value.trim().toLowerCase();
    const stateVal = ideaStateFilter.value;
    const typeVal = ideaTypeFilter.value;
  
    ideaListEl.innerHTML = "";
  
    const filtered = ideasCatalog.filter((idea) =>
      matchesIdeaFilters(idea, search, stateVal, typeVal)
    );
  
    ideaCountLabel.textContent =
      filtered.length + (filtered.length === 1 ? " place" : " places");
  
    filtered.forEach((idea) => {
      const card = document.createElement("div");
      card.className =
        "stop-card" + (idea.id === currentIdeaId ? " active" : "");
  
      const header = document.createElement("div");
      header.className = "stop-header";
  
      const nameEl = document.createElement("div");
      nameEl.className = "stop-name";
      nameEl.textContent = idea.name;
      header.appendChild(nameEl);
  
      const typeEl = document.createElement("div");
      typeEl.className = "stop-type";
      typeEl.textContent =
        (idea.state ? idea.state + " · " : "") +
        (idea.type === "nps"
          ? "National Park / NPS"
          : idea.type === "museum"
          ? "Museum"
          : idea.type === "historic"
          ? "Historic"
          : "Other");
      header.appendChild(typeEl);
  
      card.appendChild(header);
  
      const meta = document.createElement("div");
      meta.className = "stop-meta";
  
      if (idea.city) {
        const whereSpan = document.createElement("span");
        whereSpan.innerHTML = `<strong>Where:</strong> ${idea.city}`;
        meta.appendChild(whereSpan);
      }
  
      const timeSpan = document.createElement("span");
      timeSpan.innerHTML = `<strong>Visit time:</strong> ~${
        idea.estHours || 1
      } hr${idea.estHours && idea.estHours > 1 ? "s" : ""}`;
      meta.appendChild(timeSpan);
  
      const costSpan = document.createElement("span");
      costSpan.innerHTML = `<strong>Approx. cost:</strong> ${formatCost(
        idea.costMin,
        idea.costMax
      )}`;
      meta.appendChild(costSpan);
  
      if (
        idea.lat != null &&
        idea.lng != null &&
        !Number.isNaN(idea.lat) &&
        !Number.isNaN(idea.lng)
      ) {
        const coordSpan = document.createElement("span");
        coordSpan.innerHTML = `<strong>Lat/Lng:</strong> ${idea.lat.toFixed(
          4
        )}, ${idea.lng.toFixed(4)}`;
        meta.appendChild(coordSpan);
      }
  
      card.appendChild(meta);
  
      if (idea.notes) {
        const notes = document.createElement("div");
        notes.className = "stop-notes-line";
        notes.textContent = idea.notes;
        card.appendChild(notes);
      }
  
      card.addEventListener("click", () => {
        currentIdeaId = idea.id;
        renderIdeaList();
        updateMapForIdea(idea);
        showIdeaDetails(idea);
      });
  
      ideaListEl.appendChild(card);
    });
  
    if (!filtered.length) {
      ideaListEl.innerHTML =
        '<p class="small-note">No places match those filters yet.</p>';
    }
  }
  
  function showIdeaDetails(idea) {
    ideaDetailBox.innerHTML = `
      <h3>${idea.name}</h3>
      <p class="idea-detail-row"><strong>Location:</strong> ${
        idea.city || "—"
      } ${idea.state ? " (" + idea.state + ")" : ""}</p>
      <p class="idea-detail-row"><strong>Type:</strong> ${
        idea.type === "nps"
          ? "National Park / NPS"
          : idea.type === "museum"
          ? "Museum"
          : idea.type === "historic"
          ? "Historic"
          : "Other"
      }</p>
      <p class="idea-detail-row"><strong>Suggested visit time:</strong> ~${
        idea.estHours || 1
      } hour${idea.estHours && idea.estHours > 1 ? "s" : ""}</p>
      <p class="idea-detail-row"><strong>Approx. cost:</strong> ${formatCost(
        idea.costMin,
        idea.costMax
      )}</p>
      <p class="idea-detail-row"><strong>Typical hours:</strong> ${
        idea.hours || "Check official site"
      }</p>
      <p class="idea-detail-row"><strong>Notes:</strong> ${
        idea.notes || "—"
      }</p>
      <p class="small-note">If you really like one of these, you can manually add it as a stop on the Itinerary tab so it shows in your main list.</p>
    `;
  }
  
  function updateMapForIdea(idea) {
    if (!idea) {
      ideasMapFrame.src = "about:blank";
      ideasMapHint.textContent = "Click an idea to see it here.";
      ideasMapExternalLink.href = "#";
      ideasMapExternalLink.style.pointerEvents = "none";
      ideasMapExternalLink.style.opacity = "0.5";
      return;
    }
  
    const baseUrl = buildMapsUrlFor(idea);
    if (!baseUrl) {
      ideasMapFrame.src = "about:blank";
      ideasMapHint.textContent = "No location set for this idea.";
      ideasMapExternalLink.href = "#";
      ideasMapExternalLink.style.pointerEvents = "none";
      ideasMapExternalLink.style.opacity = "0.5";
      return;
    }
  
    const embedUrl = baseUrl + "&z=13&output=embed";
    ideasMapFrame.src = embedUrl;
    ideasMapHint.textContent =
      "Map centered on this place. If you're offline, it might stay blank.";
  
    ideasMapExternalLink.href = baseUrl;
    ideasMapExternalLink.style.pointerEvents = "auto";
    ideasMapExternalLink.style.opacity = "1";
  }
  
  // ---------- Tabs ----------
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
  
      const tab = btn.dataset.tab;
      if (tab === "itinerary") {
        tabItinerary.classList.add("active");
        tabIdeas.classList.remove("active");
      } else {
        tabIdeas.classList.add("active");
        tabItinerary.classList.remove("active");
      }
    });
  });
  
  // ---------- Ideas filters ----------
  [ideaSearchInput, ideaStateFilter, ideaTypeFilter].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", renderIdeaList);
    el.addEventListener("change", renderIdeaList);
  });
  
  // ---------- Init ----------
  loadStops();
sortStops();
renderStopList();
if (stops.length) {
  currentStopId = stops[0].id;
  setFormMode("edit", stops[0]);
} else {
  setFormMode("add");
}
loadDetailForCurrent();
updateStats();

// If a park was sent from the Parks Explorer, import it as a new stop
importPendingParkStop();

// Ideas tab init
renderIdeaList();
updateMapForIdea(null);