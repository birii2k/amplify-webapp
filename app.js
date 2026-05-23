// ── App metadata ────────────────────────────────────────────
const APP_VERSION  = '1.0.0';
const DEPLOYED_AT  = new Date().toLocaleString();

// Set version badge
document.getElementById('versionBadge').textContent = `v${APP_VERSION}`;

// Log deployment info to console
console.log(`AWS Amplify Web App`);
console.log(`Version:     ${APP_VERSION}`);
console.log(`Deployed at: ${DEPLOYED_AT}`);
console.log(`Student ID:  ffmR77yhdLPe3p6EQbNuFcvfzcd2`);
