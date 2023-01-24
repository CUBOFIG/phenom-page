import { useQuery } from "@tanstack/react-query";
import api from "api/index";

async function fetchLiveStatus() {
  const { data } = await api.get();
  return data;
}

export function useFetchStatus() {
  return useQuery(["status"], fetchLiveStatus);
}
