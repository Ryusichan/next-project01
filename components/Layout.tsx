import Navigation from "./Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      {children}
      <style jsx global>
        {`
          .active {
            color: red;
          }
        `}
      </style>
    </>
  );
}
