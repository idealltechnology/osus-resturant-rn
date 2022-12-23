import Arabic from './Arabic';
import English from './English';
export default {
  en: {
    translation: JSON.parse(JSON.stringify(English)),
  },
  ar: {
    translation: JSON.parse(JSON.stringify(Arabic)),
  },
};
