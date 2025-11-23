// ================================
// U.S. National Parks Explorer
// ================================

// Map state code -> nice name for details
const US_STATES = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  IA: "Iowa",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  MA: "Massachusetts",
  MD: "Maryland",
  ME: "Maine",
  MI: "Michigan",
  MN: "Minnesota",
  MO: "Missouri",
  MS: "Mississippi",
  MT: "Montana",
  NC: "North Carolina",
  ND: "North Dakota",
  NE: "Nebraska",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NV: "Nevada",
  NY: "New York",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VA: "Virginia",
  VT: "Vermont",
  WA: "Washington",
  WI: "Wisconsin",
  WV: "West Virginia",
  WY: "Wyoming",
  AS: "American Samoa",
  VI: "U.S. Virgin Islands"
};

// ===== All 63 official U.S. National Parks =====
// Each entry: id, name, stateCodes, shortRegion, notes.
// Your America the Beautiful pass covers entrance fees at all of these.
const npsSites = [
    {
      id: "np-acadia",
      name: "Acadia National Park",
      stateCodes: ["ME"],
      shortRegion: "Coastal Maine (near Bar Harbor)",
      notes: "Rocky Atlantic coastline, carriage roads, Cadillac Mountain sunrise. Great if you ever do an East Coast trip.",
      lat: 44.3386,
      lng: -68.2733
    },
    {
      id: "np-american-samoa",
      name: "National Park of American Samoa",
      stateCodes: ["AS"],
      shortRegion: "American Samoa (South Pacific)",
      notes: "Tropical rainforest, coral reefs, and Samoan culture. Very remote but covered by your NPS pass.",
      lat: -14.2290,
      lng: -170.6830
    },
    {
      id: "np-arches",
      name: "Arches National Park",
      stateCodes: ["UT"],
      shortRegion: "Near Moab, Utah",
      notes: "Famous for Delicate Arch and over 2,000 natural stone arches in red rock desert.",
      lat: 38.7331,
      lng: -109.5925
    },
    {
      id: "np-badlands",
      name: "Badlands National Park",
      stateCodes: ["SD"],
      shortRegion: "South Dakota",
      notes: "Eroded buttes and mixed-grass prairie. Often paired with Mount Rushmore area trips.",
      lat: 43.8554,
      lng: -102.3397
    },
    {
      id: "np-big-bend",
      name: "Big Bend National Park",
      stateCodes: ["TX"],
      shortRegion: "West Texas on the Rio Grande",
      notes: "Desert, river canyons, and mountains right on the Mexican border. Remote, dark skies.",
      lat: 29.1275,
      lng: -103.2425
    },
    {
      id: "np-biscayne",
      name: "Biscayne National Park",
      stateCodes: ["FL"],
      shortRegion: "South Florida (near Miami)",
      notes: "Mostly water and islands — snorkeling, boating, mangroves. Your pass covers the park fee; tours cost extra.",
      lat: 25.4824,
      lng: -80.2083
    },
    {
      id: "np-black-canyon",
      name: "Black Canyon of the Gunnison National Park",
      stateCodes: ["CO"],
      shortRegion: "Western Colorado",
      notes: "Extremely steep, narrow canyon; big drop views from the rim drives.",
      lat: 38.5754,
      lng: -107.7416
    },
    {
      id: "np-bryce",
      name: "Bryce Canyon National Park",
      stateCodes: ["UT"],
      shortRegion: "Southern Utah",
      notes: "Hoodoos (rock spires), amphitheaters, and amazing sunrise/sunset colors.",
      lat: 37.5930,
      lng: -112.1871
    },
    {
      id: "np-canyonlands",
      name: "Canyonlands National Park",
      stateCodes: ["UT"],
      shortRegion: "Near Moab, Utah",
      notes: "Huge canyons carved by the Colorado and Green rivers; divided into Island in the Sky, Needles, Maze districts.",
      lat: 38.3269,
      lng: -109.8783
    },
    {
      id: "np-capitol-reef",
      name: "Capitol Reef National Park",
      stateCodes: ["UT"],
      shortRegion: "Central Utah (Fruita area)",
      notes: "Red rock cliffs, orchards, and scenic drives along the Waterpocket Fold.",
      lat: 38.3670,
      lng: -111.2615
    },
    {
      id: "np-carlsbad",
      name: "Carlsbad Caverns National Park",
      stateCodes: ["NM"],
      shortRegion: "Southeastern New Mexico",
      notes: "Massive underground caverns; elevators and walking tours. Some special cave tours have extra fees.",
      lat: 32.1479,
      lng: -104.5567
    },
    {
      id: "np-channel-islands",
      name: "Channel Islands National Park",
      stateCodes: ["CA"],
      shortRegion: "Off the coast of Southern California",
      notes: "Islands reachable by boat; sea caves, wildlife, and hiking. Boat/ferry fees are separate from the pass.",
      lat: 34.0069,
      lng: -119.7785
    },
    {
      id: "np-congaree",
      name: "Congaree National Park",
      stateCodes: ["SC"],
      shortRegion: "South Carolina",
      notes: "Floodplain forest with boardwalks and giant trees. Good for paddling and fireflies in season.",
      lat: 33.7912,
      lng: -80.7488
    },
    {
      id: "np-crater-lake",
      name: "Crater Lake National Park",
      stateCodes: ["OR"],
      shortRegion: "Southern Oregon",
      notes: "Deep blue lake inside a volcanic caldera. Rim drives and snow views in winter.",
      lat: 42.8684,
      lng: -122.1685
    },
    {
      id: "np-cuyahoga",
      name: "Cuyahoga Valley National Park",
      stateCodes: ["OH"],
      shortRegion: "Between Cleveland and Akron, Ohio",
      notes: "Waterfalls, canal towpath trail, and forest close to cities.",
      lat: 41.2808,
      lng: -81.5678
    },
    {
      id: "np-death-valley",
      name: "Death Valley National Park",
      stateCodes: ["CA", "NV"],
      shortRegion: "Eastern California / Nevada",
      notes: "Lowest, hottest, and driest national park. Salt flats, sand dunes, and wild desert landscapes.",
      lat: 36.5054,
      lng: -117.0794
    },
    {
      id: "np-denali",
      name: "Denali National Park and Preserve",
      stateCodes: ["AK"],
      shortRegion: "Alaska interior",
      notes: "Home to Denali (North America’s tallest peak). Long bus rides into the park; wildlife viewing.",
      lat: 63.1148,
      lng: -151.1926
    },
    {
      id: "np-dry-tortugas",
      name: "Dry Tortugas National Park",
      stateCodes: ["FL"],
      shortRegion: "70 miles west of Key West, Florida",
      notes: "Fort Jefferson and coral reefs; reached by boat or seaplane. Transport costs extra.",
      lat: 24.6285,
      lng: -82.8732
    },
    {
      id: "np-everglades",
      name: "Everglades National Park",
      stateCodes: ["FL"],
      shortRegion: "South Florida",
      notes: "Sawgrass prairies, mangroves, alligators, and bird life. Airboat tours outside the park may cost extra.",
      lat: 25.2866,
      lng: -80.8987
    },
    {
      id: "np-gates-arctic",
      name: "Gates of the Arctic National Park and Preserve",
      stateCodes: ["AK"],
      shortRegion: "Brooks Range, Alaska (very remote)",
      notes: "No roads; true wilderness above the Arctic Circle. Backpacking and fly-in trips.",
      lat: 67.8819,
      lng: -153.1861
    },
    {
      id: "np-gateway-arch",
      name: "Gateway Arch National Park",
      stateCodes: ["MO"],
      shortRegion: "St. Louis, Missouri",
      notes: "Iconic 630-foot stainless steel arch on the Mississippi. Museum is free; tram ride to the top has a fee.",
      lat: 38.6247,
      lng: -90.1848
    },
    {
      id: "np-glacier-bay",
      name: "Glacier Bay National Park and Preserve",
      stateCodes: ["AK"],
      shortRegion: "Southeast Alaska (near Juneau)",
      notes: "Glacial bays often visited by cruise ships; sea kayaking and wildlife watching.",
      lat: 58.6658,
      lng: -136.9002
    },
    {
      id: "np-glacier",
      name: "Glacier National Park",
      stateCodes: ["MT"],
      shortRegion: "Northern Montana (near Canada)",
      notes: "Going-to-the-Sun Road, alpine lakes, and mountains. Timed-entry reservations sometimes required.",
      lat: 48.7596,
      lng: -113.7870
    },
    {
      id: "np-grand-canyon",
      name: "Grand Canyon National Park",
      stateCodes: ["AZ"],
      shortRegion: "Northern Arizona",
      notes: "Massive canyon carved by the Colorado River. South Rim is most visited; North Rim is quieter.",
      lat: 36.1069,
      lng: -112.1129
    },
    {
      id: "np-grand-teton",
      name: "Grand Teton National Park",
      stateCodes: ["WY"],
      shortRegion: "Northwestern Wyoming (near Jackson)",
      notes: "Sharp Teton Range peaks, lakes, and wildlife; close to Yellowstone.",
      lat: 43.7904,
      lng: -110.6818
    },
    {
      id: "np-great-basin",
      name: "Great Basin National Park",
      stateCodes: ["NV"],
      shortRegion: "Eastern Nevada",
      notes: "High mountains, bristlecone pines, Lehman Caves, and dark skies.",
      lat: 38.9833,
      lng: -114.3000
    },
    {
      id: "np-great-sand-dunes",
      name: "Great Sand Dunes National Park and Preserve",
      stateCodes: ["CO"],
      shortRegion: "Southern Colorado",
      notes: "Huge sand dunes up against mountains; sand sledding and creek in spring/summer.",
      lat: 37.7328,
      lng: -105.5136
    },
    {
      id: "np-great-smoky",
      name: "Great Smoky Mountains National Park",
      stateCodes: ["TN", "NC"],
      shortRegion: "Tennessee / North Carolina border",
      notes: "America’s most-visited park; ridges, waterfalls, historic cabins, and heavy summer traffic.",
      lat: 35.6118,
      lng: -83.4895
    },
    {
      id: "np-guadalupe",
      name: "Guadalupe Mountains National Park",
      stateCodes: ["TX"],
      shortRegion: "West Texas (near Carlsbad Caverns)",
      notes: "Guadalupe Peak (Texas’ highest point), rugged mountains, and desert trails.",
      lat: 31.9230,
      lng: -104.8673
    },
    {
      id: "np-haleakala",
      name: "Haleakalā National Park",
      stateCodes: ["HI"],
      shortRegion: "Maui, Hawaii",
      notes: "Volcanic summit crater and rainforest coastline. Sunrise viewing often requires reservations.",
      lat: 20.7204,
      lng: -156.1552
    },
    {
      id: "np-hawaii-volcanoes",
      name: "Hawaiʻi Volcanoes National Park",
      stateCodes: ["HI"],
      shortRegion: "Hawaiʻi (Big Island)",
      notes: "Active volcano landscapes, lava fields, and steam vents. Conditions change often.",
      lat: 19.4194,
      lng: -155.2885
    },
    {
      id: "np-hot-springs",
      name: "Hot Springs National Park",
      stateCodes: ["AR"],
      shortRegion: "Hot Springs, Arkansas",
      notes: "Historic bathhouses and hot springs in a city setting, plus forested trails.",
      lat: 34.5211,
      lng: -93.0424
    },
    {
      id: "np-indiana-dunes",
      name: "Indiana Dunes National Park",
      stateCodes: ["IN"],
      shortRegion: "Lake Michigan shoreline, Indiana",
      notes: "Beaches, dunes, and wetlands just outside the Chicago metro area.",
      lat: 41.6533,
      lng: -87.0524
    },
    {
      id: "np-isle-royale",
      name: "Isle Royale National Park",
      stateCodes: ["MI"],
      shortRegion: "Lake Superior island, Michigan",
      notes: "Remote island park reached by boat/seaplane; backpacking, moose, and wolves.",
      lat: 47.9959,
      lng: -88.9093
    },
    {
      id: "np-joshua-tree",
      name: "Joshua Tree National Park",
      stateCodes: ["CA"],
      shortRegion: "Southern California desert",
      notes: "Jumbo boulders and Joshua trees; starry skies and popular for climbing.",
      lat: 33.8734,
      lng: -115.9010
    },
    {
      id: "np-katmai",
      name: "Katmai National Park and Preserve",
      stateCodes: ["AK"],
      shortRegion: "Southwest Alaska",
      notes: "Brown bears fishing at Brooks Falls; fly-in trips and remote backcountry.",
      lat: 58.6126,
      lng: -155.0631
    },
    {
      id: "np-kenai-fjords",
      name: "Kenai Fjords National Park",
      stateCodes: ["AK"],
      shortRegion: "Near Seward, Alaska",
      notes: "Glaciers, marine wildlife, and boat tours into the fjords.",
      lat: 59.9180,
      lng: -149.6485
    },
    {
      id: "np-kings-canyon",
      name: "Kings Canyon National Park",
      stateCodes: ["CA"],
      shortRegion: "Sierra Nevada, California",
      notes: "Deep glacially carved canyon; often visited together with Sequoia National Park.",
      lat: 36.8879,
      lng: -118.5551
    },
    {
      id: "np-kobuk-valley",
      name: "Kobuk Valley National Park",
      stateCodes: ["AK"],
      shortRegion: "Arctic Alaska",
      notes: "Remote sand dunes and caribou migration routes; no roads into the park.",
      lat: 67.3356,
      lng: -159.1224
    },
    {
      id: "np-lake-clark",
      name: "Lake Clark National Park and Preserve",
      stateCodes: ["AK"],
      shortRegion: "Southwest Alaska",
      notes: "Mountains, lakes, and brown bears; usually accessed by small plane.",
      lat: 60.4128,
      lng: -154.3230
    },
    {
      id: "np-lassen",
      name: "Lassen Volcanic National Park",
      stateCodes: ["CA"],
      shortRegion: "Northern California",
      notes: "Volcanic peaks, hydrothermal areas, and alpine lakes.",
      lat: 40.4977,
      lng: -121.4207
    },
    {
      id: "np-mammoth-cave",
      name: "Mammoth Cave National Park",
      stateCodes: ["KY"],
      shortRegion: "Kentucky",
      notes: "World’s longest known cave system. Cave tours require separate tickets but your pass covers entrance.",
      lat: 37.1869,
      lng: -86.1005
    },
    {
      id: "np-mesa-verde",
      name: "Mesa Verde National Park",
      stateCodes: ["CO"],
      shortRegion: "Southwestern Colorado",
      notes: "Ancient cliff dwellings and mesa-top views; some cliff tours are ticketed.",
      lat: 37.2309,
      lng: -108.4618
    },
    {
      id: "np-mount-rainier",
      name: "Mount Rainier National Park",
      stateCodes: ["WA"],
      shortRegion: "Near Seattle, Washington",
      notes: "Iconic volcano with wildflower meadows and glaciers. Some timed-entry systems in busy seasons.",
      lat: 46.8523,
      lng: -121.7603
    },
    {
      id: "np-north-cascades",
      name: "North Cascades National Park",
      stateCodes: ["WA"],
      shortRegion: "North-central Washington",
      notes: "Steep, rugged mountains with lakes and forests; far fewer crowds than many parks.",
      lat: 48.7718,
      lng: -121.2985
    },
    {
      id: "np-olympic",
      name: "Olympic National Park",
      stateCodes: ["WA"],
      shortRegion: "Olympic Peninsula, Washington",
      notes: "Mountains, rainforest, and Pacific coast all in one park.",
      lat: 47.8021,
      lng: -123.6044
    },
    {
      id: "np-petrified-forest",
      name: "Petrified Forest National Park",
      stateCodes: ["AZ"],
      shortRegion: "Along I-40 in northeastern Arizona",
      notes: "Painted Desert vistas and fossilized logs; easy to fit into a road trip.",
      lat: 35.0659,
      lng: -109.7874
    },
    {
      id: "np-pinnacles",
      name: "Pinnacles National Park",
      stateCodes: ["CA"],
      shortRegion: "Central California",
      notes: "Rock pinnacles, talus caves, and possible California condor sightings.",
      lat: 36.4906,
      lng: -121.1825
    },
    {
      id: "np-redwood",
      name: "Redwood National and State Parks",
      stateCodes: ["CA"],
      shortRegion: "Northern California coast",
      notes: "Tallest trees on Earth plus coastline; co-managed with California state parks.",
      lat: 41.2132,
      lng: -124.0046
    },
    {
      id: "np-rocky-mountain",
      name: "Rocky Mountain National Park",
      stateCodes: ["CO"],
      shortRegion: "Near Estes Park, Colorado",
      notes: "Trail Ridge Road, alpine lakes, and elk; timed-entry often required in summer.",
      lat: 40.3428,
      lng: -105.6836
    },
    {
      id: "np-saguaro",
      name: "Saguaro National Park",
      stateCodes: ["AZ"],
      shortRegion: "Around Tucson, Arizona",
      notes: "Two districts of giant saguaro cactus forest with scenic drives and hikes.",
      lat: 32.2967,
      lng: -110.7346
    },
    {
      id: "np-sequoia",
      name: "Sequoia National Park",
      stateCodes: ["CA"],
      shortRegion: "Sierra Nevada, California",
      notes: "Giant sequoia trees and high Sierra scenery. Often combined with Kings Canyon.",
      lat: 36.4864,
      lng: -118.5658
    },
    {
      id: "np-shenandoah",
      name: "Shenandoah National Park",
      stateCodes: ["VA"],
      shortRegion: "Blue Ridge Mountains, Virginia",
      notes: "Skyline Drive, overlooks, and Appalachian Trail segments near Washington, D.C.",
      lat: 38.2928,
      lng: -78.6796
    },
    {
      id: "np-theodore-roosevelt",
      name: "Theodore Roosevelt National Park",
      stateCodes: ["ND"],
      shortRegion: "Western North Dakota",
      notes: "Badlands, bison, and prairie landscapes associated with Theodore Roosevelt.",
      lat: 46.9790,
      lng: -103.5387
    },
    {
      id: "np-virgin-islands",
      name: "Virgin Islands National Park",
      stateCodes: ["VI"],
      shortRegion: "Island of St. John, U.S. Virgin Islands",
      notes: "Beaches, coral reefs, and hiking; much of the park is underwater.",
      lat: 18.3310,
      lng: -64.7938
    },
    {
      id: "np-voyageurs",
      name: "Voyageurs National Park",
      stateCodes: ["MN"],
      shortRegion: "Northern Minnesota (near Canadian border)",
      notes: "Water-based park with lakes, islands, and houseboat/canoe trips.",
      lat: 48.4837,
      lng: -92.8380
    },
    {
      id: "np-wind-cave",
      name: "Wind Cave National Park",
      stateCodes: ["SD"],
      shortRegion: "South Dakota, near Custer",
      notes: "Boxwork cave formations and mixed-grass prairie with bison and prairie dogs.",
      lat: 43.6046,
      lng: -103.4210
    },
    {
      id: "np-wrangell-st-elias",
      name: "Wrangell–St. Elias National Park and Preserve",
      stateCodes: ["AK"],
      shortRegion: "Southeast Alaska interior",
      notes: "Largest U.S. national park by area; glaciers and mountains on a huge scale.",
      lat: 61.7100,
      lng: -142.9850
    },
    {
      id: "np-yellowstone",
      name: "Yellowstone National Park",
      stateCodes: ["WY", "MT", "ID"],
      shortRegion: "Primarily Wyoming (spills into Montana & Idaho)",
      notes: "Geysers, hot springs, canyons, and wildlife; the world’s first national park.",
      lat: 44.4280,
      lng: -110.5885
    },
    {
      id: "np-yosemite",
      name: "Yosemite National Park",
      stateCodes: ["CA"],
      shortRegion: "Sierra Nevada, California",
      notes: "Granite cliffs (El Capitan, Half Dome), waterfalls, and meadows.",
      lat: 37.8651,
      lng: -119.5383
    },
    {
      id: "np-zion",
      name: "Zion National Park",
      stateCodes: ["UT"],
      shortRegion: "Southwest Utah",
      notes: "Steep sandstone canyon, Angels Landing, and The Narrows. Shuttle system in main canyon.",
      lat: 37.2982,
      lng: -113.0263
    },
    {
      id: "np-new-river-gorge",
      name: "New River Gorge National Park and Preserve",
      stateCodes: ["WV"],
      shortRegion: "Southern West Virginia",
      notes: "New River Gorge Bridge, whitewater, and Appalachian scenery.",
      lat: 38.0707,
      lng: -81.0755
    },
    {
      id: "np-white-sands",
      name: "White Sands National Park",
      stateCodes: ["NM"],
      shortRegion: "Southern New Mexico",
      notes: "White gypsum sand dunes you can walk or sled on. Easy stop off US-70.",
      lat: 32.7791,
      lng: -106.1717
    }
  ];

