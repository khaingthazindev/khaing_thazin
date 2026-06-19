import { FaSpinner } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <FaSpinner className="animate-spin text-gray-200" size={50} />
    </div>
  );
}