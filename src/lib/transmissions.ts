export interface Transmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  time: string;
}

const KEY = "joemark_transmissions";

export function loadTransmissions(): Transmission[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveTransmissions(list: Transmission[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch (err) {
    console.warn("Could not save transmissions", err);
  }
}

export function addTransmission(entry: Omit<Transmission, "id" | "time">) {
  const full: Transmission = {
    ...entry,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    time: new Date().toISOString(),
  };
  saveTransmissions([...loadTransmissions(), full]);
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
