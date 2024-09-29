import { useSearchParams } from "react-router-dom";
export function useUrlPosition() {
  const [seachParams] = useSearchParams();
  const Lat = seachParams.get("lat");
  const Lng = seachParams.get("lng");
  return [Lat, Lng];
}
