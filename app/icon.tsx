import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FCD34D"
          width="28"
          height="28"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#B45309" strokeWidth="1" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
