const dekanatDetails = [
  { 
    profileRoute: "/manajemen/profile/supriyanto", 
    lhkpnRoute: "/manajemen/LHKPN/supriyanto",
    linkLHKPN: "https://drive.google.com/file/d/13JqFUD3q3T_jDgfYHvKNbEIsbeFwB3u1/view"
  },
  { 
    profileRoute: "/manajemen/profile/erly-krisnanik", 
    lhkpnRoute: "/manajemen/LHKPN/erly-krisnanik",
    linkLHKPN: "https://drive.google.com/file/d/1suxmjkfpBZe8Of6jWl3T8nk8_nDS9Dvm/view?usp=sharing" 
  },
  { 
    profileRoute: "/manajemen/profile/bambang-saras-yulistiawan", 
    lhkpnRoute: "/manajemen/LHKPN/bambang-saras-yulistiawan",
    linkLHKPN: "https://drive.google.com/file/d/1lgLB81KOtmndAbfhQrQKS74ECjccjCeO/view?usp=sharing" 
  },
  { 
    profileRoute: "/manajemen/profile/ati-zaidiah", 
    lhkpnRoute: "/manajemen/LHKPN/ati-zaidiah",
    linkLHKPN: "https://drive.google.com/file/d/13YzYHIL2H21xzhlOm4J1rznfXIWWuH_f/view?usp=sharing" 
  }
];


/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return dekanatDetails.map(({ lhkpnRoute, linkLHKPN }) => ({
      source: lhkpnRoute,
      destination: linkLHKPN,
      permanent: false,
    }));
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
