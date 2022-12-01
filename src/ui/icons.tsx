import { SVGProps } from "react";

export const Geolocation = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <g clip-path="url(#a)">
        <path
          fill="currentColor"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Catalog = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <rect width="24" height="3.097" fill="currentColor" rx="1.548" />
      <rect
        width="24"
        height="3.097"
        y="10.065"
        fill="currentColor"
        rx="1.548"
      />
      <rect
        width="24"
        height="3.097"
        y="20.903"
        fill="currentColor"
        rx="1.548"
      />
    </svg>
  );
};

export const Cart = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M8.4 17.4c-.99 0-1.791.81-1.791 1.8S7.41 21 8.4 21c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8ZM3 3v1.8h1.8l3.24 6.831-1.215 2.205a1.74 1.74 0 0 0-.225.864c0 .99.81 1.8 1.8 1.8h10.8v-1.8H8.778a.223.223 0 0 1-.225-.225l.027-.108.81-1.467h6.705c.675 0 1.269-.369 1.575-.927l3.222-5.841A.903.903 0 0 0 20.1 4.8H6.789L5.943 3H3Zm14.4 14.4c-.99 0-1.791.81-1.791 1.8S16.41 21 17.4 21c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8Z"
      />
    </svg>
  );
};
