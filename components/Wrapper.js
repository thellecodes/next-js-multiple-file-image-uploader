import Head from "next/head";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Nextjs Uploader</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      </Head>

      <ToastContainer
        className="alerts"
        bodyClassName="alertb"
        progressClassName="alertp"
        draggable={false}
      />

      <div className="mcontainer">{children}</div>
    </Fragment>
  );
};

export default Wrapper;
