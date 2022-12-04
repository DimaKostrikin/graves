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

export const ShoppingBag = (props: SVGProps<SVGSVGElement>) => {
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
          d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2Zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2Zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2Z"
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

export const Person = (props: SVGProps<SVGSVGElement>) => {
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
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
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

export const Search = (props: SVGProps<SVGSVGElement>) => {
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
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="24" height="24" fill="currentColor" rx="12" />
        </clipPath>
      </defs>
    </svg>
  );
};
