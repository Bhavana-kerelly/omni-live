import { getAssetUrl } from './getAssetUrl';

const EXISTING_DOCTOR_PHOTOS = new Set([
  'dr-abhinandan-badam.jpg',
  'dr-arun-kumar-teegalapally.jpg',
  'dr-ateeq-ur-rahman.jpg',
  'dr-b-jaipal-reddy.jpg',
  'dr-ch-nagaraj.jpg',
  'dr-ch-saidulu.jpg',
  'dr-ch-sandeep-anand.jpg',
  'dr-e-venkat-ramana-reddy.jpg',
  'dr-g-uma-sri.jpg',
  'dr-gopireddy-pavan-kumar-reddy.jpg',
  'dr-jayasimha-n.jpg',
  'dr-jn-srinivasulu.jpg',
  'dr-k-pavani.jpg',
  'dr-kandukuri-sasidhara-babu.jpg',
  'dr-khaleel.jpg',
  'dr-kolloju-srikanth.jpg',
  'dr-kotha-shyam-sunder-reddy.jpg',
  'dr-l-venkatesh.jpg',
  'dr-leela-krishna-kaku.jpg',
  'dr-lokesh-kumar-k.jpg',
  'dr-m-goutham-reddy.jpg',
  'dr-m-rama-krishna-reddy.jpg',
  'dr-n-sridevi.jpg',
  'dr-nagavender-rao-m.jpg',
  'dr-nandyala-sreekar.jpg',
  'dr-naveen-kokula.jpg',
  'dr-neehar-potluri.jpg',
  'dr-p-pravallika.jpg',
  'dr-padmaja-subrahmanyam.jpg',
  'dr-palla-raghu-deep.jpg',
  'dr-payal-chitransi.jpg',
  'dr-pranay-kumar-mehta.jpg',
  'dr-praneeth-reddy-cv.jpg',
  'dr-pss-subramanyam.jpg',
  'dr-radlam-padma-kumari.jpg',
  'dr-rajesh-pathi.jpg',
  'dr-ranjith-nellore-mahesh.jpg',
  'dr-ravinder-reddy.jpg',
  'dr-s-kiran.jpg',
  'dr-sahitya-rao-thandra.jpg',
  'dr-sai-kiran-k.jpg',
  'dr-sandeep-pemira.jpg',
  'dr-seetha-katta.jpg',
  'dr-srinivas-mamidala.jpg',
  'dr-surya-prakash-reddy.jpg',
  'dr-t-y-sri-hari.jpg',
  'dr-tagore-mohan-grandhi.jpg',
  'dr-umesh-prasad-sharma.jpg',
  'dr-v-a-vani.jpg',
  'dr-vijay-kumar-kurella.jpg',
  'dr-vijaya-bhaskar-mallela.jpg',
  'dr-y-sandeep-reddy.jpg',
  'mrs-saritha.jpg'
]);

export function getDoctorAvatarFallback(doctorName = '') {
  const nameLower = (doctorName || '').toLowerCase();
  const isFemale = (
    nameLower.includes('sridevi') ||
    nameLower.includes('padmaja') ||
    nameLower.includes('seetha') ||
    nameLower.includes('uma sri') ||
    nameLower.includes('pavani') ||
    nameLower.includes('kumari') ||
    nameLower.includes('sahitya') ||
    nameLower.includes('mrs') ||
    nameLower.includes('miss') ||
    nameLower.includes('saritha') ||
    nameLower.includes('vani') ||
    nameLower.includes('pravallika') ||
    nameLower.includes('payal') ||
    nameLower.includes('gynaec') ||
    nameLower.includes('obstet')
  );
  return getAssetUrl(isFemale ? '/images/doctors/doctor-avatar-female.svg' : '/images/doctors/doctor-avatar-male.svg');
}

export function getDoctorImage(doc) {
  if (!doc) return getDoctorAvatarFallback();
  
  if (doc.image) {
    return getAssetUrl(doc.image);
  }

  return getDoctorAvatarFallback(doc.name);
}
