import {
  dekanatDetails,
  kaprodiDetails,
  koorTUDetails,
  kepalaLabDetails,
} from "@/data/manajemenDetails";

export const useStafPengajarData = () => {
  return [
    ...dekanatDetails,
    ...kaprodiDetails,
    ...koorTUDetails,
    ...kepalaLabDetails,
  ];
};
