const BASE_URL = "https://xetmneyuecjqenskvgba.supabase.co/rest/v1/membres";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhldG1uZXl1ZWNqcWVuc2t2Z2JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0OTU0NzcsImV4cCI6MjA5MzA3MTQ3N30.EKrp13-dZEmXGR_WDZjaBdRtmCvYM35pi1Wb6rXMa1Y";

const code = "CSENA-2026-02";

fetch(`${BASE_URL}?code_membre=eq.${code}`, {
  headers: {
    apikey: API_KEY,
    Authorization: "Bearer " + API_KEY
  }
})
  .then((res) => res.json())
  .then((data) => {
    console.log("DATA =", data);
    console.log("MEMBRE =", data[0]);

    if (data.length === 0) {
      document.getElementById("status").innerHTML = "❌ Code invalide";
      return;
    }

    const m = data[0];

    document.getElementById("status").innerHTML = "✅ Membre vérifié";

    document.getElementById("info").innerHTML = `
    <h3>${m.nom} ${m.prenom}</h3>
    <p>${m.poste}</p>
    <p>${m.filiere}</p>
    <p>${m.universite}</p>
  `;
  });