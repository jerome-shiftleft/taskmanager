require('./bootstrap');

import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

require('livewire-sortable');

require('select2');
require('daterangepicker');

import 'jquery-ui/ui/widgets/sortable.js';
import 'jquery-ui/ui/widgets/draggable.js';
import 'jquery-ui/ui/widgets/droppable.js';
require('@rwap/jquery-ui-touch-punch');

require('./footer-scripts');
require('./tasks');
require('./custom');
