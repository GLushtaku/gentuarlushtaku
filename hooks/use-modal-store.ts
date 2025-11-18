import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  onOpen: (data: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }) => void;
  onClose: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  icon: () => null,
  onOpen: (data) =>
    set({
      isOpen: true,
      title: data.title,
      description: data.description,
      icon: data.icon,
    }),
  onClose: () =>
    set({
      isOpen: false,
      title: "",
      description: "",
      icon: () => null,
    }),
}));

