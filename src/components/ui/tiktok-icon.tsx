import React from 'react';

export function TikTokIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.02 5.664 5.664 0 0 1-3.638-1.757 5.809 5.809 0 0 1-1.701-3.558H10.16v13.286c0 .85-.163 1.617-.488 2.302a4.105 4.105 0 0 1-1.329 1.677 3.736 3.736 0 0 1-1.084.54 4.02 4.02 0 0 1-2.897-.223 3.955 3.955 0 0 1-1.329-1.01 4.109 4.109 0 0 1-.879-1.51 4.316 4.316 0 0 1 .02-3.185 4.098 4.098 0 0 1 .918-1.491 3.898 3.898 0 0 1 1.37-.972 3.973 3.973 0 0 1 1.682-.347v-3.322a7.817 7.817 0 0 0-2.897.559 7.245 7.245 0 0 0-2.429 1.549 7.426 7.426 0 0 0-1.662 2.34 7.48 7.48 0 0 0-.606 3.008c0 1.028.197 2.01.59 2.947a7.414 7.414 0 0 0 1.623 2.417 7.572 7.572 0 0 0 2.409 1.625A7.353 7.353 0 0 0 8.6 22a7.353 7.353 0 0 0 2.897-.578 7.572 7.572 0 0 0 2.409-1.625 7.414 7.414 0 0 0 1.623-2.417c.393-.937.59-1.92.59-2.947V8.884a8.763 8.763 0 0 0 3.202.597V6.14c0-.193-.001-.385-.004-.578z"/>
    </svg>
  );
}