// ---------- DOM references ----------
const stateFilter = document.getElementById("stateFilter");
const parkSearch = document.getElementById("parkSearch");
const parksListEl = document.getElementById("parksList");
const parksCountLabel = document.getElementById("parksCountLabel");
const parksMapFrame = document.getElementById("parksMapFrame");
const parksMapHint = document.getElementById("parksMapHint");
const parksMapExternalLink = document.getElementById("parksMapExternalLink");
const parkDetailBox = document.getElementById("parkDetailBox");

let currentParkId = null;

// ---------- Helpers ----------
function stateCodesToNames(codes) {
  if (!codes || !codes.length) return "—";
  return codes.map(code => US_STATES[code] || code).join(", ");
}

function buildMapsUrlForPark(park) {
    // If we have coordinates, use those for a precise map center
    if (
      park.lat != null &&
      park.lng != null &&
      !Number.isNaN(park.lat) &&
      !Number.isNaN(park.lng)
    ) {
      const coordQuery = `${park.lat},${park.lng}`;
      return "https://www.google.com/maps?q=" + encodeURIComponent(coordQuery);
    }
  
    // Otherwise, fall back to name + first state
    const parts = [park.name];
    if (park.stateCodes && park.stateCodes.length === 1) {
      const sName = US_STATES[park.stateCodes[0]];
      if (sName) parts.push(sName);
    }
    const query = parts.join(", ");
    return "https://www.google.com/maps?q=" + encodeURIComponent(query);
  }

