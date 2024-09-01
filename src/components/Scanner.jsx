import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

function Scanner() {
  const [scanResult, setScanResult] = useState();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 24,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(error) {
      console.error(error);
    }

    // return () => {
    //   second
    // }
  }, []);

  return (
    <div>
      <h1>QR Scanner</h1>
      {scanResult ? (
        <div>
          Success! <a href="${scanResult}">{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}
export default Scanner;
