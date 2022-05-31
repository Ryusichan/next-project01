import Navigation from "./Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: "12rem" }}>{children}</div>
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