function matchesParkFilters(park, stateCode, textSearch) {
  if (stateCode && stateCode !== "ALL") {
    if (!park.stateCodes || !park.stateCodes.includes(stateCode)) return false;
  }
  if (!textSearch) return true;

  const q = textSearch.toLowerCase();
  return (
    park.name.toLowerCase().includes(q) ||
    (park.shortRegion && park.shortRegion.toLowerCase().includes(q)) ||
    (park.notes && park.notes.toLowerCase().includes(q))
  );
}

// ---------- Rendering ----------
function renderParkList() {
    const stateVal = stateFilter ? stateFilter.value : "ALL";
    const searchVal = parkSearch ? parkSearch.value.trim().toLowerCase() : "";
  
    parksListEl.innerHTML = "";
  
    const filtered = npsSites
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(p => matchesParkFilters(p, stateVal, searchVal));
  
    parksCountLabel.textContent =
      filtered.length + (filtered.length === 1 ? " park" : " parks");
  
    if (!filtered.length) {
      parksListEl.innerHTML =
        '<p class="small-note">No parks match that state/search yet. Try clearing the filters.</p>';
      // Clear detail if nothing matches
      parksMapFrame.src = "about:blank";
      parksMapHint.textContent = "No park selected.";
      parksMapExternalLink.href = "#";
      parksMapExternalLink.style.pointerEvents = "none";
      parksMapExternalLink.style.opacity = "0.5";
      parkDetailBox.innerHTML =
        "<h3>No park selected</h3><p class='small-note'>Choose a different state or clear your search.</p>";
      return;
    }
  
    filtered.forEach(park => {
      const card = document.createElement("div");
      card.className =
        "stop-card" + (park.id === currentParkId ? " active" : "");
  
      const header = document.createElement("div");
      header.className = "stop-header";
  
      const nameEl = document.createElement("div");
      nameEl.className = "stop-name";
      nameEl.textContent = park.name;
      header.appendChild(nameEl);
  
      const typeEl = document.createElement("div");
      typeEl.className = "stop-type";
      typeEl.textContent = "National Park · " + stateCodesToNames(park.stateCodes);
      header.appendChild(typeEl);
  
      card.appendChild(header);
  
      const meta = document.createElement("div");
      meta.className = "stop-meta";
  
      if (park.shortRegion) {
        const regionSpan = document.createElement("span");
        regionSpan.innerHTML = `<strong>Region:</strong> ${park.shortRegion}`;
        meta.appendChild(regionSpan);
      }
  
      const passSpan = document.createElement("span");
      passSpan.innerHTML =
        "<strong>Pass:</strong> Entrance covered by your national parks pass; check NPS site for any extra tour/boat fees.";
      meta.appendChild(passSpan);
  
      // If you’ve added lat/lng for parks, show it
      if (
        park.lat != null &&
        park.lng != null &&
        !Number.isNaN(park.lat) &&
        !Number.isNaN(park.lng)
      ) {
        const coordSpan = document.createElement("span");
        coordSpan.innerHTML = `<strong>Lat/Lng:</strong> ${park.lat.toFixed(
          4
        )}, ${park.lng.toFixed(4)}`;
        meta.appendChild(coordSpan);
      }
  
      card.appendChild(meta);
  
      if (park.notes) {
        const notesLine = document.createElement("div");
        notesLine.className = "stop-notes-line";
        notesLine.textContent = park.notes;
        card.appendChild(notesLine);
      }
  
      // ==== NEW: actions row (Open in Maps + Send to Trip Planner) ====
      const actions = document.createElement("div");
      actions.className = "park-actions";
  
      const mapsBtn = document.createElement("button");
      mapsBtn.type = "button";
      mapsBtn.className = "btn small";
      mapsBtn.textContent = "Open in Maps";
      mapsBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        openParkInMaps(park);
      });
      actions.appendChild(mapsBtn);
  
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.className = "btn small";
      addBtn.textContent = "Send to Trip Planner";
      addBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        sendParkToTripPlanner(park);
      });
      actions.appendChild(addBtn);
  
      card.appendChild(actions);
      // ===============================================================
  
      card.addEventListener("click", () => {
        currentParkId = park.id;
        renderParkList();      // re-render to update active highlight
        updateMapForPark(park);
        showParkDetails(park);
      });
  
      parksListEl.appendChild(card);
    });
  
    // If nothing is selected yet but we have parks, pick the first one
    if (!currentParkId && filtered.length) {
      currentParkId = filtered[0].id;
      updateMapForPark(filtered[0]);
      showParkDetails(filtered[0]);
      // Re-highlight after setting currentParkId
      renderParkList();
    }
  }
