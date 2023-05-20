"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="w-80 h-80">
          <Image alt="image" src={src} fill className="object-cover" />
          <img src={src} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
