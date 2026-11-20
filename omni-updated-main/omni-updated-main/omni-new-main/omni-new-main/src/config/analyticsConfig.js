/**
 * Google Analytics (GA4) Configuration for OMNI Hospitals
 * 
 * Supports:
 * 1. Global / Main Hospital measurement ID (receives all traffic and branch events).
 * 2. Dedicated branch measurement IDs (receives isolated branch traffic for each specific location).
 * 
 * Simply paste the GA4 Measurement IDs (format: 'G-XXXXXXXXXX') into the corresponding fields below.
 */

// Main OMNI Hospitals Global Measurement ID
export const MAIN_GA_MEASUREMENT_ID = 'G-K5MZ5S163D';

// Individual Branch Measurement IDs
export const BRANCH_GA_CONFIG = {
  'kothapet': {
    name: 'OMNI Hospitals, Kothapet',
    slug: 'kothapet',
    city: 'Hyderabad',
    path: '/hospitals/kothapet',
    aliases: ['kothapet'],
    measurementId: 'G-5DGQL69QC0',
  },
  'kukatpally': {
    name: 'OMNI Hospitals, Kukatpally',
    slug: 'kukatpally',
    city: 'Hyderabad',
    path: '/hospitals/kukatpally',
    aliases: ['kukatpally'],
    measurementId: 'G-20MDZX8FZ2',
  },
  'udai-nampally': {
    name: 'UDAI OMNI Hospitals, Nampally',
    slug: 'udai-nampally',
    city: 'Hyderabad',
    path: '/hospitals/udai-nampally',
    aliases: ['udai-nampally', 'nampally'],
    measurementId: 'G-6127CW68T9',
  },
  'vizag': {
    name: 'OMNI Hospitals, Vizag',
    slug: 'vizag',
    city: 'Visakhapatnam',
    path: '/hospitals/vizag',
    aliases: ['vizag', 'ram-nagar'],
    measurementId: 'G-QZW11G8JV9',
  },
  'kurnool': {
    name: 'OMNI Hospitals, Kurnool',
    slug: 'kurnool',
    city: 'Kurnool',
    path: '/hospitals/kurnool',
    aliases: ['kurnool'],
    measurementId: 'G-9LNYK7417S',
  },
  'giggles-vizag': {
    name: 'Giggles by OMNI, Vizag',
    slug: 'giggles-vizag',
    city: 'Visakhapatnam',
    path: '/hospitals/giggles-vizag',
    aliases: ['giggles-vizag', 'giggles'],
    measurementId: 'G-W544EGXD7D',
  },
};
