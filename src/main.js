import './assets/main.css'

import { createApp } from 'vue'

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import Font Awesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons (e.g., paper-plane)
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faPaperPlane);

import App from './App.vue'
import './index.css'

// Create Vue app
const app = createApp(App);

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
