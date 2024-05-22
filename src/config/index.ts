import { default as crud } from './modules/crud';

// import fr from '../lang/index-fr.js';
// import en from '../lang/index-en.js';

export default {
  modules: {
    crud,
  },
  userRights: {
    1: 'read',
    2: 'edit',
    4: 'add',
    8: 'delete',
    16: 'export',
  },
};

// export function loadModules (context) {
//   loadCrud(context);
//   loadDashboard(context);
//   loadMediaManager(context);
// }