function showParkDetails(park) {
  parkDetailBox.innerHTML = `
    <h3>${park.name}</h3>
    <p class="idea-detail-row"><strong>State(s):</strong> ${stateCodesToNames(
      park.stateCodes
    )}</p>
    <p class="idea-detail-row"><strong>Region:</strong> ${
      park.shortRegion || "—"
    }</p>
    <p class="idea-detail-row"><strong>Pass &amp; cost:</strong> Your national parks pass covers entrance fees here. Some parks have extra fees for tours, caves, shuttles, or ferries — always check the official NPS site for up-to-date prices.</p>
    <p class="idea-detail-row"><strong>Notes:</strong> ${
      park.notes || "You can add your own notes in your main temple-trip planner."
    }</p>
    <p class="small-note">
      If you want to add this park into your December temple road trip, just create a new stop on
      <strong>temple-trip.html</strong> and copy the name and state so the map can find it.
    </p>
  `;
}

function updateMapForPark(park) {
  if (!park) {
    parksMapFrame.src = "about:blank";
    parksMapHint.textContent = "No park selected.";
    parksMapExternalLink.href = "#";
    parksMapExternalLink.style.pointerEvents = "none";
    parksMapExternalLink.style.opacity = "0.5";
    return;
  }

  const baseUrl = buildMapsUrlForPark(park);
  const embedUrl = baseUrl + "&z=8&output=embed";

  parksMapFrame.src = embedUrl;
  parksMapHint.textContent =
    "Map centered on this national park. If you're offline, this square may stay blank.";

  parksMapExternalLink.href = baseUrl;
  parksMapExternalLink.style.pointerEvents = "auto";
  parksMapExternalLink.style.opacity = "1";
}
// Open in Google Maps in a new tab
function openParkInMaps(park) {
    const baseUrl = buildMapsUrlForPark(park);
    window.open(baseUrl, "_blank");
  }
  
  // Send park → temple-trip.html (pre-fill the form)
  function sendParkToTripPlanner(park) {
    const pending = {
      name: park.name,
      type: "nps",
      location: stateCodesToNames(park.stateCodes) + (park.shortRegion ? " – " + park.shortRegion : ""),
      lat: park.lat != null ? park.lat : "",
      lng: park.lng != null ? park.lng : "",
      summary: park.notes || ("Visit " + park.name)
    };
  
    try {
      localStorage.setItem("pendingTempleStop", JSON.stringify(pending));
    } catch (e) {
      console.warn("Could not save pendingTempleStop", e);
    }
  
    // Jump to your main trip planner page
    window.location.href = "temple-trip.html";
  }
// ---------- Event listeners ----------
if (stateFilter) {
  stateFilter.addEventListener("change", () => {
    currentParkId = null; // reset selection when changing states
    renderParkList();
  });
}

if (parkSearch) {
  parkSearch.addEventListener("input", () => {
    currentParkId = null;
    renderParkList();
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderParkList();
});